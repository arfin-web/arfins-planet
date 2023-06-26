import Zoom from 'react-reveal/Zoom';

const TopProject = () => {
    return (
        <>
            <h1 className='text-3xl text-primary text-center font-bold mb-16'>Some things <span className='text-secondary'>I've Built</span></h1>

            <Zoom>
                <div class="container my-16 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <figure className='w-full glass rounded-xl p-2'>
                            <a rel="noreferrer" target="_blank" href='https://shop-manager.vercel.app/'>
                                <img src="https://cdn.sanity.io/images/ymxgha9c/production/cbda2c9cbb6dbc896a01c497e4831443f8cf86c1-1800x760.png?w=3840&q=75&fit=clip&auto=format" alt="Album" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">Shop Management System</h2>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Easily Generate Invoice for customers
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Multiple Theme Added
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>100% Responsive
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className="flex">
                                <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10 m-2' alt='tailwindcss' />
                            </div>
                            <div className="card-actions mt-2 justify-start">
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://shop-manager.vercel.app/'>Live Site</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>

            <Zoom>
                <div class="container my-16 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="card-body order-2 lg:order-1">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">Prime Travels</h2>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Unique and Modern Design
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Intuitive User Experience
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Responsive and Cross-Platform Compatibility
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className="flex">
                                <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10 m-2' alt='tailwindcss' />
                            </div>
                            <div className="card-actions mt-2 justify-start">
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://www.primetravelsbd.info/'>Live Site</a>
                                </button>
                            </div>
                        </div>
                        <figure className='w-full glass rounded-xl p-2 order-1 lg:order-2'>
                            <a rel="noreferrer" target="_blank" href='https://paycube.vercel.app/'>
                                <img src="https://cdn.sanity.io/images/ymxgha9c/production/d98e7acc41f59739ac5ff4da933a4b05693b6da7-1800x760.png?w=3840&q=75&fit=clip&auto=format" alt="Album" />
                            </a>
                        </figure>
                    </div>
                </div>
            </Zoom>

            <Zoom>
                <div class="container my-16 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <figure className='w-full glass rounded-xl p-2'>
                            <a rel="noreferrer" target="_blank" href='https://mmi-official.vercel.app/'>
                                <img src="https://cdn.sanity.io/images/ymxgha9c/production/15cdf644e14dd277fa749983335613b3da263114-1800x760.png?w=3840&q=75&fit=clip&auto=format" alt="Album" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">Multilateral Model Institute</h2>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Modern and Sleek Design
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Seamless User Experience
                            </h3>
                            <h3 className="flex items-center text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Cross-Device Compatibility
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className="flex">
                                <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                <img src='https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg' className='w-10 m-2' alt='bootstrap' />
                            </div>
                            <div className="card-actions mt-2 justify-start">
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://multilateralmodelinstitute.com/'>Live Site</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    )
}

export default TopProject