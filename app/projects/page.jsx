import ProjectsPage from '@/components/projectspage'
import React from 'react'


const Projects = () => {
  return (
    <section className='p-6 w-full'>
       <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>My Projects</h1>
      <ProjectsPage />
    </div>
    </section>
  )
}

export default Projects