import HeaderBanner from './modules/HeaderBanner';
import Footer from './modules/Footer';
import Details  from './modules/Details';

export function Component() {
  return (
    <div className='flex w-full h-full flex-col justify-between'>
      <HeaderBanner />
      <Details />
      <Footer />
    </div>
  );
}