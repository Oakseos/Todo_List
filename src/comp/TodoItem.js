import React from 'react';

class TodoItem extends React.Component { 
    render() { 
        const {item, handleDelete, handleEdit } = this.props
        return (
            <div> 
                <li className="list-group-item d-flex justify-content-between text-capitalize my-2 "  >
                 <h6>{item}</h6>
                    <div className="list-icon">
                        <span className= "mx-2 text-success"  >
                            <i className="fa fa-edit"
                               onClick= {handleEdit} />
                        </span>
                        <span className="text-danger mx-2"   > 
                            <i className="fa fa-trash"
                            onClick = {handleDelete} />
                        </span>
                    </div>
                </li>
            </div>
            
        )
    }
}

export default TodoItem; 