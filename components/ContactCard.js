import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const ContactCard = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pt0dnvo', 'template_narxogp', form.current, 'user_ODdpKQ7lUpHGR3sVtpazS')
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Message has successfully sent!',
                    imageUrl: 'https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?w=740&t=st=1684069589~exp=1684070189~hmac=a77293ca40b117b371d66e2010bbaeb064cea8af285508287f532fd471c899c3',
                    imageWidth: 250,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                })
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div id='contact' className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className='text-3xl text-primary text-center font-bold mb-8'>Contact With <span className='text-secondary'>Me</span></h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='user_name' placeholder="Your Name" className="input input-bordered input-primary w-full my-4" required />
                            <input type="email" name='user_email' placeholder="Your Email" className="input input-bordered input-primary w-full my-4" required />
                            <textarea className="textarea textarea-primary w-full my-4" name='message' placeholder="Your Message" required></textarea>
                            <input type='submit' className="btn btn-block btn-primary rounded-full mt-2" value='Send' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard