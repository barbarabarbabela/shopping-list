import CreateItem from "./components/CreateItem";
import { useEffect, useContext } from "react";
import ItemList from "./components/ItemList";
import ItemContext from "./context/itemContext";

function App() {
    const { fetchItems } = useContext(ItemContext)

    useEffect(() => {
        fetchItems()
    }, []);
    
    return (
        <div className="fixed w-full h-full bg-gray-100 ">
            <h2 className="text-3xl text-center font-medium text-black">Shopping List</h2>
            <CreateItem/>
            <ItemList/>
        </div>
    );
}

export default App;
