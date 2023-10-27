const blogs = [
    {
        id: 1,
        title: "Deep Dive into NextJs",
        content: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.
        But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`,
        image: "https://scripts.goeswell.co.jp/wp-content/uploads/2023/03/nextjs-image.png"
    },
    {
        id: 2,
        title: "Redux - More Than State Management",
        content: `You might have heard the word Redux multiple times and you wonder What is Redux?
        Redux is simply a store to store the state of the variables in your app. Redux creates a process and procedures to interact with the store so that components will not just update or read the store randomly.`,
        image: "https://blog.dastasoft.com/_next/image?url=%2Fassets%2Fposts%2Fpreview%2Fredux-toolkit.webp&w=1920&q=75"
    },
    {
        id: 3,
        title: "Benefit of Using TypeScript",
        content: `TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.[5] Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.`,
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--cKHeGzUo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf3a8y7xh8aroo95qocz.jpg"
    }
]

const Blogs = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 my-10">
                <h1 className='text-3xl text-primary text-center font-bold mb-10'>Personal <span className='text-secondary'>Blogs</span></h1>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    {
                        blogs.map((blog) => (
                            <div className="card bg-base-100 hover:shadow-lg" key={blog.id}>
                                <figure><img src={blog.image} alt={blog.title} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {blog.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs