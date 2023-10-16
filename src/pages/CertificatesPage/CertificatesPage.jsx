import {Preloader} from "../../components/Preloader/Preloader";
import {SelectMenu} from "../../components/SelectMenu/SelectMenu";
import { useNavigate } from "react-router-dom";
import cls from './certificatesPage.module.css'
import {useEffect, useState} from "react";
const CertificatesPage = () => {

    const [certificates, setCertificates] = useState(null);
    const [certificate, setCertificate] = useState(null);
    const navigate = useNavigate();
    const buyCertificate = () => navigate(`${certificate.ID}`);

    useEffect(() => {
        fetch('https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14')
            .then((res) => res.text())
            .then(data => {
                setCertificates(JSON.parse(data))
                setCertificate(JSON.parse(data).data[0])
            })
    }, [])


    return (
        <div className={cls.wrapper}>
            {certificates?.resultdescription === 'OK'
                ? <div className={cls.certificatesWrapper}>
                    <SelectMenu selectElements={certificates.data}
                                onChange={(e) => setCertificate(certificates.data[e.target.value])}>
                        Выберите сертификат
                    </SelectMenu>
                        {certificate?.DISCOUNT
                            && <div className={cls.discount}>
                                Только сегодня у нас скидка {certificate.DISCOUNT}%! Успей купить по новой цене {certificate.SUMMA} рублей.
                            </div>}
                    <button className={cls.btn} onClick={buyCertificate}>Купить</button>
                </div>
                : <Preloader></Preloader>}
        </div>
    );
};

export default CertificatesPage;