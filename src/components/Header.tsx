import React from 'react';
import CustomSelect from "./CustomSelect";
import {useAppDispatch} from "../store/hooks";
import {
    sortByHighestRating,
    sortByName,
    sortByPriceAscending,
    removeSortAndGroup,
    searchByName,
    groupByCategory,
    groupByBrand
} from "../store/productsSlice";

interface HeaderProps {
    displayAsList: boolean,
    setDisplayAsList: Function
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    const dispatch = useAppDispatch();

    function inputTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchByName(e.target.value))
    }

    const switchListDisplay = () => props.setDisplayAsList(!props.displayAsList)

    const sortProducts = (sort: string) => {
        switch (sort) {
            case "default":
                dispatch(removeSortAndGroup());
                break;
            case "name":
                dispatch(sortByName());
                break;
            case "price":
                dispatch(sortByPriceAscending());
                break;
            case "rating":
                dispatch(sortByHighestRating());
                break;
        }
    }

    const groupProducts = (group: string) => {
        switch (group) {
            case "default":
                dispatch(removeSortAndGroup());
                break;
            case "category":
                dispatch(groupByCategory());
                break;
            case "brand":
                dispatch(groupByBrand());
                break;
        }
    }

    return (
        <div className="bg-white shadow-lg h-1/6 w-screen p-6 justify-center max-w-full relative z-20">
            <div className="w-1/3 mx-auto flex flex-col gap-5">
                <input className="w-full bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md text-lg"
                       type="text" placeholder="Поиск товара" onChange={(e) => inputTextChanged(e)}/>
                <div className="flex w-full gap-5 justify-center align-middle">
                    <CustomSelect title="Сортировка"
                                  onChange={(sort: string) => sortProducts(sort)}
                                  options={[
                                      {value: "default", name: "По умолчанию", selected: true},
                                      {value: "name", name: "По названию"},
                                      {value: "price", name: "По возрастанию цены"},
                                      {value: "rating", name: "По рейтингу"}]}/>
                    <CustomSelect title="Группировка"
                                  onChange={(group: string) => groupProducts(group)}
                                  options={[
                                      {value: "default", name: "Без группировки", selected: true},
                                      {value: "category", name: "По категории"},
                                      {value: "brand", name: "По производителю"}]}/>

                    <button onClick={switchListDisplay}
                            className="bg-slate-100 px-2 rounded-lg shadow-inner shadow-md">Вид
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;