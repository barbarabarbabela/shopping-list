import { useContext } from "react";

const ItemsContext = useContext();

function Provider({ children }){
    const [ items, setItems ] = useState([])
}