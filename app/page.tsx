import Image from 'next/image'
import Link from 'next/link'

const pages = [
  {
    title: 'sidebar',
    href: '/sidebar'
  },
  {
    title: 'project gallery',
    href: '/project-gallery'
  },
  {
    title: 'infinite text move',
    href: '/infinite-text'
  },
  {
    title: 'card parallax',
    href: '/card-parallax'
  },
  {
    title: 'parallax section',
    href: '/parallax-section'
  },
  {
    title: 'preloader',
    href: '/preloader'
  },
  {
    title: 'wave shader',
    href: '/wave-shader'
  }
]

export default function Home() {
  return (
    <div className='grid h-screen place-content-center gap-2'>
      {pages.map(page => (
        <Link
          href={page.href}
          key={page.href}
          className='flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100'
        >
          {page.title}
        </Link>
      ))}
    </div>
  )
}
