import React, {useEffect,useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Assets/Home.css";
const Home = () => {
    const [seconds,setSeconds]=useState(59);
    const[minutes,setMinutes]=useState(10);
    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
                setSeconds(seconds-1)

            if(seconds===1){
                setMinutes(minutes-1);
                setSeconds(59);
            }
        },1000)
        return ()=> clearInterval(timer);
    });

  return (
    <>
      <nav class="navbar navbar-light bg-dark">
        <h2 className="heading">Home</h2>
        <h1 className="heading">{minutes<10? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
      </nav>
      <div class="form-group">
        <label for="comment">Message</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
      </div>
      <Link to="/">
        <Button type="submit">Submit</Button>
      </Link>
    </>
  );
};

export default Home;
