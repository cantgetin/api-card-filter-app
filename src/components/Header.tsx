import React from 'react';
import CustomSelect from "./CustomSelect";
import {useAppDispatch} from "../store/hooks";
import {searchByName} from "../store/productsSlice";

interface HeaderProps {
    displayAsList: boolean,
    setDisplayAsList: Function
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const dispatch = useAppDispatch();

    function inputTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchByName(e.target.value))
    }

    return (
        <div className="bg-white shadow-lg h-1/6 w-screen p-6 justify-center max-w-full">
            <div className="w-1/3 mx-auto flex flex-col gap-5">
                <input className="w-full bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md text-lg"
                       type="text" placeholder="Поиск товара" onChange={(e) => inputTextChanged(e)}/>
                <div className="flex w-full gap-5 justify-center align-middle">
                    <CustomSelect title="Сортировка"
                                  defaultValue="По умолчанию"
                                  options={[
                                      {value: "name", name: "По названию"},
                                      {value: "name", name: "По цене"},
                                      {value: "rating", name: "По рейтингу"}]}/>
                    <CustomSelect title="Группировка"
                                  defaultValue="Отсутствует"
                                  options={[
                                      {value: "name", name: "По категории"},
                                      {value: "name", name: "По производителю"}]}/>

                    <button onClick={() => props.setDisplayAsList(!props.displayAsList)}
                            className="bg-slate-100 px-2 rounded-lg shadow-inner shadow-md">Вид
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;