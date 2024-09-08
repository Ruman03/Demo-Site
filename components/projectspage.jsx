import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      imageUrl: '/image/portfolio.avif',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'To-Do List App',
      description: 'A simple to-do list app built with vanilla JavaScript.',
      imageUrl: '/image/list.avif',
      tags: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Memory Game',
      description: 'A fun memory game where you match pairs of cards.',
      imageUrl: '/image/game.avif',
      tags: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Blog Platform',
      description: 'A full-stack blog platform built with Next.js and Node.js.',
      imageUrl: '/image/blog.avif',
      tags: ['Next.js', 'Node.js', 'MySQL'],
    },
  ];

  return (
    <div className="py-12 grid justify-center items-center grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
      {projects.map((project, index) => (
        <Link key={index} className="group flex flex-col focus:outline-none" href="#">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
            <Image
              className="w-full h-72 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              width={800}
                height={100}
              src={project.imageUrl}
              alt={`${project.title} Image`}
              
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
              {project.title}
            </h3>
            <p className="mt-1 text-gray-600">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsPage;
