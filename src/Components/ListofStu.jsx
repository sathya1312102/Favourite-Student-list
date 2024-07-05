import React, { useState, useContext } from 'react';
import { NameContext } from './NameContextProvider';

const ListStu = () => {
    const { listStu, addfav, favStu } = useContext(NameContext);
    const [clickedIds, setClickedIds] = useState([]);

    const handleAddFavClick = (id) => {
        if (!clickedIds.includes(id)) {
            setClickedIds([...clickedIds, id]);
            addfav(id);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            {listStu.map((item) => (
                <div 
                    key={item.id} 
                    className="flex flex-row gap-5 items-center justify-between w-full mb-4 p-4 border-b border-gray-200"
                >
                    <h1 className="text-lg font-semibold">
                        {item.id}. {item.Stuname}
                    </h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
                        onClick={() => handleAddFavClick(item.id)}
                        disabled={clickedIds.includes(item.id) || favStu.some((favItem) => favItem.id === item.id)}
                    >
                        {favStu.some((favItem) => favItem.id === item.id) ? "Added to Favorite" : "Add to Favorite"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListStu;
