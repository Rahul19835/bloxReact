import React, {useState} from "react";
import './home.css';
const Home = () => {

    const [count, setCount] = useState(0);

    return(
        <>
        <div className="container">
           <h3>home</h3>
           <p>{count}</p>
           <button onClick={()=> setCount(count + 1)}>+</button>
           <button onClick={()=> setCount(count - 1)}>-</button>

        </div>
        </>
    )
}
export default Home;