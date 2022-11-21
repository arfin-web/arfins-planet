import React from 'react'

const SkillCard = () => {
    return (
        <>
            <div className="card w-96 h-auto bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl text-primary font-bold mb-4">Key <span className='text-secondary'>Skills</span></h2>
                    <div className="grid grid-flow-col gap-4">
                        <img src='https://www.svgrepo.com/show/373669/html.svg' className='w-10' alt='html' />
                        <img src='https://www.svgrepo.com/show/349330/css3.svg' className='w-10' alt='css' />
                        <img src='https://www.svgrepo.com/show/373705/js-official.svg' className='w-10' alt='es6' />
                        <img src='https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg' className='w-10' alt='bootstrap' />
                        <img src='https://www.svgrepo.com/show/354431/tailwindcss-icon.svg' className='w-10' alt='tailwindcss' />
                    </div>
                    <div className="grid grid-flow-col gap-4 mt-4">
                        <img src='https://www.svgrepo.com/show/355190/reactjs.svg' className='w-10' alt='reactjs' />
                        <img src='https://www.svgrepo.com/show/369457/nextjs.svg' className='w-10' alt='nextjs' />
                        <img src='https://www.svgrepo.com/show/303670/firebase-1-logo.svg' className='w-10' alt='firebase' />
                        <img src='https://avatars.githubusercontent.com/u/17177659?s=200&v=4' className='w-10' alt='sanity.io' />
                    </div>
                    <div className="grid grid-flow-col gap-4 mt-4">

                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCard