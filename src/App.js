import { useEffect, useState } from 'react';
import './App.css';
import Counter from "./Counter.js"
import React from 'react'
import Statistics from './Stats';

function App() {

  const [counters, setCounters] = useState([])
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)
  
  useEffect(() => 
    {let sum = 0
      counters.forEach((item) => sum+=item.count)
      console.log(sum)
      setSum(sum)},
  [counters])

  function deleteCounter(id){
    let tmp = counters
    tmp = tmp.map((item) => (item.count % 2 !== 0 ? {...item, count: item.count - 1} : {...item, count: item.count}))
    tmp = tmp.filter((item) => item.id !== id)
    setCounters(tmp)
    setTotal(total - 1)
  }

  function deleteAll(){
    setCounters([])
    setTotal(0)
  }

  function inc(id){
    let tmp = counters
    tmp = tmp.map((item) => (item.id === id ? {...item, count: item.count+1} : {...item, count: item.count}))
    setCounters(tmp)
  }

  function dec(id){
    let tmp = counters
    tmp = tmp.map((item) => (item.id === id ? {...item, count: item.count-1} : {...item, count: item.count}))
    setCounters(tmp)
  }

  function reset(id){
    let tmp = counters
    tmp = tmp.map((item) => (item.id === id ? {...item, count: 0} : {...item, count: item.count}))
    setCounters(tmp)
  }

  function addCounter(){
    let tmp = counters
    tmp = tmp.map((item) => (item.count % 2 === 0 ? {...item, count: item.count + 1} : {...item, count: item.count}))
    tmp.push({id: total+1, count: 0})
    setCounters(tmp)
    setTotal(total + 1)
  }

  return (
    <div className="App">
      <Statistics amount={total} sum={sum}/>
      <button onClick={addCounter}>Add counter</button>
      <button onClick={deleteAll}>Reset</button>
      <div className="counters">
        {counters.map((item) => <Counter id={item.id} func={deleteCounter} count={item.count} 
        inc={inc} dec={dec} reset={reset}/>)}
      </div>
    </div>
  );
}

export default App;
