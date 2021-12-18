import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, deleteTask} from './actions/todoAction'

const App = () => {
  const tasks = useSelector(state => state.todoReducer)
  const dispatch = useDispatch()

  const onSubmitTask = e => {
    e.preventDefault();
    const saveTask = e.target.task.value;
    dispatch(addTask(saveTask));
  } 


  const removeTask = id => {
    dispatch(deleteTask(id))
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => onSubmitTask(e)}>
          <input type='text' name='task'>
          </input>
          <button>Guardar</button>
        </form>

        <div>
          <ul>
          {tasks.map( item => {
            return <li key={item.id}>{item.task} <button onClick={() => removeTask(item.id)}>Borrar</button></li>
          } )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
