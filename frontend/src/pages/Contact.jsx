import React from 'react'

const Contact = () => {
  return (
   <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text_para'>Got a technical issue ? Want to send feedback about a beta feature ? Let us know</p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form_lable'>Your email</label>
          <input type="email" id='email' placeholder='example@email.com' className='form_input mt-1' />
        </div>
        <div>
          <label htmlFor="subject" className='form_lable'>Subject</label>
          <input type="text" id='subject' placeholder='How we can help you ?' className='form_input mt-1' />
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form_lable'>Your message</label>
          <textarea rows="5" type="text" id='message' placeholder='leave a comment...' className='form_input mt-1' />
        </div>
        <button className='btn '>Submit</button>
      </form>
    </div>
   </section>
  )
}

export default Contact