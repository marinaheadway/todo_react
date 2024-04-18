import image from './todolist.jpg';
import './App.css';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
          <div className='container'>
      <img src={image} width="200px" alt="plan"/>
      </div>
      <div className='container'>
            <h1>To Do List</h1>
      </div>
      <ToDoList/>
      <div className='container'>
      <img src={'https://img.freepik.com/free-vector/personal-goals-checklist-concept-illustration_114360-9881.jpg?w=740&t=st=1713277635~exp=1713278235~hmac=5f5fd2956659fb206890faed31da0d266197e0f8ec37cd0fda83d80ab934d50b'} width="250px" alt="checklist"/>
    </div>
        </div>
  );
}

export default App;
