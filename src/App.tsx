import './App.css';
import { useRef, useState } from 'react';
import BmiResult from './components/BmiResult';

function App() {
    /*  const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
     */
    const [bmi, setBmi] = useState(0);

    const heightRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null);

    /*  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'weight') {
            setWeight(Number(value));
        } else if (name === 'height') {
            setHeight(Number(value));
        }
    }; */

    const calculateBmi = () => {
        //const bmi = weight / (height / 100) * (height / 100);
        const weight = Number(weightRef.current?.value) || 0;
        const height = Number(heightRef.current?.value) || 0;
        const bmi = weight / (height / 100) ** 2;
        setBmi(bmi);
    };

    return (
        <>
            <h1>BMI Calculator</h1>
            <p></p>
            <label htmlFor='weight'>Weight (kg)</label>
            <input type='number' name='weight' /* onChange={handleOnChange} */ ref={weightRef} />
            <label htmlFor='height'>Height (cm)</label>
            <input type='number' name='height' /* onChange={handleOnChange} */ ref={heightRef} />
            <button type='button' onClick={calculateBmi}>
                Calculate
            </button>

            <BmiResult bmi={bmi} />
        </>
    );
}

export default App;
