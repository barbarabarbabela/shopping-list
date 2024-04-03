import { useState, useContext } from "react";
import ItemContext from "../context/itemContext";

function EditItem({ onSubmit, item}) {
    const [name, setName] = useState(item.name)
    const { editItemById } = useContext(ItemContext)
  
    const handleSubmit = () => {
        onSubmit()
        editItemById(item._id, { name: name })
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return     (    
    <form onSubmit={handleSubmit}>
        <input  onChange={handleChange} value={name} className="border border-gray-300 rounded px-2 py-1"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">Save</button>
    </form>
  )
}

export default EditItem;