import Item from "./Item";
import './ItemList.css'

function ItemList({ onRender, onDelete }) {
    
    return <div className="itemList">
        <h2>Itens: </h2>
        <div className="renderList">
            {onRender.map((item) => <Item onDelete={onDelete} name={item.name} key={item._id}/>)}
        </div>
    </div>
}

export default ItemList;