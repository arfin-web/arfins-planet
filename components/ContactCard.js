import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const contactInfo = [
    {
        id: 1,
        icon: 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z',
        value: '+8801739673620'
    },
    {
        id: 2,
        icon: 'M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z',
        value: 'arfinnoorrahman12@gmail.com'
    },
    {
        id: 3,
        icon: 'M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z',
        value: 'Sector 10, Uttara, Dhaka, Bangladesh'
    }
]

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
            <div className='container mx-auto px-2 lg:px-5 my-10' id='contact'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-stretch'>
                    <div className='lg:mt-32'>
                        {
                            contactInfo.map(info => (
                                <div className='flex justify-start items-center gap-2 mb-6' key={info.id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--p))" viewBox="0 0 256 256"><path d={info.icon}></path></svg>
                                    <h3 className='text-xl'>{info.value}</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div>
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