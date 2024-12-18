import Head from 'next/head'
import CodeCard from '../components/CodeCard'
import ConnectCard from '../components/ConnectCard'
import ContactCard from '../components/ContactCard'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import ResumeCard from '../components/ResumeCard'
import SkillCard from '../components/SkillCard'
import Strategy from '../components/Strategy'
import TopProject from '../components/TopProject'
import Footer from '../components/Footer'
import Zoom from 'react-reveal/Zoom';
import Blogs from '../components/Blogs'
import AllSkills from '../components/AllSkills'
import ClientProject from '../components/ClientProject'

const Planet = () => {
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
            <div className="container mx-auto lg:px-4">
                <Navbar />
                <div id='home' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-8">
                    <div className='mx-auto order-3 lg:order-1'>
                        <Zoom delay={1000}>
                            <CodeCard />
                        </Zoom>
                        <Zoom delay={1000}>
                            <ResumeCard />
                        </Zoom>
                    </div>
                    <div className='mx-auto order-1 lg:order-2'>
                        <Zoom>
                            <ProfileCard />
                        </Zoom>
                    </div>
                    <div className='mx-auto order-2 lg:order-3'>
                        <Zoom delay={1000}>
                            <SkillCard />
                        </Zoom>
                        <Zoom delay={1000}>
                            <ConnectCard />
                        </Zoom>
                    </div>
                </div>
                <div className='mx-auto'>
                    <Strategy />
                </div>
                <div className='mx-auto'>
                    <AllSkills />
                </div>
                <div id='projects' className='mx-auto'>
                    <TopProject />
                </div>
                <div id='client' className='mx-auto'>
                    <ClientProject />
                </div>
                <div className='mx-auto'>
                    <Blogs />
                </div>
                <div id='contact' className='mx-auto'>
                    <Zoom>
                        <ContactCard />
                    </Zoom>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Planet