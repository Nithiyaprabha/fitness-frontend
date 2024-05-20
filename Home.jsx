import { Link } from 'react-router-dom'
import homepage from './fitness.jpeg'
const Home=()=>{
    return <div>
    <div className="navbar">
    <div><h1>FITNESS </h1></div>
    
        <ul type="none">
            <li><a href="/home">Home</a></li>
            <li><a href="/Workouts">Workouts</a></li>
            <li>< a href="about">Diet</a></li>
            <li>< a href="contact">Contact</a></li>
        </ul>
        
    
    </div>
    <div className="bg">
    <div> <img src={homepage} alt="homepage" width="1395" height="650"></img></div>
    <div> <a className="start"><Link to="/Signup">Get Started</Link></a></div>

    </div>
    <div className="slogan">EVERY STEP COUNTS</div>
    
    </div>
}

export default Home