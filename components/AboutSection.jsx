"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:'Skills',
        id:'skills',
        content: (
            <ul className=' list-disc pl-2'>
                <li>Next.js</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Html</li>
                <li>Django</li>
                <li>C#</li>
                <li>Unity</li>
                <li>Blender</li>
            </ul>
        )

    },
    {
        title:'Education',
        id:'education',
        content: (
            <ul className=' list-disc pl-2'>
                <li>My education</li>
            </ul>
        )

    },
    {
        title:'Certifications',
        id:'certifications',
        content: (
            <ul className=' list-disc pl-2'>
                <li>My Certifications</li>
            </ul>
        )

    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className=' text-white' id='about'>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className='rounded-full h-[305px] w-[305px] lg:w-[305px] lg:h-[305px]  relative'>
                <div className=' h-[305px] w-[305px] lg:w-[305px] lg:h-[305px] blur-sm  bg-orange-400 rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                </div>                   
                <Image
                    className=" rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    src='/images/pc.jpg'
                    alt='logo'
                    width={300}
                    height={300}   />
            </div>
            <div className=' mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className=' text-4xl font-bold mb-4'>
                    About Me
                </h2>
                <p className=' text-base lg:text-lg'>
                    I am a full-stack web and game developer with a passion for creating interactive
                    and creative projects. I have experience working with Javascript, React, Node.js, HTML, CSS, Git,
                     C#. Python, Django, Unity Game Engine, UnrealEngine and Blender. I am a quick learner and I am 
                     always looking to expand my knowledge and skill set. I am a team player and I am excited to work 
                     with other's to create amazing games and applications.
                </p>
                <div className=' flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={() => (
                            handleTabChange('skills')
                        )} active={tab==='skills'}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => (
                            handleTabChange('education')
                        )} active={tab==='education'}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => (
                            handleTabChange('certifications')
                        )} active={tab==='certifications'}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className=' mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection