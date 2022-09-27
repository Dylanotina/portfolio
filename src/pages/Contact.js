import React, {useRef} from 'react'
import "../styles/Contact.css"
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

function Contact() {

  const form = useRef()

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const EMAILJS_API_KEY = process.env.REACT_APP_EMAILJS_API_KEY

const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, EMAILJS_API_KEY)
  .then((result) => {
      console.log(result.text);
      Swal.fire({icon: 'success', title:'Message Sent Successfully'})
  }, (error) => {
      console.log(error.text);
      Swal.fire({icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text})
  });

}

  return (
    <div className="contact-container">
      <h1>Contact me</h1>
    <div className='form-container'>
      <form ref={form} onSubmit={sendEmail}>
      <label >Full name: </label>
      <input type="text" name="user_name" id="name" />
      
      <label >Email: </label>
      <input type="email" name="user_email" id="email" />

      <label >Subject:</label>
      <input type="text" name="subject" id="subject" />
      
      <label>Message: </label>
      <textarea  name="user_message" placeholder="Write your message..." style={{height:"100px"}}></textarea>
      <button type="submit" className="btn">Submit</button>
    
      </form>
    </div>
    </div>
  )
}

export default Contact