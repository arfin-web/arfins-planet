const CodeCard = () => {
    return (
        <>
            <div className="mockup-code mb-8 w-80 bg-base-200 overflow-x-hidden">
                <pre className='text-primary'><code>1.<span className='text-secondary'>const</span> FName = 'Arfin';</code></pre>
                <pre className='text-primary'><code>2.<span className='text-secondary'>const</span> LName = 'Rahman';</code></pre>
                <pre className='text-primary'><code>3.<span className='text-secondary'>console.log</span>(FName+ " " +LName)</code></pre>
                <pre className='text-primary'><code>4.<span className='text-secondary'>Result:</span> Arfin Rahman</code></pre>
            </div>
        </>
    )
}

export default CodeCard