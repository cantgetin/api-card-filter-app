import React, {FC} from 'react';
import {CustomSelectOption} from "../types/types";

interface ProductCardProps {
    title: string,
    options: CustomSelectOption[]
}

const CustomSelect: FC<ProductCardProps> = ({title, options}) => {

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        options[Number(e.target.value)].callback()
    }

    return (
        <div className="flex gap-2 justify-center items-center">
            <div>{title}:</div>
            <select className="bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md"
                    onChange={(e) => handleOptionChange(e)}
                    defaultValue={options.findIndex(o => o.selected === true)}>
                {options.map((option, index) =>
                    <option value={index} key={option.name}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default CustomSelect;