import React from 'react'

const Strategy = () => {
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-primary">My Project <span className='text-secondary'>Strategy</span></h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl title-font font-bold">Analysis</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-2xl title-font font-bold">Design</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl title-font font-bold">Development</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Strategy