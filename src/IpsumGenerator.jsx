import { useState } from "react"
import data from "./data";
import { nanoid } from "nanoid";
const IpsumGenerator = () => {
    const [count, setCount] = useState(1)
    const [btnClick, setBtnClick] = useState(false)
    const [text, setText] = useState(data);
    const handleSubmit = (e) => {
     e.preventDefault();
     let amount = parseInt(count);
     setText(data.slice(0, amount))
     setBtnClick(true)
    };
  
  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
    <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <input type="number" id="amount" name="amount" step="1" min="1" max="8" value={count} onChange={(e) => setCount(e.target.value)}/>
        <button className="btn" type="submit">Generate</button>
    </form>
    {btnClick ? 
      <article className="lorem-text">
      {text.map((item, index) => {
        return <p key={nanoid()}>{item}</p>
      })}
    </article>
     : <h4 style={{color:"blueViolet"}}>Want to see some dummy texts, click on generate</h4>
    }
    </section>
  )
}

export default IpsumGenerator
