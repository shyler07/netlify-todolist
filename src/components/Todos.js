import React,{ Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

// react js components
class Todos extends Component{
  render(){
    // props means properties
   
    //console.log(this.props.todos); // as an array
    //return this.props.todos.map(todo => <h1>Hello1</h1>);
    //return this.props.todos.map(todo => <h1> {1 + 2} </h1>);
    //return this.props.todos.map(todo => <h1> {todo.title} </h1>);

    //return niya ang this.props.todos.map(object literals) todo function Todoitem ang {todo} mabalhin sa Todoitem.js todo
    // need key = {index} need niya og unique key
    // ung .map ina-output niya array ulit tawag ay list
    //return this.props.todos.map(todo => <Todoitem key={todo.id} todo={todo} />); 

    return this.props.todos.map(todo => <Todoitem
         key={todo.id} 
         todo={todo} 
         markComplete={this.props.markComplete}
         delTodo={this.props.delTodo}
         />); 
    // return (
    //   <div>
    //     <h2>Todo Apps</h2>
    //   </div>
    // )
  }
  
}
    // proper to declare proptypes small propTypes
    // todos in class app: PropTypes
    Todos.propTypes = {
       
        //todos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
         //pinapasa niya ay array, singulated array
        todos:PropTypes.array.isRequired
    };


export default Todos;
