import { useContext, useState } from "react";
import ItemContext from "../context/itemContext";

function CreateItem() {
    const [input, setInput] = useState("")
    const { createItem } = useContext(ItemContext)

    const handleChange = (e) => {
        setInput(e.target.value)  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createItem(input)
        setInput("")  
    }

    return <div className="mt-50 p-3 m-5">
        <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-l font-bold mb-2">Add your item:</label> 
            <input value={input} onChange={handleChange} className="border border-gray-300 rounded px-4 py-2 w-5/6" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
    </div>
}

export default CreateItem;