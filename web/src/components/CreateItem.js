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

    return <form onSubmit={handleSubmit}>
       <label>Shopping Item</label> 
       <input value={input} onChange={handleChange} />
       <button>Add</button>
    </form>
}

export default CreateItem;