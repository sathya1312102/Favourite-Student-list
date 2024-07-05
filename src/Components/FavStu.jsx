import React, { useContext } from 'react';
import { NameContext } from './NameContextProvider';

const FavStu = () => {
    const { favStu, setFavStu } = useContext(NameContext);

    const removeBtn = (removeId) => {
        const tempArr = favStu.filter((item) => item.id !== removeId);
        setFavStu(tempArr);
    };

    return (
        <div className="flex flex-col items-center p-4">
            {favStu.length === 0 ? (
                <p>You don't have any favourite students</p>
            ) : (
                <p>Your favourite students</p>
            )}

            {favStu.map((item, index) => (
                <div key={item.id} className="flex flex-row gap-9 items-center justify-between w-full mb-4 p-4 border-b border-gray-200">
                    <span>{index + 1}. {item.Stuname}</span>
                    <button 
                        className="text-red-600 hover:text-red-800 font-bold"
                        onClick={() => removeBtn(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FavStu;
