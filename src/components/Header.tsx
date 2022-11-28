import React from 'react';

const Header = () => {
    return (
        <div className="bg-white shadow-lg h-1/6 w-screen p-6 justify-center max-w-full">
            <div className="w-1/3 mx-auto flex flex-col gap-5">
                <input className="w-full bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md"
                       type="text" placeholder="Text filter"/>
                <div className="flex w-full gap-5 justify-center align-middle">
                    <select className="w-1/3 bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select className="w-1/3 bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <select className="w-1/3 bg-slate-100 rounded-lg px-2 py-1 shadow-inner shadow-md">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Header;