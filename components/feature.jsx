import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Push your code to your repository and we will automatically deploy it to your server. No more manual deployments.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'We provide free SSL certificates for all your domains. Keep your data secure and your users safe.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'We provide simple queues that allow you to process tasks in the background. No more waiting for slow tasks to complete.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'We provide advanced security features that help you keep your data safe. From two-factor authentication to IP whitelisting, we have you covered.',
    icon: FingerPrintIcon,
  },
]

const Feature = () => {
  return (

    <section className='relative'>

    <Image
    src='/image/bg2.svg'
    alt='Background Image'
    width='400'
    height='400'
    className='absolute bottom-0'
    />


    <div className="bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Services that we offer to our Clients
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We offer a range of services that help you deploy your applications faster and with more confidence. From SSL certificates to advanced security, we have you covered.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
          </section>
  )
}

export default Feature