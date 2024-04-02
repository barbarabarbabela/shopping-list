import { useContext, useState } from 'react';
import EditItem from './EditItem'
import ItemContext from '../context/itemContext';
const deleteIcon = require('../assets/delete.png');
const editIcon = require('../assets/edit.png');


function Item({ item }) {
    const [edit, setEdit] = useState(false)
    const { deleteItemById } = useContext(ItemContext)

    const handleDeleteClick = () => {
        deleteItemById(item._id)
    }

    const handleEditClick = () => {
        setEdit(!edit)
    }

    const handleSubmit = () => {
        setEdit(false)
    }

    let editContent = <p>{item.name}</p>

    if(edit) {
        editContent = <EditItem onSubmit={handleSubmit} item={item}/>
    }

    return <div className="item">
            <div className='title'>
                {editContent}
            </div>
            <div className='img'>
                <img src={editIcon} onClick={handleEditClick} alt="Edit icon"/>
                <img src={deleteIcon} onClick={handleDeleteClick} alt="Delete icon"/>
            </div>
        </div>
}

export default Item;