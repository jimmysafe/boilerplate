
import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { siteUrl } from '../../utils'

const ContactForm = () => {
    const [submitting, setSubmitting] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)


    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',   
          message: ''
        },
        onSubmit: async(values) => {
            setSubmitting(true)
            let res = await axios.post(`${siteUrl}/api/mail`, { values })
            if(res.data.success) {
                setSubmitting(false)
                formik.handleReset()
                setShowSuccessMessage(true)
                setShowErrorMessage(false)
            } else {
                setSubmitting(false)
                setShowSuccessMessage(false)
                setShowErrorMessage(true)
            }
        },
      });

    return (
        <div className="section-contact-form">
                <form onSubmit={formik.handleSubmit} id="contact">
                    <div className="title">
                        <h2>Get in touch</h2>
                    </div>
                    <div className="row">
                        <div className="input">
                            {/* <span>Name</span> */}
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                placeholder="Your Name" 
                                onChange={formik.handleChange} 
                                value={formik.values.name}
                            />
                        </div>
                        <div className="input">
                            {/* <span>Email</span> */}
                            <input 
                                type="email" 
                                required
                                id="email" 
                                name="email" 
                                placeholder="Your Email" 
                                onChange={formik.handleChange} 
                                value={formik.values.email}
                            />
                        </div>
                    </div>
                    <div className="message">
                        {/* <span>Message</span> */}
                        <textarea 
                            required
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10"
                            placeholder="Message" 
                            onChange={formik.handleChange} 
                            value={formik.values.message}
                        />
                    </div>
                    

                    {showErrorMessage || showSuccessMessage &&
                        <div className="notification">
                            {showSuccessMessage && 
                                <div className="notification-message success">
                                    <p>Message Sent! We will get back in touch asap!</p>
                                </div>
                            }
                            {showErrorMessage &&
                                <div className="notification-message error">
                                    <p>Oops! Something went wrong</p>
                                </div>
                            }
                        </div>
                    }
                    <div className="flex content-center items-center m-t-md">
                        <button className="btn" disabled={submitting}>{submitting ? 'Sending..' : 'Send'}</button>
                    </div>
                </form>
        </div>
    )
}

export default ContactForm
