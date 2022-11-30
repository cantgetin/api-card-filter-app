import React from 'react';
import CustomSelect from "./CustomSelect";

const Header = () => {
    return (
        <div className="bg-white shadow-lg h-1/6 w-screen p-6 justify-center max-w-full">
            <div className="w-1/3 mx-auto flex flex-col gap-5">
                <input className="w-full bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md text-lg"
                       type="text" placeholder="Поиск товара"/>
                <div className="flex w-full gap-5 justify-center align-middle">
                    <CustomSelect title="Сортировка"
                                  defaultValue="По умолчанию"
                                  options={[{value: "name", name: "По названию"}, {value: "name", name: "По цене"}, {value: "rating", name: "По рейтингу"}]}/>
                    <CustomSelect title="Группировка"
                                  defaultValue="Отсутствует"
                                  options={[{value: "name", name: "По категории"}, {value: "name", name: "По производителю"}]}/>
                </div>
            </div>
        </div>
    );
};

export default Header;