import './Item.css'

const deleteIcon = require('../assets/delete.png');
const editIcon = require('../assets/edit.png');


function Item({ name, onDelete }) {

    const handleDeleteClick = (e) => {
        e.preventDefault();
        onDelete()
    }

    return <div className="item">
            <div className='title'>
                <p>{name}</p>
            </div>
            <div className='img'>
                <img src={editIcon} />
                <img src={deleteIcon} onClick={handleDeleteClick}/>
            </div>
        </div>
}

export default Item;