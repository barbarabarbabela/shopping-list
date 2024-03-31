import { useState } from "react";

function CreateItem({ onCreate }) {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(input)
        setInput("")  
    }

    return <form onSubmit={handleSubmit}>
       <label>Shopping Item</label> 
       <input value={input} onChange={handleChange} />
       <button>Add</button>
    </form>
}

export default CreateItem;