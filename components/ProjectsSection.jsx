"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: 'Digital Clock',
        description: 'A digital clock app',
        image: '/images/projects/p-1.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/react-exercises/tree/main/my-react-app%20-digital-clock',
        previewUrl: 'https://react-exercises-digital-clock-xi.vercel.app/',
    },
    {
        id: 2,
        title: 'Stopwatch',
        description: 'A simple Stopwatch app',
        image: '/images/projects/p-2.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/react-exercises/tree/main/my-react-app%20-stopwatch-app',
        previewUrl: 'https://react-exercises-stopwatch.vercel.app/',
    },
    {
        id: 3,
        title: 'To-Do List',
        description: 'A simple to do list app',
        image: '/images/projects/p-3.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/react-exercises/tree/main/my-react-app%20-to-do-list',
        previewUrl: 'https://react-exercises-to-do-list.vercel.app/',
    },
    {
        id: 4,
        title: 'Landing page',
        description: 'A React landing page example',
        image: '/images/projects/p-4.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/react-landing-page-exercise',
        previewUrl: 'https://react-landing-page-exercise.vercel.app/',
    },
    {
        id: 5,
        title: 'Next.js blog',
        description: 'An example of a next.js blog app',
        image: '/images/projects/p-5.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/nextjs-blog',
        previewUrl: 'https://nextjs-blog-sigma-two-41.vercel.app/',
    },
    {
        id: 6,
        title: 'Material UI social site',
        description: 'A template of a social posting site using next.js and mui.',
        image: '/images/projects/p-6.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/P442-byte/mui_social/tree/main',
        previewUrl: 'https://mui-social-lime.vercel.app/',
    },
    {
        id: 7,
        title: 'Tankoids',
        description: 'A 2D top-down shooter game in development',
        image: '/images/projects/p-game.png',
        tag: ['All', 'Game'],
        gitUrl: '/',
        previewUrl: '/',
    },
]

const ProjectsSection = () => {

    const [tag, setTag] = useState("All")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id='projects'>
        <h2 className=' text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
              onClick={handleTagChange} 
              name="All" 
              isSelected={tag ==="All"} />

            <ProjectTag 
              onClick={handleTagChange} 
              name="Web" 
              isSelected={tag ==="Web"} />

            <ProjectTag 
              onClick={handleTagChange} 
              name="Game" 
              isSelected={tag ==="Game"} />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{duration: 0.2, delay: index * 0.3}}
                >
                    <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tag={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl} />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection