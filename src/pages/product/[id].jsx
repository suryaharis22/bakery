// #region constants

import { useRouter } from "next/router";

// #endregion


// #region functions

// #endregion

/**
 * 
 */
const DetailProduct = (DetailProduct) => {
    const router = useRouter();

    return (
        <main className="site-main page-spacing">
            <h1>Detail Product: {router.query.id} </h1>
        </main>
    );
}

export default DetailProduct;