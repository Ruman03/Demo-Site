import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 text-gray-600">
            We are a team of passionate individuals committed to making a difference.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to empower people through technology and innovation. We strive to create solutions that enhance the lives of our users and contribute to a sustainable future.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Integrity: We believe in being honest and transparent in all our dealings.</li>
            <li>Innovation: We are dedicated to exploring new ideas and technologies to stay ahead.</li>
            <li>Collaboration: We work together as a team, valuing each member's contributions.</li>
            <li>Customer Focus: Our customers are at the heart of everything we do.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto" />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="mt-2 text-gray-500">{member.position}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our History</h2>
          <p className="text-gray-700">
            Founded in 2022, we started with a small team of enthusiasts who believed in the power of technology to change lives. Over the years, we have grown into a diverse group of professionals dedicated to delivering innovative solutions.
          </p>
          <p className="mt-4 text-gray-700">
            Our journey has been marked by numerous achievements, from launching our first product to expanding our services globally. We are proud of our growth and the impact we have made in the tech industry.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Future Plans</h2>
          <p className="text-gray-700">
            Looking ahead, we plan to expand our product offerings and enhance our services to meet the evolving needs of our customers. Our focus will remain on innovation and sustainability as we strive to make a positive impact on the world.
          </p>
        </div>
      </div>
    </section>
  );
};

// Sample team members data (you can replace this with your own data)
const teamMembers = [
  {
    id: 1,
    name: 'Alice Johnson',
    position: 'CEO',
    bio: 'Alice is a visionary leader with over 10 years of experience in the tech industry.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Bob Smith',
    position: 'CTO',
    bio: 'Bob is passionate about technology and leads our engineering team.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    position: 'Designer',
    bio: 'Charlie specializes in creating intuitive and user-friendly designs.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Developer',
    bio: 'David loves coding and is dedicated to building robust applications.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Eva Green',
    position: 'Marketing Manager',
    bio: 'Eva has a knack for crafting compelling marketing strategies.',
    image: 'https://via.placeholder.com/150',
  },
];

export default AboutUs;
