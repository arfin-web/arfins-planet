const skills = [
    {
        id: 1,
        title: 'HTML5',
        icon: 'https://www.svgrepo.com/show/452228/html-5.svg'
    },
    {
        id: 2,
        title: 'CSS3',
        icon: 'https://www.svgrepo.com/show/349330/css3.svg'
    },
    {
        id: 3,
        title: 'JavaScript',
        icon: 'https://www.svgrepo.com/show/349419/javascript.svg'
    },
    {
        id: 4,
        title: 'Bootstrap',
        icon: 'https://www.svgrepo.com/show/353498/bootstrap.svg'
    },
    {
        id: 5,
        title: 'ReactJs',
        icon: 'https://www.svgrepo.com/show/355190/reactjs.svg'
    },
    {
        id: 6,
        title: 'Redux',
        icon: 'https://www.svgrepo.com/show/354274/redux.svg'
    },
    {
        id: 7,
        title: 'NodeJS',
        icon: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg'
    },
    {
        id: 8,
        title: 'ExpressJS',
        icon: 'https://www.svgrepo.com/show/376367/express.svg'
    },
    {
        id: 9,
        title: 'MongoDB',
        icon: 'https://www.svgrepo.com/show/331488/mongodb.svg'
    },
    {
        id: 10,
        title: 'TypeScript',
        icon: 'https://www.svgrepo.com/show/349540/typescript.svg'
    },
    {
        id: 11,
        title: 'NextJs',
        icon: 'https://www.svgrepo.com/show/521299/next-16.svg'
    },
    {
        id: 12,
        title: 'Tailwind CSS',
        icon: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg'
    },
    {
        id: 13,
        title: 'Git',
        icon: 'https://www.svgrepo.com/show/509966/git.svg'
    },
]

const AllSkills = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 mt-5 mb-14">
                <div className="flex flex-col text-center w-full mb-16">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-primary">My <span className='text-secondary'>Skill Sets</span></h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 place-items-center">
                    {skills.map(skill => (
                        <button className="btn btn-outline btn-lg" key={skill.id}>
                            <img src={skill.icon} className='w-8 mr-2' alt={skill.title} />
                            {skill.title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllSkills