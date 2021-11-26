import Head from 'next/head';
import { NextPage } from 'next';

import ControlMain from 'components/Draw/Sections/ControlCenter/ControlMain';
import ControlCenter from 'components/Draw/Sections/ControlCenter/ControlCenter';
import CanvasMain from 'components/Draw/Sections/Canvas/CanvasMain';
import DropDownControl from 'components/Draw/Sections/DropDownControl/DropDownControl';

const Draw: NextPage = (props) => {
  return (
    <div id='container' className='w-full bg-gray-200 '>
      <Head>
        <title>Colorful | Draw</title>
        <meta
          name='description'
          content='Go ahead and make your next masterpiece!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center w-full h-full mx-auto lg:justify-between 2xl:w-9/12 xl:w-11/12 lg:h-screen '>
        <div className='flex justify-center lg:flex-row'>
          <div className='hidden mb-6 lg:mx-6 lg:w-2/12 '>
            <ControlMain />
          </div>
          <div className=''>
            <DropDownControl />
          </div>
          <div className='relative mt-12 lg:w-full'>
            <CanvasMain />
          </div>
          <div className='hidden w-full mx-6 lg:w-2/12 '>
            <ControlCenter />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
