import Image from 'next/image';
import Link from 'next/link';

const pages = [
  {
    title: 'sidebar',
    href: '/sidebar',
  },
  {
    title: 'project gallery',
    href: '/project-gallery',
  },
];

export default function Home() {
  return (
    <div className='h-screen grid place-content-center gap-2'>
      {pages.map(page => (
        <Link
          href={page.href}
          key={page.href}
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
