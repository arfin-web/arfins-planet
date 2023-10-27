const ProfileCsrd = () => {
    return (
        <>
            <div className="mockup-phone border-primary w-80">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <div className="card w-full">
                            <div className="card-body grid grid-cols-1 place-items-center">
                                <div className="avatar mr-4">
                                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://cdn.sanity.io/images/ymxgha9c/production/31c5db0ad43be1004a2721276576fde1a887f5ad-500x499.png?w=1080&q=75&fit=clip&auto=format" />
                                    </div>
                                </div>
                                <h1 className='text-secondary text-2xl font-bold mt-2 mr-4'>Arfin Noor Rahman</h1>
                                <div className="badge badge-lg badge-primary font-bold text-xl py-4 mt-2 mr-4">Frontend Developer</div>
                                <h3 className='text-md mt-2 mr-3'>
                                    Innovative Frontend Developer with a Knack for Crafting Seamless User Journeys | Transforming the Digital Landscape | Mastering the Art of Visual Brilliance
                                </h3>
                                <img src='https://www.svgrepo.com/show/452213/gmail.svg' className='w-10 mt-2 mr-4' alt='gmail' />
                                <h3 className='normal-font text-base font-bold mr-4'>arfinnoorrahman12@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCsrd