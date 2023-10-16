import cls from './selectMenu.module.css'

export const SelectMenu = ({onChange, selectElements, children, className}) => {

    return (
        <div className={cls.container}>
            {children ? <div className={cls.label}>{children}</div> : null}
            <select onChange={onChange}
                    className={cls.select}>
                {selectElements && selectElements.map((el, index) =>
                    <option className={cls.option}
                            key={index}
                            value={index}
                            onChange={onChange}>
                        {el.NAME}
                </option>)}
            </select>
        </div>
    );
};