interface Props {
    bmi: number;
}
const BmiResult = ({ bmi }: Props) => {
    const checkBmiResult = () => {
        if (bmi === 0) return '-';
        if (bmi < 18.5) return 'less thin';
        if (bmi < 25) return 'normal healthy';
        if (bmi < 30) return 'quite fat / fat level 1';
        if (bmi < 35) return 'fat / fat level 2';
        if (bmi >= 35) return 'very fat / fat level 3';
        return <span>TODO</span>;
    };

    const getResultClass = () => {
        if (bmi < 18.5) return 'gray';
        if (bmi < 22.9) return 'green';
        if (bmi < 24.9) return 'yellow';
        return 'red';
    };

    return (
        <div className='result'>
            <p>BMI: {bmi.toFixed(2)}</p>
            <p className={getResultClass()}>{checkBmiResult()}</p>
        </div>
    );
};

export default BmiResult;
