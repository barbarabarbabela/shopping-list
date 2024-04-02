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
    <form className="edit" onSubmit={handleSubmit}>
        <label>Item: </label>
        <input  onChange={handleChange} value={name} />
        <button>Save</button>
    </form>
  )
}

export default EditItem;