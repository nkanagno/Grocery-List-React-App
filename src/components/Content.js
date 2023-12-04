
import ItemList from './ItemList'

const Content = ({items,handleCheck,handleDelete}) => {
    return(
        <>
            
            {items.length ? (
                
                <ul >
                    <ItemList 
                        items ={items}
                        handleCheck ={handleCheck}
                        handleDelete = {handleDelete}
                    />
                </ul>
                
                ) : (
                    <p style={{marginTop:'2rem',color:'red'}}> Your list is empty</p>
                )
            }

    </>
    )
}

export default Content