import React from 'react';
import TodoInput from './comp/TodoInput';
import TodoList from './comp/TodoList';
import {v1 as uuid} from 'uuid';



class App extends React.Component {
    state = { 
        items: [],
        item: " ",
        id: uuid(),
        editItem:false
    }


    handleChange = e => { 
       this.setState({ 
           item:e.target.value
       });

    };

    handleSubmit = e => { 
        e.preventDefault();

        const newItem = { 
            id: this.state.id,
            title: this.state.item
        }  
        
      
        const updatedItems = [...this.state.items,newItem];

        this.setState ({ 
            id: uuid(),
            item: "",
            items: updatedItems,
            editItem: false
        });

        console.log(updatedItems)
               
    };

    clearList = () =>{ 
        this.setState({ 
            items:[]
        })
    }

    handleDelete = (id) => { 
        const filteredItems = this.state.items.filter(item => item.id !== id )
        this.setState ({ 
            items: filteredItems
        })
    }

    handleEdit = (id) => { 
        const filteredItems = this.state.items.filter(item => item.id !== id )

        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState ({ 

            items: filteredItems,
            item: selectedItem.title,
            editItem: true
        })
    }


    render() {
        return (
           <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto md-8 mt-4">
                        <h2 className="text-center text-capitalize">Todo List</h2>
                        <TodoInput 
                        item = { this.state.item}
                        handleChange= {this.handleChange}
                        handleSubmit= {this.handleSubmit} />

                        <TodoList items = { this.state.items}
                                clearList = {this.clearList}
                                handleDelete= {this.handleDelete}
                                handleEdit= {this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default App;