import React from 'react'

const CodeCard = () => {
    return (
        <>
            <div className="mockup-code mb-8 w-96 lg:w-80 bg-base-200 overflow-x-hidden">
                <pre className='text-primary'><code>1.<span className='text-secondary'>const</span> Name = 'Arfin';</code></pre>
                <pre className='text-primary'><code>2.<span className='text-secondary'>const</span> Title = 'The Frontend Guy'</code></pre>
                <pre className='text-primary'><code>3.<span className='text-secondary'>Result:</span> Arfin The Frontend Guy</code></pre>
            </div>
        </>
    )
}

export default CodeCard