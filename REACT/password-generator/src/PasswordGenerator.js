import { useState } from 'react';

const PasswordGenerator = () => {   

    const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const specialSymbols = '!@#$%^&*+';

    const [password, setPassword] = useState();
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [length, setLength] = useState(8);
    const [showPassword, setShowPassword] = useState([]);


    const handleGeneratePassword = () => {
        
        let characterList = '';

        if(uppercase) {
            characterList += uppercases;
        }
        if(lowercase) {
            characterList += lowercases;
        }
        if(number) {
            characterList += numbers;
        }
        if(symbol) {
            characterList += specialSymbols;
        }

        setPassword(createPassword(characterList));
        setShowPassword([...showPassword, password]);
    }

    const createPassword = (characterList) => {
        let password = '';

        const characterListLength = characterList.length;

        for(let i = 0; i < length; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength);

            password += characterList.charAt(characterIndex);
        }
        return password;
    }

    const resetSettings = () => {
        setPassword('Jūsų slaptažodis...');
        setUppercase(true);
        setLowercase(true);
        setNumber(false);
        setSymbol(false);
        setLength(8);
    }

    return (
        <div className="container">
            <h1>Slaptažodžių generatorius</h1>
            <input type="text" className="form-control mt-4" placeholder="Jūsų slaptažodis..." defaultValue={password} />
            <div>
                <fieldset className="border p-2 mt-3 rounded">
                    <legend className="d-flex justify-content-center">Nustatymai</legend>
                    <div className="input-group">
                        <label className="mb-2 me-2">Pasirinkite slaptažodžio ilgį</label>
                        <input 
                            type="number" 
                            className="form-control rounded" 
                            min="8" max="50" 
                            defaultValue={length} 
                            onChange={ (e) => setLength(e.target.value) } 
                        />
                    </div>
                    <div className="float-start">
                        <div className="pt-2">
                            <input 
                                type="checkbox" 
                                checked={uppercase} 
                                onChange={ (e) => setUppercase(e.target.checked) } 
                            /> 
                            <label className="ms-3">Didžiosios raidės (A - Z)</label>
                        </div>
                        <div className="pt-2">
                            <input 
                                type="checkbox" 
                                checked={lowercase} 
                                onChange={ (e) => setLowercase(e.target.checked) } 
                            />
                            <label className="ms-3">Mažosios raidės (a - z)</label>
                        </div>
                    </div>
                    <div className="float-end">
                        <div className="pt-2">
                            <input 
                                type="checkbox" 
                                checked={number}
                                onChange={ (e) => setNumber(e.target.checked) }
                            />
                            <label className="ms-3">Skaičiai (0 - 9)</label>
                        </div>
                        <div className="pt-2">
                            <input 
                                type="checkbox" 
                                checked={symbol}
                                onChange={ (e) => setSymbol(e.target.checked) } 
                            />
                            <label className="ms-3">Specialūs simboliai (!@#$%^&*+)</label>
                        </div>
                    </div>
                </fieldset>
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-primary" onClick={handleGeneratePassword}>Generuoti slaptažodį</button>
                    <button className='btn btn-danger ms-3' onClick={resetSettings}>Reset'as</button>
                </div>
            </div>
            <div className='password-storage'>
                <ul className='list-group list-group-flush'>
                {showPassword.map((value, index) =>  {
                    return (
                        <li className='list-group-item' key={index}>{value}</li>
                    );
                })}
                </ul>
            </div>
        </div>
    );
}

export default PasswordGenerator;