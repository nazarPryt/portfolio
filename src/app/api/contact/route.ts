import {NextResponse} from 'next/server'

export async function POST(request: Request) {
   try {
      const body = await request.json()
      const {name, email, message} = body

      console.log('Form data:', {name, email, message})

      return NextResponse.json({message: 'Message received successfully'}, {status: 200})
   } catch (error) {
      console.error('Error:', error)
      return NextResponse.json({message: 'Error receiving message'}, {status: 500})
   }
}
