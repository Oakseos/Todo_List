import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component { 
    render() { 
        const {items, clearList, handleDelete, handleEdit} = this.props
        return (
            <div> 
                <ul className="list-group my-5"  >
                    <h4 className="text capitilize text-center" >Todo List</h4>
                   {
                       items.map(item => {
                        return( 
                            <TodoItem key= {item.id} 
                            item={item.title} 
                            handleDelete = { ()=> handleDelete(item.id)}
                            handleEdit = { ()=> handleEdit(item.id)} />
                           );

                       })
                   } 
                    
                    <button type= "button"
                            className ="btn btn-danger btn-block text-capitalize mt-5"
                            onClick = {clearList}
                    > Clear list
                    </button>
                </ul>
               
            </div>
        );
    }
}

export default TodoList; 