import React from 'react';


class TodoInput extends React.Component {
    
    render() {
        const { item, handleClick, handleSubmit} = this.props; 
        return (
            <div className = "card card-body my-3">
                <form > 
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"/>
                            </div>
                        </div>
                        <input type="text" 
                            className="form-control text-capitilize" 
                            placeholder= "Add A To Do " 
                            value = {item} 
                            onChange= {handleClick}
                            />
                    </div>
                    <button type= "submit" 
                    className="btn btn-block btn-primary mt-3"
                    onClick= {handleSubmit}> Add Item </button>
                </form>
            </div>

        )
      
    }
}



export default TodoInput;