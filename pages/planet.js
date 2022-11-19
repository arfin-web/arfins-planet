import React from 'react'
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

const Planet = () => {
    return (
        <>
            <Head>
                <title>Arfin's Planet</title>
                <meta name="description" content="Arfin's Planet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div id='home' className="container mx-auto px-4 lg:px-16 my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className='order-3 lg:order-1'>
                        <CodeCard />
                        <ResumeCard />
                    </div>
                    <div className='order-1 lg:order-2'>
                        <ProfileCard />
                    </div>
                    <div className='order-2 lg:order-3'>
                        <SkillCard />
                        <ConnectCard />
                    </div>
                </div>
                <div>
                    <Strategy />
                </div>
                <div id='projects'>
                    <TopProject />
                </div>
                <div id='contact'>
                    <ContactCard />
                </div>
            </div>
        </>
    )
}

export default Planet