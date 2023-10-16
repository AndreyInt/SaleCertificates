import cls from './currentCertificatePage.module.css'
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import InputMask from 'react-input-mask';
import {Preloader} from "../../components/Preloader/Preloader";
const CurrentCertificatePage = () => {

    const {certificateId} = useParams();
    const [certificate, setCertificate] = useState(null);
    const [isByeCertificate, setIsByeCertificate] = useState(false);

    useEffect(() => {
        fetch('https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14')
            .then((res) => res.text())
            .then(data => {
                JSON.parse(data).data.map((el) => {
                    if (el.ID === certificateId)
                        setCertificate(el)
                })
            })
    }, [])

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'all',

    })

    const buyCertificate = (data) => {
        console.log(JSON.stringify(data))
        fetch('https://sycret.ru/service/api/api?MethodName=OSSale&ApiKey=011ba11bdcad4fa396660c2ec447ef14', {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.text())
            .then(data => JSON.parse(data).resultdescription === 'OK' && setIsByeCertificate(true))
        reset()
    }

    return (
        <div className={cls.page}>
            <Link className={cls.back} to={'/'}>Назад</Link>
            {isByeCertificate && <div className={cls.payment}>Оплата...</div>}
            {certificate
                ? <div hidden={isByeCertificate} className={cls.wrapper}>
                    <h2 className={cls.name}>{certificate.NAME}</h2>
                    <form className={cls.form} onSubmit={handleSubmit(buyCertificate)}>
                        <label className={cls.label}>
                            ФИО*:
                            <input  placeholder='Введите...' className={cls.inp} {...register('ClientName',
                                {
                                    required: true,
                                })}/>
                        </label>
                        <div>{errors?.ClientName && <div className={cls.err}>Имя должно быть заполнено</div>}</div>

                        <label className={cls.label}>
                            Телефон:*
                            <InputMask
                                alwaysShowMask={false}
                                mask='+7 (999) 999-99-99'
                                placeholder='+7 (999) 999-99-99'
                                className={cls.inp}
                                {...register('Phone',
                                    {
                                        required: true,
                                        validate: {
                                            checkLength: (value) => {
                                                 const number = `${value}`.replace(/\D/g, '');
                                                 return number.length===11
                                            }
                                        }
                                    })}>
                            </InputMask>
                        </label>
                        <div>{(errors?.Phone) && <div className={cls.err}>{'Номер должен быть заполнен'}</div>}</div>

                        <label className={cls.label}>
                            Сообщение:
                            <textarea placeholder='Введите...' className={cls.inp} {...register('MsgText')}/>
                        </label>

                        <label className={cls.label}>
                            Почта*:
                            <input placeholder='Введите...' className={cls.inp} {...register('Email',
                                {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Некорректная почта"
                                    }
                                })}/>
                        </label>
                        <div>{errors?.Email && <div className={cls.err}>{errors?.Email.message || 'Почта должна быть заполнена'}</div>}</div>
                        <div className={cls.btnWrapper}>
                            <input placeholder='Введите...' className={cls.btn} type='submit' value='Перейти к оплате'/>
                        </div>
                    </form>
                    </div>
                : <Preloader/>
            }
        </div>
    );
};

export default CurrentCertificatePage;