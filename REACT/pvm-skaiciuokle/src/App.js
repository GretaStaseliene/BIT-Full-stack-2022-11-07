import './App.css';
import { useState } from 'react';

function App() {

    const [pvm, setPvm] = useState(21);
    const [sum, setSum] = useState(0);
    const [justPvm, setJustPvm] = useState(0);
    const [total, setTotal] = useState(0);

    const calculator = (props) => {

    if(props.name === 'total') {
        setTotal(+props.value);
        general(+props.value);
    }

    if(props.name === 'sum') {
        setSum(+props.value);
        setJustPvm((+props.value / 100) * pvm);
        setTotal(+props.value + ((+props.value / 100) * pvm));
    }
}

    const choosePvm = (percent) => {
        setPvm(percent);
        setJustPvm( (+sum/100) * pvm);
        setTotal( sum + ((sum / 100) * pvm) );
    }

    const general = (value) => {
        let koef = 0;

        if(pvm === 21) {
            koef = 1.21;
        } else if(pvm === 9) {
            koef = 1.09;
        } else {
            koef = 1.05;
        }

        setJustPvm(value - (value / koef));
        setTotal(value / koef);
    }

    return (
        <div className="container">
            <div className="pvm-counter">
                <div className="pvm-percentage">
                    <label>PVM tarifas %</label>
                    <select onChange={ (e) => {choosePvm(e.target.value)} }>
                        <option value={21}>21%</option>
                        <option value={9}>9%</option>
                        <option value={5}>5%</option>
                    </select>
                </div>
                <div className="sum">
                    <label>Suma (be PVM)</label>
                    <input type="text" name="sum" onChange={ (e) => calculator(e.target) } value={ +sum.toFixed(2) }></input>
                </div>
                <div className="pvm-sum">
                    <label>PVM Suma</label>
                    <input type="text" value={ +justPvm.toFixed(2) }></input>
                </div>
                <div className="total-sum">
                    <label>Bendra suma (su PVM)</label>
                    <input name="total" value={ +total.toFixed(2) } onChange={ (e) => calculator(e.target) }></input>
                </div>
            </div>
        </div>
    );
}

export default App;
