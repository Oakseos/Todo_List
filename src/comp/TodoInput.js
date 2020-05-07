import React from 'react';

class TodoInput extends React.Component { 
    render() { 
        const {item,handleChange, handleSubmit } = this.props;
        return ( 
        <div className = "card card-body my-3"  > 
            <form>
            <div className="input-group">
                        <input type="text"
                               className="form-control Text-capitalize"
                               placeholder= " Add a Todo"
                               value={item}
                               onChange={handleChange}  />
               
                <div className="input-group-append">
                  <div className="input-group-text bg-primary text-white">
                      <i className="fa fa-book"/>
                  </div>
                </div>
                </div>
            </form>

                <button type= "submit" 
                        className="btn btn-primary btn-block my-3"
                        onClick = {handleSubmit}>
                    Add Item
                </button>
                        
        </div>

        )
    }
}

export default TodoInput; 