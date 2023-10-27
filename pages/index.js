import Head from 'next/head'
import Link from 'next/link'
import Typewriter from "typewriter-effect";
import Zoom from 'react-reveal/Zoom';

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
            <Zoom>
              <h1 className="text-3xl lg:text-5xl font-bold mb-8">Welome You To <span className='text-primary'>Arfin's<span className='text-secondary'>Planet</span></span></h1>
            </Zoom>
            <Zoom>
              <div className="mockup-code w-80 lg:w-auto h-44 shadow-xl">
                <pre className='text-success text-xl lg:text-2xl'><code>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("$ npm i @arfinsplanet")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("> installing...[#####]")
                        .deleteAll()
                        .typeString("> Successfully Done!")
                        .start();
                    }}
                  />
                </code></pre>
              </div>
            </Zoom>
            <Zoom delay={14000}>
              <button className="btn btn-wide btn-primary text-xl rounded-full mt-8">
                <Link href='/planet'>Enter Now</Link>
              </button>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  )
}
