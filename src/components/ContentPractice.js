import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function ContentPractice(){
    const [items,setItems] = useState([
        {   
            id:1,
            checked:false,
            item: "item 1"
        },
        {   
            id:2,
            checked:false,
            item: "item 2"
        },
        {   
            id:3,
            checked:false,
            item: "item 3"
        }
    ])
    const handleCheck= (id) => {
        const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} :item)
        setItems(listItems)
        localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    }
    
    return(
    <ul>
        {
            items.map((item)=>(
                <li className="item" key={item.id}>
                    <input 
                        type="checkbox" 
                        onChange={()=>(handleCheck(item.id))}
                        checked={item.checked} 
                        />
                    <label
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={()=> handleCheck(item.id)}
                    > {item.item}</label>
                    <FaTrashAlt 
                        role="button" 
                        tabIndex="0"
                    />
                </li>
            
            
            ))
        }
    </ul>)
}

export default ContentPractice;