import React from 'react'

const ProfileCsrd = () => {
    return (
        <>
            <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className="card w-80 bg-base-200 shadow-xl">
                            <div className="card-body items-center text-center">
                                <div className="avatar">
                                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://cdn.sanity.io/images/ymxgha9c/production/31c5db0ad43be1004a2721276576fde1a887f5ad-500x499.png?w=1080&q=75&fit=clip&auto=format" />
                                    </div>
                                </div>
                                <h1 className='text-secondary text-2xl font-bold mt-2'>Arfin Noor Rahman</h1>
                                <div className="badge badge-lg badge-primary font-bold text-2xl py-4 mt-2">Frontend Developer</div>
                                <h3 className='text-md mt-2'>
                                    As an enthusiastic Frontend Developer with appropriate knowledge and proficiency, I have the capability to produce high-quality, scalable, awesome UI, better user experience and high-performance web applications.
                                </h3>
                                <img src='https://www.svgrepo.com/show/223047/gmail.svg' className='w-10 mt-2 mr-1' alt='gmail' />
                                <h3 className='normal-font text-lg font-bold'>arfinnoorrahman12@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCsrd