import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactCard = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o6517kp', 'template_narxogp', form.current, 'user_ODdpKQ7lUpHGR3sVtpazS')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div id='contact' className="hero min-h-screen bg-base-100">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className='text-3xl text-primary text-center font-bold mb-8'>Contact With <span className='text-secondary'>Me</span></h1>
                            <input type="text" name='user_name' placeholder="Your Name" className="input input-bordered input-primary w-full my-4" required />
                            <input type="email" name='user_email' placeholder="Your Email" className="input input-bordered input-primary w-full my-4" required />
                            <textarea className="textarea textarea-primary w-full my-4" name='message' placeholder="Your Message" required></textarea>
                            <input type='submit' className="btn btn-block btn-primary rounded-full mt-2" value='Send' />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactCard