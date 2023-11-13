import DisplayCities from './components/DisplayCities';
import Link from 'next/link';
import Navbar from '@/app/components/NavBar';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from './lib/supabase';
import { PageByIDParams } from './utils/types';

export default async function ServerComponent({ params }: PageByIDParams) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to desk-mooovements!</h1>
        <DisplayCities />
        <Link href={'/add-workplace'}>
          <div className='m-3'>
            <button className='inline-flex w-32 items-center rounded border-b-2 border-blue-500 bg-white px-6 py-2 font-bold tracking-wide text-gray-800 shadow-md hover:border-blue-600 hover:bg-blue-500 hover:text-white'>
              <span className='mx-auto'>Add Workplace</span>
            </button>
          </div>
        </Link>
        <Link href={'/login'}>
          <div className='m-3'>
            <button className='inline-flex w-32 items-center rounded border-b-2 border-blue-500 bg-white px-6 py-2 font-bold tracking-wide text-gray-800 shadow-md hover:border-blue-600 hover:bg-blue-500 hover:text-white'>
              <span className='mx-auto'>Login</span>
            </button>
          </div>
        </Link>
      </main>
    </>
  );
}
