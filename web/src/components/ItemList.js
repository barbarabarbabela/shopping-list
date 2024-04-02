import { useContext } from "react";
import Item from "./Item";
import ItemContext from "../context/itemContext";

function ItemList() {

    const { items } = useContext(ItemContext);
    
    return <div className="itemList">
        <h2>Itens: </h2>
        <div className="renderList">
            {items.map((item) => <Item item={item} key={item._id}/>)}
        </div>
    </div>
}

export default ItemList;