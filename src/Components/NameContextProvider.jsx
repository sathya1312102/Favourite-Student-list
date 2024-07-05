import { createContext, useState } from "react";

const NameContext = createContext();

function NameContextProvider({ children }) {
    const [listStu, setListStu] = useState([
        { id: 1, Stuname: "Sathya" },
        { id: 2, Stuname: "Sam" },
        { id: 3, Stuname: "Ruban" },
        { id: 4, Stuname: "Susi" },
        { id: 5, Stuname: "Moni" }
    ]);

    const [favStu, setFavStu] = useState([]);

    const addfav = (clickid) => {
        const favarr = listStu.find((item) => item.id === clickid);
        if (favarr) {
            setFavStu([...favStu, favarr]);
        }
    };

    return (
        <NameContext.Provider value={{ listStu, setListStu, addfav, favStu, setFavStu }}>
            {children}
        </NameContext.Provider>
    );
}

export default NameContextProvider;
export { NameContext };
