import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';


function random(n){
  return Math.ceil(Math.random()*n);
}


function App() {
  const [num, setNum] = useState(1);

  function handleRollClick(){
    const NextNum = random(6);
    setNum(NextNum);
  }
  function handleClearClick(){
    setNum(1);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button> 
        <Button onClick={handleClearClick}>처음부터</Button> 
      </div>
      <Dice color="blue" num={num} />
    </div>
  );
}

export default App;
