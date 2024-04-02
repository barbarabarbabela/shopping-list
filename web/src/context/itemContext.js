import { createContext, useState } from "react";

const ItemContext = createContext();

function Provider({ children }) {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        await fetch("http://localhost:3001")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }

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
                setItems([...items, newItem])
            }
        } catch (err) {
            console.error(err);
        }
    }

    const deleteItemById = (id) => {
        fetch(`http://localhost:3001/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Item not deleted");
            }
            const updatedItems = items.filter((item) => {
                return item._id !== id;
            });
            setItems(updatedItems);
        })
        .catch(error => {
            console.error("Error deleting item:", error);
        });
    }

    const editItemById = async (id, newItem) => {
        try {
            const response = await fetch(`http://localhost:3001/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            });

            if (!response.ok) {
                throw new Error("Failed to edit item");
            }
            const updatedItem = await response.json();
            setItems(prevItems => prevItems.map(item => (item._id === id ? updatedItem : item)));
        } catch (error) {
            console.error("Error editing item:", error);
        }
    }

    const valueToShare = {
        items, 
        fetchItems,
        deleteItemById,
        createItem,
        editItemById
    }

    return (        
        <ItemContext.Provider value={valueToShare}>
            {children}
        </ItemContext.Provider>
        )
    

}

export { Provider };
export default ItemContext;