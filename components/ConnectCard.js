const ConnectCard = () => {
    return (
        <>
            <div className="card w-80 lg:w-96 h-44 bg-base-200 shadow-xl my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-primary font-bold mb-4">Connect With <span className='text-secondary'>Me</span></h2>
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://www.facebook.com/arfin.rahman.146' rel="noreferrer" target="_blank">
                                <img src='https://www.svgrepo.com/show/138943/facebook.svg' className='w-10' alt='fb' />
                            </a>
                            <a href='https://github.com/arfin-web' rel="noreferrer" target="_blank">
                                <img src='https://www.svgrepo.com/show/331408/github.svg' className='w-10' alt='git' />
                            </a>
                            <a href='https://www.linkedin.com/in/arfinnoorrahman/' rel="noreferrer" target="_blank">
                                <img src='https://www.svgrepo.com/show/158420/linkedin.svg' className='w-10' alt='linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectCard