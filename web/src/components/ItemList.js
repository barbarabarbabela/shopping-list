import { useContext } from "react";
import Item from "./Item";
import ItemContext from "../context/itemContext";

function ItemList() {

    const { items } = useContext(ItemContext);
    
    return <div className="itemList mt-50 p-3 m-5">
        <h2>Items: </h2>
        <div className="flex flex-wrap">
            {items.map((item) => <Item item={item} key={item._id}/>)}
        </div>
    </div>
}

export default ItemList;