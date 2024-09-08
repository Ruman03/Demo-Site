import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardGrid = () => {
  const cards = [
    {
      title: 'AI',
      description: 'A revamped and dynamic approach to yoga analytics',
      imageUrl: '/image/ai.jpg',
      tags: ['Discovery', 'Brand Guidelines', 'Yoga'],
    },
    {
      title: 'Samsung',
      description: "Rewriting sport's playbook for billions of athletes",
      imageUrl: '/image/samsung.jpg',
      tags: ['Brand Strategy', 'Visual Identity'],
    },
    {
      title: 'Infinix',
      description: 'Designing a new cocktail can',
      imageUrl: '/image/infinix.jpg',
      tags: ['Brand Strategy', 'Visual Identity'],
    },
    {
      title: 'Pixel',
      description: 'From cutting-edge equipment to stylish apparel',
      imageUrl: '/image/pixel.jpg',
      tags: ['Sports Gear', 'Equipment', 'Discovery'],
    },
  ];

  return (
    <div className="py-12 grid justify-center items-center grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
      {cards.map((card, index) => (
        <Link key={index} className="group flex flex-col focus:outline-none" href="#">
          <div className="w-[400px] aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
            <Image
              className=" w-full h-72 group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              width={400}
            height={200}
              src={card.imageUrl}
              alt={`${card.title} Image`}
            />
          </div>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
              {card.title}
            </h3>
            <p className="mt-1 text-gray-600">{card.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {card.tags.map((tag, tagIndex) => (
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

export default CardGrid;
