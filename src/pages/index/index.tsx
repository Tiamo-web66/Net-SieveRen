import HeaderBanner from './modules/HeaderBanner';
import Footer from './modules/Footer';
import Seach from './modules/Seach';

export function Component() {
  return (
    <div className='flex w-full h-full flex-col justify-between'>
      <HeaderBanner />
      <Seach />
      <Footer />
    </div>
  );
}
