import React, {FC} from 'react';

interface ProductCardProps {
    title: string,
    options: { value: string, name: string, selected?: boolean }[]
    onChange: Function
}

const CustomSelect: FC<ProductCardProps> = ({title, options, onChange}) => {
    return (
        <div className="flex gap-2 justify-center items-center">
            <div>{title}:</div>
            <select className="bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md"
                    onChange={e => onChange(e.target.value)}>
                {options.map(option =>
                    <option value={option.value} key={option.name}
                            selected={option.selected ? option.selected : false}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default CustomSelect;