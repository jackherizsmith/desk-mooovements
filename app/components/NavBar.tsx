'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@radix-ui/themes';

export default function NavBar({ user }: { user: string | null }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const router = useRouter();

  const handleLoginButtonClick = () => {
    router.push('/login');
  };

  return (
    <>
      <div className='mb-[5rem]'></div>
      <nav
        data-testid='navbar'
        className='fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'
      >
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <a
            data-testid='navbar-home-link'
            href='/'
            className='flex items-center'
          >
            <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
              DeskMooovement
            </span>
          </a>
          {/* desktop view */}
          <div className='hidden md:flex'>
            <ul className='mt-4 flex space-x-8 rounded-lg border border-gray-100 bg-gray-50 p-0 font-medium'>
              {!isMenuOpen && (
                <>
                  <li>
                    <Link
                      href='/'
                      className='block rounded bg-blue-700 px-4 py-2 text-white'
                      aria-current='page'
                    >
                      Search
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/wishlist'
                      className='block rounded px-4 py-2 text-gray-900 hover:bg-gray-100'
                    >
                      Wish List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/add-workplace'
                      className='block rounded px-4 py-2 text-gray-900 hover:bg-gray-100'
                    >
                      Add Workplace
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* mobile view burger menu closed */}
          <div className='flex md:order-2'>
            {user ? (
              <form method='post' action='/auth/logout'>
                <Button type='submit' className='mr-5'>
                  Log Out
                </Button>
              </form>
            ) : (
              <Button className='mr-5' onClick={handleLoginButtonClick}>
                Log In
              </Button>
            )}
            <button
              type='button'
              className='ml-2 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          {/* mobile view burger menu opened */}
          {isMenuOpen && (
            <div
              className='w-full items-center justify-between md:order-1 md:flex md:w-auto'
              id='navbar-sticky'
            >
              <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900'>
                <li>
                  <Link
                    href='/'
                    className='block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500'
                    aria-current='page'
                  >
                    Search
                  </Link>
                </li>
                <li>
                  <Link
                    href='/wishlist'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                  >
                    Wish List
                  </Link>
                </li>
                <li>
                  <Link
                    href='/add-workplace'
                    className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                  >
                    Add Workplace
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
