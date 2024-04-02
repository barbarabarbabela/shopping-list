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
        <div className="app">
            <h2>Shopping List</h2>
            <CreateItem/>
            <ItemList/>
        </div>
    );
}

export default App;
