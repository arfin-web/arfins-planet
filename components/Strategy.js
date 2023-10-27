import Zoom from 'react-reveal/Zoom';

const Strategy = () => {
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-primary">My Project <span className='text-secondary'>Strategy</span></h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Zoom>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--n))" viewBox="0 0 256 256"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path></svg>
                                    </div>
                                    <h2 className="text-2xl title-font font-bold">Analysis</h2>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom delay={500}>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--n))" viewBox="0 0 256 256"><path d="M184,96a40,40,0,0,0-24-72H88A40,40,0,0,0,64,96a40,40,0,0,0,1.37,65A44,44,0,1,0,136,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H136V40h24A24,24,0,0,1,184,64ZM64,64A24,24,0,0,1,88,40h32V88H88A24,24,0,0,1,64,64Zm24,88a24,24,0,0,1,0-48h32v48H88Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,160,152Z"></path></svg>
                                    </div>
                                    <h2 className="text-2xl title-font font-bold">Design</h2>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom delay={1000}>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-full h-full bg-base-200 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-secondary flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="hsl(var(--n))" viewBox="0 0 256 256"><path d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path></svg>
                                    </div>
                                    <h2 className="text-2xl title-font font-bold">Development</h2>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </>
    )
}

export default Strategy