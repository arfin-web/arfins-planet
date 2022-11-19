import React from 'react'

const ResumeCard = () => {
    return (
        <>
            <div className="card w-96 lg:w-80 h-44 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-primary font-bold mb-4">Download My <span className='text-secondary'>Resume</span></h2>
                    <button className="btn btn-wide text-xl font-bold rounded-full">Download</button>
                </div>
            </div>
        </>
    )
}

export default ResumeCard