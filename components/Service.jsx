import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive and interactive websites using the latest technologies.',
      icon: '🌐',
      backgroundColor: 'bg-blue-100',
    },
    {
      title: 'Mobile App Development',
      description: 'Building mobile applications for iOS and Android platforms.',
      icon: '📱',
      backgroundColor: 'bg-green-100',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing user-friendly interfaces and experiences for web and mobile applications.',
      icon: '🎨',
      backgroundColor: 'bg-yellow-100',
    },
    {
      title: 'SEO Optimization',
      description: 'Improving website visibility and ranking on search engines.',
      icon: '🔍',
      backgroundColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 ${service.backgroundColor}`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
            <button className="mt-4 px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
