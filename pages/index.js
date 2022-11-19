import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Arfin's Planet</title>
        <meta name="description" content="Arfin's Offilcial Personal Website" />
        <meta name="keywords" content="Arfin's Planet, Arfin Noor Rahman, Arfin Web" />
        <meta name="author" content="Arfin's Planet" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Arfin's Planet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="lg:max-w-md">
            <h1 className="text-xl lg:text-5xl font-bold mb-8">Welome You To <span className='text-primary'>Arfin's<span className='text-secondary'>Planet</span></span></h1>
            <div className="mockup-code shadow-xl">
              <pre data-prefix="$" className='text-primary text-2xl'><code>npm i @arfinsplanet</code></pre>
              <pre data-prefix=">" className="text-warning text-2xl"><code>installing...[#####.......]</code></pre>
              <pre data-prefix=">" className="text-success text-2xl"><code>Successfully Done!</code></pre>
            </div>
            <button className="btn btn-wide btn-primary text-xl rounded-full mt-8">
              <Link href='/planet'>Enter Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
