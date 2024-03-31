import CreateItem from "./components/CreateItem";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [items]);

    const createItem = async (itemName) => {
        try {
            const response = await fetch('http://localhost:3001/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: itemName })
            });
            if (response.ok) {
                const newItem = await response.json();
                console.log("Item created:", newItem);
                setItems([...items, newItem])
                console.log(items)
            }
        } catch (err) {
            console.error(err);
        }
    }

    const handleDelete = () => {
        console.log("Clicou")
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <CreateItem onCreate={createItem}/>
            <ItemList onRender={items} onDelete={handleDelete}/>
        </div>
    );
}

export default App;
