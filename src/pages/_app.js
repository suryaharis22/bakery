// import { useEffect } from 'react';
import Layouts from '@/components/layouts';
import '../../public/css/style.css'; // Import CSS

import Script from 'next/script'; // Digunakan untuk memasukkan file JS eksternal

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>

    </>
  );
}

export default MyApp;
