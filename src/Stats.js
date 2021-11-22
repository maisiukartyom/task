import "./App.css"

function Statistics({amount, sum}){
    return(
        <div className="stats">
            <div className="amount">
                <h4>Всего счётчиков</h4>
                <h5>{amount}</h5>
            </div>

            <div className="amount">
                <h4>Сумма на счётчиках</h4>
                <h5>{sum}</h5>
            </div>
        </div>
        
    )
}

export default Statistics