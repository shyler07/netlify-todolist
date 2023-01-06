import React, { Component } from 'react'

export class Addtodo extends Component {
 state = {
    title: ""
 };
 
 onSubmit = e =>{
    e.preventDefault();
    this.props.Addtodo(this.state.title)
    this.setState({title:""})
 }

 onChange = e =>{

   //   its object - use only if only have one input only
   //  this.setState({title: e.target.value}); 

        //Becomes Array - suitable when have many inputs ---  target.name must same name="title"//
        this.setState({[e.target.name] : e.target.value} );
 };


    render() {


    return (
      <div>
            <form onSubmit = {this.onSubmit} style={{display: 'flex'}} >
                <input 
                  type = "text" 
                  name= "title" 
                  placeholder='add new todo task'
                  onChange={this.onChange}
                  style={{flex: '4', padding: '15px'}}
                  value = {this.state.title}
                  required
                />
                
                <input type='submit' value= 'Submit' className='btn'/>
            </form>

      </div>
    )
  }
}

export default Addtodo