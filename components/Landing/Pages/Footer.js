const Footer = () => {
  return (
    <div id='container' className='h-full pb-8 bg-gray-900 '>
      <footer className='bg-gray-900' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='text-white xl:col-span-1'>
              <a
                href='/'
                className='text-lg font-bold tracking-tighter text-blue-400 transition hover:text-blue-700 duration-500 ease-in-out transform tracking-relaxed lg:pr-8'
              >
                {' '}
                Drawing App
              </a>
              <p className='w-1/2 mt-2 text-sm text-gray-300'>
                {' '}
                An easy way to create, save, and load colorful realtime drawings{' '}
              </p>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-bold tracking-wider text-blue-500 uppercase'>
                    {' '}
                    Navigation{' '}
                  </h3>
                  <ul role='list' className='mt-4 space-y-2'>
                    <li>
                      <a
                        href='#Main'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        Main{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='#Instructions'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        Instructions
                      </a>
                    </li>
                    <li>
                      <a
                        href='#About'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href='/draw'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        Canvas{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='grid grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm font-bold tracking-wider text-blue-500 uppercase'>
                    {' '}
                    IAN{' '}
                  </h3>
                  <ul role='list' className='mt-4 space-y-2'>
                    <li>
                      <a
                        href='https://github.com/icld'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        GitHub{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/icld/'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        LinkedIn{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.icld.io/'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        Portfolio{' '}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='text-sm font-bold tracking-wider text-blue-500 uppercase'>
                    ETHAN
                  </h3>
                  <ul role='list' className='mt-4 space-y-2'>
                    <li>
                      <a
                        href='https://github.com/jumpybuns'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        GitHub{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/ethanpiercepresents/'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        LinkedIn{' '}
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://ethanpierce.netlify.app/'
                        rel='noreferrer'
                        target='_blank'
                        className='text-base font-normal text-gray-300 hover:text-blue-400'
                      >
                        {' '}
                        Portfolio{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-4 mx-auto bg-gray-900 max-w-7xl sm:px-6 lg:px-16'>
          <div className='flex flex-wrap items-baseline justify-between'>
            <span className='mt-2 text-sm font-light text-gray-300'>
              {' '}
              Copyright © 2021 @$5sweater
            </span>
            <div className='flex justify-between text-gray-300'>
              <span>
                Thank you
                <a
                  href='https://mintbean.io/'
                  rel='noreferrer'
                  target='_blank'
                  className='pl-2 text-green-400 transition-all ease-in '
                >
                  @Mintbean!
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
