import "./App.css"

function Counter({id, func, count, inc, dec, reset}){
    return(
        <div className="counter">
            <h3>{id}</h3>
            <h4>Счёт</h4>
            <h5>{count}</h5>
            <button onClick={() => inc(id)}>+</button>
            <button onClick={() => reset(id)}>Reset</button>
            <button onClick={() => {if (count !== 0) dec(id)}}>-</button>
            <br />
            <button onClick={() => func(id)} style={{backgroundColor:"red"}}>Delete</button>
        </div>
    )
}

export default Counter