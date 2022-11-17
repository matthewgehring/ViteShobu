import { useState, useEffect } from 'react'
import './App.css'
import Card from './card';

function App() {
  const [spyCss, setSpyCss] = useState(false);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
      getWord()
  }, [])

  async function getWord () {
    const res = await fetch('http://localhost:8081/words');
    const data = await res.json();
    console.log(data.data);
    setWords(data.data)
  }

  const spy = () => {
    setSpyCss(!spyCss);
  }

  return (
    <div className='GameArea'>
      <div className="Cards">
          {
            [...words].map(element => {
              return <Card css = {spyCss} word ={element}/>
            })
          }
      </div>
      <div className='SpyButton'>
        <button onClick={spy}>Spy</button>
      </div>
        
    </div>
  )
}

export default App
