import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer'
import {Options} from 'nodemailer/lib/mailer'
import {wait} from 'next/dist/lib/wait'

export async function POST(request: Request) {
   try {
      const body = await request.json()
      const {name, email, message} = body
      const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
      console.log('starting...')
      await wait(1000)
      console.log('finishing...')
      // const transporter = nodemailer.createTransport({
      //    host: String(process.env.SMTP_HOST) || 'local',
      //    port: Number(process.env.SMTP_PORT) || 0,
      //    secure: false,
      //    auth: {
      //       user: process.env.SMTP_USER,
      //       pass: process.env.SMTP_PASSWORD,
      //    },
      // })
      //
      // const mailOptions: Options = {
      //    from: email,
      //    to: process.env.SMTP_USER,
      //    subject: `Message from portfolio`,
      //    text: ` name: ${name}, email: ${email}, message: ${message}`,
      // }
      //
      // const info = await transporter.sendMail(mailOptions)
      // console.log('Email sent: ' + info.response)

      return NextResponse.json({message: 'Message sent successfully!'}, {status: 200})
   } catch (error) {
      console.error('Error:', error)
      return NextResponse.json({message: 'Error sending message'}, {status: 500})
   }
}
