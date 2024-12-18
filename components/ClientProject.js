import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';

const projects = [
    {
        id: 1,
        title: 'Kormokary.com',
        description: 'A Local Marketplace',
        image: '/kormokary.png',
        link: 'https://kormokary.com',
    },
    {
        id: 2,
        title: 'Multilateral Model Institute',
        description: 'A School website for MMI',
        image: '/mmi.png',
        link: 'https://multilateralmodelinstitute.com',
    },
    {
        id: 3,
        title: 'Prime Consultancy & Travels',
        description: 'A Travel Agency website',
        image: '/pt.png',
        link: 'https://prime-travels-client.vercel.app/',
    }
]

const ClientProject = () => {
    return (
        <>
            <h1 className='text-3xl text-primary text-center font-bold mb-16'>Top Client <span className='text-secondary'>Projects</span></h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center'>
                {projects.map((project) => (
                    <a key={project.id} href={project.link} target="_blank" className="card card-compact bg-base-100 w-72 lg:w-full shadow-xl">
                        <figure>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={200}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default ClientProject