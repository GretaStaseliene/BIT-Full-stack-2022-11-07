import './App.css';
import { useId, useState, useEffect } from 'react';

const Header = ({ nav }) => {
  const id = useId();

  return (
    <header>
      <h1>ToDo List</h1>
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

const FormEntry = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    name: '', done: false
  });

  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    setTasks(JSON.parse(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    let data;

    if(edit) {
      tasks[editId].name = currentTask.name;
      data = [...tasks];
      setTasks(data);
      setEdit(false);
    } else {
      data = [...tasks, currentTask]
      setTasks(data);
    }

    localStorage.setItem('tasks', JSON.stringify(data));

    setCurrentTask({name: '', done: false});
  }

  const handleDone = (index) => {
    tasks[index].done = !tasks[index].done;
    const data = [...tasks];
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  const handleEdit = (index) => {
    setCurrentTask(tasks[index]);
    setEdit(true);
    setEditId(index);
  }

  const handleDelete = (index) => {
    tasks.splice(index, 1);
    const data = [...tasks];
    setTasks(data);
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  return (
    <>
      <h2 className='mb-2'>Task Manager</h2>
      <form className='input-group' onSubmit={handleForm}>
        <input type='text' className='form-control' onChange={ (e) => setCurrentTask({name: e.target.value, done: false}) } value={currentTask.name} />
        <button className='btn btn-primary'>Issaugoti</button>
      </form>
      {tasks.map((value, index) =>
        <li 
        key={value.name + index} 
        className={value.done ? 'done' : ''}>
          {value.name}
        <button className='btn btn-success me-2 ms-2 mt-2' onClick={ () => handleDone(index) }>Atlikta</button>
        <button className='btn btn-info text-light me-2 mt-2' onClick={ () => handleEdit(index) }>Redaguoti</button>
        <button className='btn btn-danger mt-2' onClick={ () => handleDelete(index) }>Ištrinti</button>
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
