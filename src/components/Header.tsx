import React from 'react';
import CustomSelect from "./CustomSelect";
import {ReactComponent as ListView} from '../assets/listView.svg'
import {ReactComponent as GridView} from '../assets/gridView.svg'
import {useAppDispatch} from "../store/hooks";
import {
    sortByHighestRating,
    sortByPriceAscending,
    searchByName,
    groupByCategory,
    groupByBrand, defaultSort, defaultGroup
} from "../store/productsSlice";

interface HeaderProps {
    displayCardsInGrid: boolean,
    setDisplayCardsInGrid: Function
}

const Header: React.FC<HeaderProps> = ({displayCardsInGrid, setDisplayCardsInGrid}) => {

    const dispatch = useAppDispatch();

    function inputTextChanged(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchByName(e.target.value))
    }

    const switchListDisplay = () => setDisplayCardsInGrid(!displayCardsInGrid)

    return (
        <div className="bg-white shadow-lg h-1/6 w-screen p-6 justify-center max-w-full relative z-20">
            <div className="w-1/3 mx-auto flex flex-col gap-5">
                <input className="w-full bg-slate-100 rounded-lg px-2 py-1 shadow-md text-lg"
                       type="text" placeholder="Поиск товара" onChange={(e) => inputTextChanged(e)}/>
                <div className="flex w-full gap-5 justify-center align-middle select-none">
                    <CustomSelect title="Сортировка"
                                  options={[
                                      {callback: () => dispatch(defaultSort()), name: "По названию", selected: true},
                                      {callback: () => dispatch(sortByPriceAscending()), name: "По возрастанию цены"},
                                      {callback: () => dispatch(sortByHighestRating()), name: "Сначала с лучшей оценкой"}]}/>
                    <CustomSelect title="Группировка"
                                  options={[
                                      {callback: () => dispatch(defaultGroup()), name: "Без группировки", selected: true},
                                      {callback: () => dispatch(groupByCategory()), name: "По категории"},
                                      {callback: () => dispatch(groupByBrand()), name: "По производителю"}]}/>

                    <div onClick={switchListDisplay} className="flex justify-center items-center cursor-pointer">
                        <div className='mr-2'>Вид:</div>
                        <GridView fill={displayCardsInGrid ? "#6fbfff" : "#000000"}/>
                        <ListView fill={displayCardsInGrid ? "#000000" : "#6fbfff"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;