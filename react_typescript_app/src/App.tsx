import { useState, ReactElement } from "react";
import './App.css'

function App(): ReactElement {
  const [counter, setCounter] = useState(0);
  const doAction = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1 className="bg-primary text-white p-2">React sample</h1>
      <div className="container">
        <h2 className="my-3">click button!</h2>
        <div className="alert alert-primary">
          <div className="row px-2">
            <h3 id="msg" className="col">{counter}</h3>
            <button className="btn btn-primary col-2" onClick={doAction}>
              Click!
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;