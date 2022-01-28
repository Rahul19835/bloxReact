import React, {useState} from "react";
import './about.css';
const About = () => {

    const [count, setCount] = useState(0);

    return(
        <>
        <div className="container">
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <h3>About</h3>
           <p>{count}</p>
           <button onClick={()=> setCount(count + 1)}>+</button>
           <button onClick={()=> setCount(count - 1)}>-</button>

        </div>
        </>
    )
}
export default About;