import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
 
getStyle = () => {

    return {
        background: '#f4fefe',
        padding: '10px',
        borderBottom: '2px #ccc dotted',
        //short hand if statement, if true line-through if false none
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
};

 
    render() {

        //deconstruct
        const {id, title } =this.props.todo;


   // console.log(this.props.todo); // as an object
    return (
        // inline style
      //<div style={{background : "#ff4f44"}}>Hello
      <div style={this.getStyle()}>Your Notes is

        {/* <p>{this.props.todo.id}</p>
        <p>{this.props.todo.title}</p> */}

    
        <p> <input type= "checkbox" onChange={this.props.markComplete.bind(this, id)}/> {title}
            {/* delete button  */}
            <button style={btnStyle} onClick = {this.props.delTodo.bind(this,id)}>
            X
            </button>
        </p>
        
        
      </div>
      
    )
  }
}

// proptypes
 // proper to declare proptypes small propTypes
    // todos in class app: PropTypes
Todoitem.propTypes = {
   
    // pinapasa niya ay object
    todo: PropTypes.object.isRequired
};


const btnStyle = {
    background: 'crimson',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem;