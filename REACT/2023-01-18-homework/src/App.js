import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const onClickHandler = (e) => {
  //   e.preventDefault();

  //   setAdvices(advices);
  // }
  const [advice, setAdvice] = useState({});
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(resp => resp.json())
      .then(resp => {
        const storedAdvices = (localStorage.getItem('advices'));
        const returnedObject = {
          text: resp.slip.advice,
          count: 1
        };

        if(storedAdvices) {
          const parsedAdvices = JSON.parse(storedAdvices);

          parsedAdvices.push(resp.slip.id);

          localStorage.setItem('advices', JSON.stringify(parsedAdvices));

          returnedObject.count = parsedAdvices.filter((value) => value === resp.slip.id).length;

        } else {
          localStorage.setItem('advices', JSON.stringify([resp.slip.id]));
        }
        setAdvice(returnedObject);
      });
  }, [refresh]);

  return (
    <>
      <div className="container p-5 mt-3">
        <div className="content">
          <h1>Dienos patarimas Jums</h1>
          <p>Paspaudus mygtuką ↓ gausite Jums skirtą patarimą</p>
          <button className="btn btn-primary" onClick={() => setRefresh(!refresh)}>Gauti naują patarimą</button>
          <p className='text-center mt-3'>"{advice?.text}" ({advice?.count} kartus)</p>
        </div>
      </div>
    </>
  );
}

export default App;