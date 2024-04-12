
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer =  setInterval(() => {
      setDate(new Date())
    }, 100);

    return () => {
      window.clearInterval(timer);
    }
  }, [])

  const hrs = date.getHours();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  return (
    <div className="App">
      <p className='time-wrapper'>
        <span>{hrs}</span>
        :
        <span>{mins}</span>
        :
        <span>{seconds}</span>
      </p>
    </div>
  );
}

export default App;
