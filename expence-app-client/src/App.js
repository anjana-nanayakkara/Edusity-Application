import "./App.css";
import {useState} from 'react'


function App() {
  const [form,setForm] = useState({
    amount:0,
    description:"",
    date:"",
  })

  

  function handleInput(e){
    console.log(e.target.value)
    setForm({ ... form, [e.target.name]: e.target.value });

  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    const res = await fetch("http://localhost:4000/transaction",{
      method: "POST",
      body:form,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          onChange={handleInput}
          value={form.amount}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={form.description}
          placeholder="Enter transaction details"
        />
        <input type="date" name="date" onChange={handleInput} value={form.date} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
