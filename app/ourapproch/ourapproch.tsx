'use client';

import Image from 'next/image';

const apaAja = [
  {
    id: 1,
    image: '/assets/images/service/theme1.png',
    title: 'Artificial Intelligence (AI)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: '/assets/images/service/theme2.png',
    title: 'Internet of Things (IoT) Solution',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    image: '/assets/images/service/theme3.png',
    title: 'Smart Home Service',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    image: '/assets/images/service/theme4.png',
    title: 'Software Management & Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export function OurApproach() {
  return (
    <section className="bg-accent-900 py-16">
      {/* Heading */}
      <div className="mb-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-white md:text-3xl">
          Our Approach
        </h3>
        <p className="-mt-6 text-base text-white md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Orci mattis.
        </p>
      </div>

      {/* Grid Responsive */}
      <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4 sm:px-6">
        {apaAja.map((item) => (
          <div
            key={item.id}
            className="
              group relative aspect-square
              w-full overflow-hidden 
              rounded-lg
              shadow-lg sm:w-[48%] md:w-[48%] lg:max-w-[33%]
              lg:basis-[33%]
            "
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay gradasi putih dari kanan */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/95 to-transparent" />

            {/* Konten teks */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:items-end sm:px-6">
              <h3 className="max-w-[100%] text-left text-xl font-bold text-gray-900 sm:max-w-[60%]">
                {item.title}
              </h3>

              <p className="mt-2 max-w-full text-left text-lg text-gray-700 sm:max-w-[60%]">
                {item.description}
              </p>

              <a
                href="#"
                className="mt-4 px-4 text-lg font-bold text-gray-800 hover:text-gray-900 sm:px-6 lg:px-28"
              >
                More Info <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
