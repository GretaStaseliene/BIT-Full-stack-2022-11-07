import { useState } from 'react';

const PvmCounter = () => {
    const [pvm, setPvm] = useState(21);
    const [sum, setSum] = useState(0);
    const [justPvm, setJustPvm] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <div className="container">
            <div className="pvm-counter">
                <div className="pvm-percentage">
                    <label>PVM tarifas %</label>
                    <select onChange={ (e) => setPvm(e.target.value) }>
                        <option value="21">21%</option>
                        <option value="9">9%</option>
                        <option value="5">5%</option>
                    </select>
                </div>
                <div className="sum">
                    <label>Suma (be PVM)</label>
                    <input type="text" onChange={ (e) => setSum(e.target.value) }></input>
                </div>
                <div className="pvm-sum">
                    <label>PVM Suma</label>
                    <input type="text"></input>
                </div>
                <div className="total-sum">
                    <label>Bendra suma (su PVM)</label>
                    <input type="text"></input>
                </div>
            </div>
        </div>
    );
}

export default PvmCounter;