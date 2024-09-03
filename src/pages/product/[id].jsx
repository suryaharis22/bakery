// #region constants

import DetailProductCtrl from "@/controller/DetailProductCtrl";
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
            <DetailProductCtrl />
        </main>
    );
}

export default DetailProduct;