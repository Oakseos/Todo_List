import React from 'react';
import './TodoItem.css'



class TodoItems extends React.Component {
    render() {
        const {title, handleDelete,  handleEdit} = this.props;
        return (
            <li className= "list-group-item text-capitalize d-flex justify-content-between my-2"> 
                <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success">
                            <i className="fa fa-edit"
                             onClick= {handleEdit} 
                            />
                        </span>
                        <span className="mx-2 text-danger">
                            <i className="fa fa-trash"
                            onClick={handleDelete}/>
                        </span>
                    </div>
            </li>
        )
    }
}



export default TodoItems;