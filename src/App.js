import React,{ Component } from 'react';
//import logo from './logo.svg';
// import other file
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/header';
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import {v4 as uuidv4} from 'uuid';


// react js components
// <Todos/> get import in components  folder todos filename
class App extends Component{

  // object literals
  state = {

  todos: [
    {
        id: uuidv4(),
        title: 'tyler pogi',
        completed: false
    },

    {
      id: uuidv4(),
      title: 'tyler handsome',
      completed: false
    },

      {
        id: uuidv4(),
      title: 'tyler gwapo',
      completed: false
     }
    ]
  };

  //marks is complete
  markComplete = id =>{
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed; // or - false
      }
        return todo;
      })
    });
  };
  
  //delete task
  //parameter id
  delTodo = (id) =>{
    this.setState({todos:[...this.state.todos.filter(todo =>todo.id !== id)]
    });
  };

  //add todo task
  Addtodo = (title) =>{
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo] });
  };

  

  render(){

    // todos object literals
    console.log(this.state.todos);
  /* -- ang state gipasa lang sa Todos */

    return (
      //router 
      // exact path - exact folder or file want to get/render
      <Router>
        <div className='App'>
          <Header/>
          {/* <Route exact path='/Home' render = {(props) =>( */}
            <Route exact path='/' render = {(props) =>(
                <React.Fragment>
                  <div className='container'>
                    <Addtodo Addtodo= {this.Addtodo}/>
                    <Todos 
                    todos = {this.state.todos} 
                    markComplete = {this.markComplete}
                    delTodo = {this.delTodo}
                    />
                  </div>
                </React.Fragment>
              )}
             /> 
                                        {/* function name */}
            <Route path='/about' component={About}/>
            
          </div>
          
        </Router>
    );
  }
}
export default App;

