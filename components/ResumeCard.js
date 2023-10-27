const ResumeCard = () => {
    return (
        <>
            <div className="card w-80 h-44 bg-base-200 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-primary font-bold mb-4">Download My <span className='text-secondary'>Resume</span></h2>
                    <a href="https://drive.google.com/file/d/1mQYp00rUZ-ccrA8HT9gqGkTSPPojxEz7/view?usp=drive_link" rel="noreferrer" target="_blank" className="btn btn-wide text-xl font-bold rounded-full">Download</a>
                </div>
            </div>
        </>
    )
}

export default ResumeCard