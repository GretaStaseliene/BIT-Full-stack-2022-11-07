import './App.css';
import { useId, useState } from 'react';

const Header = ({ nav }) => {
  const id = useId();

  return (
    <header>
      <h1>UAB "Šaunu"</h1>
      <nav>
        <ul>
          { nav.map((value, index) => <li key={id + index}>{value}</li>) }
        </ul>
      </nav>
    </header>
  );
}

const Container = (props) => {
  return (
    <div className='container'>{props.children}</div>
  );
}

// const FormEntry = () => {
//   const [value, setValue] = useState('Iveskite teksta i laukeli');

//   const keistiReiksme = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <>
//       <input type="text" onChange={keistiReiksme} />
//       {/* <input type="text" onChange={(e) => setValue(event.target.value)} /> */}
//       <div className='rezultatas'>{value}</div>
//     </>
//   );
// }

const FormEntry = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState();

  const handleForm = (e) => {
    e.preventDefault();

    setTasks([...tasks, { name: currentTask, done: false }]);
  }

  const handleDone = (e, index) => {
    tasks[index].done = true;

    setTasks([...tasks]);
  }

  const handleEdit = (e, index) => {
    let newTasks = [...tasks];
    let task = newTasks[index];

    let newTask = prompt(`Update ${task.name}?`);
    let taskObj = { todo: newTask, complete: false };
    // newTasks.splice(index, 1, taskObj);

    if(newTask === null || newTask === '') {
      return;
    } else {
      task.todo = newTask;
    }

    setTasks([...newTasks]);
  }

  const handleDelete = (e, index) => {
    tasks.splice(index, 1);
    console.log(tasks);
    setTasks([...tasks]);
  }

  return (
    <>
      <h2 className='mb-2'>Task Manager</h2>
      <form className='input-group' onSubmit={handleForm}>
        <input type='text' className='form-control' onChange={(e) => setCurrentTask(e.target.value)} />
        <button className='btn btn-primary'>Issaugoti</button>
      </form>
      {tasks.map((value, index) =>
        <li 
        key={value.name + index} 
        className={value.done ? 'done' : ''}>{value.name}
        <button className='btn btn-success me-2 ms-2 mt-2' onClick={ (e) => handleDone(e, index) }>Atlikta</button>
        <button className='btn btn-info text-light me-2 mt-2' onClick={ (e) => handleEdit(e, index) }>Redaguoti</button>
        <button className='btn btn-danger mt-2' onClick={ (e) => handleDelete(e, index) }>Ištrinti</button>
        </li>
      )}
    </>
  );
}

const App = () => {
  const navigacija = ['Titulinis', 'Apie mus', 'Kontaktai'];

  return (
    <Container>
      <Header nav={navigacija} />
      <main>
        <FormEntry />
      </main>
    </Container>

  );
}

export default App;
