import { useState } from 'react';

const PasswordGenerator = () => {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }    

    const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const specialSymbols = '!@#$%^&*+';

    const [password, setPassword] = useState();
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumber] = useState();
    const [symbol, setSymbol] = useState();
    const [length, setLength] = useState(8);


    const generatePassword = () => {
        let choises = '';
        if(uppercases) {
            choises += uppercases;
        }
        if(lowercases) {
            choises += lowercases;
        }
        if(numbers) {
            choises += numbers;
        }
        if(specialSymbols) {
            choises += specialSymbols;
        }

        let yourPassword = '';
        for(let i = 0; i < length; i++) {
            yourPassword += choises[rand(0, choises.length)];
        }

        setPassword(yourPassword);
    }

    return (
        <div className="container">
            <h1>Slaptažodžių generatorius</h1>
            <input type="text" className="form-control mt-4" placeholder="Jūsų slaptažodis..." value={password} />
            <div>
                <fieldset className="border p-2 mt-3 rounded">
                    <legend className="d-flex justify-content-center">Nustatymai</legend>
                    <div className="input-group">
                        <label className="mb-2 me-2">Pasirinkite slaptažodžio ilgį</label>
                        <input type="number" className="form-control rounded" min="8" max="50" placeholder='8' onChange={ (e) => setLength(e.target.value) } />
                    </div>
                    <div className="float-start">
                        <div className="pt-2">
                            <input type="checkbox" checked onChange={ () => setUppercase(uppercase) } /> 
                            <label className="ms-3">Didžiosios raidės (A - Z)</label>
                        </div>
                        <div className="pt-2">
                            <input type="checkbox" checked onChange={ () => setLowercase(lowercase) } />
                            <label className="ms-3">Mažosios raidės (a - z)</label>
                        </div>
                    </div>
                    <div className="float-end">
                        <div className="pt-2">
                            <input type="checkbox" onChange={ () => setNumber(number) }/>
                            <label className="ms-3">Skaičiai (0 - 9)</label>
                        </div>
                        <div className="pt-2">
                            <input type="checkbox" onChange={ () => setSymbol(symbol) } />
                            <label className="ms-3">Specialūs simboliai (!@#$%^&*+)</label>
                        </div>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={generatePassword}>Generuokite slaptažodį</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;