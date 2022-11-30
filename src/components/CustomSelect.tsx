import React, {FC} from 'react';

type ProductCardProps = {
    title: string,
    defaultValue: string,
    options: { value: string, name: string }[]
}

const CustomSelect: FC<ProductCardProps> = ({title, defaultValue, options}) => {
    return (
        <div className="flex gap-2 justify-center items-center">
            <div>{title}:</div>
            <select className="bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md">
                <option value="">{defaultValue}</option>
                {options.map(option =>
                    <option value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default CustomSelect;