import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';

const TopProject = () => {
    return (
        <>
            <h1 className='text-3xl text-primary text-center font-bold mb-16'>Some things <span className='text-secondary'>I've Built</span></h1>

            <Zoom>
                <div class="container my-12 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <figure className='w-full'>
                            <a rel="noreferrer" target="_blank" href='https://hr-manager-iota.vercel.app/'>
                                <Image
                                    src="/hm.png"
                                    width={500}
                                    height={500}
                                    alt='HR Manager'
                                    className='rounded-xl shadow-xl'
                                />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">HR Management System</h2>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Centralized insights for streamlined employee and HR task management.
                            </h3>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Effortlessly handle employee data, updates, and payroll processing.
                            </h3>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Simplified task assignments with progress tracking and completion status.
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className='flex flex-col lg:flex-row'>
                                <div className="flex">
                                    <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                    <img src='https://www.svgrepo.com/show/354119/nodejs-icon.svg' className='w-10 m-2' alt='nodejs' />
                                    <img src='https://www.svgrepo.com/show/376367/express.svg' className='w-10 m-2' alt='expressjs' />
                                    <img src='https://www.svgrepo.com/show/331488/mongodb.svg' className='w-10 m-2' alt='mongodb' />
                                </div>
                                <div className='flex'>
                                    <img src='https://www.svgrepo.com/show/452093/redux.svg' className='w-10 m-2' alt='redux' />
                                    <img src='https://www.svgrepo.com/show/439022/typescript.svg' className='w-10 m-2' alt='typescript' />
                                    <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10 m-2' alt='tailwindcss' />
                                </div>
                            </div>
                            <div className="card-actions mt-2 justify-start items-center gap-2">
                                <button className="btn rounded-full btn-secondary btn-outline">
                                    <a rel="noreferrer" target="_blank" href='https://github.com/arfin-web/hr-manager'>Github</a>
                                </button>
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://hr-manager-iota.vercel.app/'>Live Site</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>

            <Zoom>
                <div class="container my-12 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="card-body order-2 lg:order-1">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">Office Dine</h2>
                            <h3 className="flex justify-start items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Implemented robust User Authentication System and efficient
                                'Add to Cart' feature for seamless meal selection.
                            </h3>
                            <h3 className="flex justify-start items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Designed and constructed a user-friendly User Dashboard.
                            </h3>
                            <h3 className="flex justify-start items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Created a comprehensive Admin Dashboard with advanced
                                functionality.
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className="flex">
                                <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                <img src='https://www.svgrepo.com/show/452093/redux.svg' className='w-10 m-2' alt='redux' />
                                <img src='https://www.svgrepo.com/show/439022/typescript.svg' className='w-10 m-2' alt='typescript' />
                                <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10 m-2' alt='tailwindcss' />
                            </div>
                            <div className="card-actions mt-2 justify-start items-center gap-2">
                                <button className="btn rounded-full btn-secondary btn-outline">
                                    <a rel="noreferrer" target="_blank" href='https://github.com/arfin-web/office-dine'>Github</a>
                                </button>
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://officedine.vercel.app/'>Live Site</a>
                                </button>
                            </div>
                        </div>
                        <figure className='w-full order-1 lg:order-2'>
                            <a rel="noreferrer" target="_blank" href='https://officedine.vercel.app/'>
                                <Image
                                    src="/od.png"
                                    width={500}
                                    height={500}
                                    alt='OfficeDine'
                                    className='rounded-xl shadow-xl'
                                />
                            </a>
                        </figure>
                    </div>
                </div>
            </Zoom>

            <Zoom>
                <div class="container my-12 px-4 mx-auto">
                    <div class="card grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <figure className='w-full'>
                            <a rel="noreferrer" target="_blank" href='https://hotelify-two.vercel.app/'>
                                <Image
                                    src="/hf.png"
                                    width={500}
                                    height={500}
                                    alt='HR Manager'
                                    className='rounded-xl shadow-xl'
                                />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-primary font-bold mb-2">Hotelify</h2>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Designed a responsive interface with seamless cross-device compatibility.
                            </h3>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Integrated modern UI frameworks for dynamic and interactive layouts.
                            </h3>
                            <h3 className="flex justify-center items-start text-lg mb-2">
                                <span className="w-8 h-8 text-secondary mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Optimized components for fast loading and smooth user navigation.
                            </h3>
                            <h2 className='text-lg font-bold text-primary'>Technology used:</h2>
                            <div className="flex">
                                <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10 m-2' alt='nextjs' />
                                <img src='https://www.svgrepo.com/show/439022/typescript.svg' className='w-10 m-2' alt='typescript' />
                                <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10 m-2' alt='tailwindcss' />
                            </div>
                            <div className="card-actions mt-2 justify-start items-center gap-2">
                                <button className="btn rounded-full btn-secondary btn-outline">
                                    <a rel="noreferrer" target="_blank" href='https://github.com/next-webify/hotel-frontend'>Github</a>
                                </button>
                                <button className="btn rounded-full btn-primary">
                                    <a rel="noreferrer" target="_blank" href='https://hotelify-two.vercel.app/'>Live Site</a>
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