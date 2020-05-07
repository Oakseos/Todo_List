import React from 'react';
import TodoItems from './TodoItems'



class TodoList extends React.Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className= "list-group my-5"> 
                <h3 className="text-capitalize text-center">To Do List</h3>
                {
                    items.map(item => { 
                        return(

                            <TodoItems key={item.id} title={item.title} 
                            handleDelete= {()=> handleDelete(item.id)}
                            handleEdit= {() => handleEdit(item.id)} />  
                        )
                    })
                }
                
                <button type= " button" 
                className="btn btn-danger btn-block text-capitilize mt-5"
                onClick= {clearList}>clear list   </button>
            </ul>

        )
    }
}



export default TodoList;