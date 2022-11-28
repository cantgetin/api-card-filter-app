import React from 'react';

const Header = () => {
    return (
        <div className="bg-white h-1/6 w-screen p-6 flex flex-col gap-5 justify-center">
            <div className="mx-auto w-44">
                <input className="w-44" type="text" placeholder="Text filter"/>
            </div>
            <div className="flex w-1/2 mx-auto gap-5 justify-center align-middle">
                <select className="w-44">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <select className="w-44">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <select className="w-44">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    );
};

export default Header;