import check from './check.jpg';

import { Component } from "react";

export class ToDoList extends Component {
    state={
        userInput:'',
        taskList:[]
    }

    onChangeEvent(e){
       this.setState({userInput:e});
       console.log(e)
       }

addItem (input){
    if (input ===''){
        alert("Please enter an item")
    }
    else {
    let listArray=this.state.taskList;
   listArray.push(input);
   this.setState({taskList:listArray,userInput:''})
    }
}

crosseWord(event) {
    const li=event.target;
    li.classList.toggle('crossed');
    console.log(li)
}

deleteItem(){
    let listArray=this.state.taskList;
    listArray=[];
    this.setState({taskList:listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                <input type="text"
                placeholder="What do you have to do today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className='container'>
<button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
</div>
<ul>
    {this.state.taskList.map((item,index) =>
<li onClick={this.crosseWord} key={index}>
     <img src={check} width="30px" alt=""/>
        {item}</li>
)}
</ul>
           

            <div className='container'>
                <button onClick={() => this.deleteItem()}  className="btn delete">DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}