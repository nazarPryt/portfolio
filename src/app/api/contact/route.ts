import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'
import {Options} from 'nodemailer/lib/mailer'
import {EmailTemplate} from '@/shared/EmailTemplate'
import {Redis} from '@upstash/redis'

const redis = new Redis({
   url: process.env.UPSTASH_REDIS_REST_URL!,
   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const RATE_LIMIT = 5 // Maximum requests
const TIME_WINDOW = 60 * 60 // 1 hour in seconds

async function rateLimit(ip: string) {
   const requests = await redis.incr(ip)
   if (requests === 1) {
      await redis.expire(ip, TIME_WINDOW)
   }
   return requests <= RATE_LIMIT
}

export async function POST(request: Request) {
   const ip = request.headers.get('x-forwarded-for') || '127.0.0.1'

   if (!(await rateLimit(ip))) {
      console.log('error: Rate limit exceeded. Try again later.')
      return NextResponse.json({message: 'Rate limit exceeded. Try again later.'}, {status: 429})
   }

   try {
      const body = await request.json()
      const {name, email, message} = body

      const emailTemplate = EmailTemplate({
         email,
         message,
         name,
      })
      const transporter = nodemailer.createTransport({
         host: String(process.env.SMTP_HOST) || 'local',
         port: Number(process.env.SMTP_PORT) || 0,
         secure: false,
         auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
         },
      })

      const mailOptions: Options = {
         html: emailTemplate.html,
         from: email,
         to: process.env.SMTP_USER,
         subject: `Message from portfolio`,
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent: ' + info.response)

      return NextResponse.json({message: 'Message sent successfully!'}, {status: 200})
   } catch (error) {
      console.error('Error:', error)
      return NextResponse.json({message: 'Error sending message'}, {status: 500})
   }
}
