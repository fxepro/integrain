import { NextRequest, NextResponse } from 'next/server'

// TODO: Wire up to Resend, Sendgrid, or Formspree
// npm install resend
// import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Example with Resend:
    // await resend.emails.send({
    //   from: 'forms@integrainfoundation.org',
    //   to: 'contact@integrainfoundation.org',
    //   subject: `New form submission: ${data.subject_or_area_of_interest || 'Contact Form'}`,
    //   html: `<pre>${JSON.stringify(data, null, 2)}</pre>`
    // })

    console.log('Form submission:', data)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Submission failed' }, { status: 500 })
  }
}
