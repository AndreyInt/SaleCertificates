import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Preloader} from "../../components/Preloader/Preloader";
import {CertificatesPageLazy} from "../../pages/CertificatesPage/CertificatesPage.lazy";
import {CurrentCertificatePageLazy} from "../../pages/certificat/CurrentCertificatePage.lazy";

export const AppRoutes = () => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path={'/:certificateId'} element={<CurrentCertificatePageLazy/>}/>
                <Route path={'/'} element={<CertificatesPageLazy/>}/>
            </Routes>
        </Suspense>
    );
};