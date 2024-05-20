// import React, { useState } from "react";
// import '/Login.css';
// import logo from '/src/estate.png';
// import { Link } from 'react-router-dom';

// export const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch("https://estate-3-oxif.onrender.com/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ email, password })
//             });

//             if (response.ok) {
//                 window.location.href = "/Listings";
//             } else {
//                 const data = await response.json();
//                 setError(data.error);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setError("An error occurred. Please try again later.");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <nav className="nav">
//                     <div className="img">
//                         <img src={logo} alt="logo" width={50} height={50} />
//                     </div>
//                     <ul className="links">
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>
//                             <Link to="/SignBar">Login</Link>
//                         </li>
//                         <li>sell / buy property</li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="new">
//                 <div className="content">
//                     <h1 className="welcome">Your Castle Awaits<br/>Browse Our Listings</h1>
//                     <div className="login">
//                         <form onSubmit={handleLogin}>
//                             <h2>LOGIN</h2>
//                             <label htmlFor="email"><h3>Email: </h3></label>
//                             <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                             <label htmlFor="password"><h3>Password: </h3></label>
//                             <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                             <p>Forget password?</p>
//                             {error && <p style={{ color: "red" }}>{error}</p>}
//                             <button type="submit">Login</button>
//                             <h3>Not a member yet ? <a href="/SignBar">Signup</a></h3>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from "react";
// import './Login.css';
// import black from './black.jpg';
// import logo from './fitness.jpeg';
// import { Link } from 'react-router-dom';

// export const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch("https://fitnessbackend-7.onrender.com/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ email, password })
//             });

//             if (response.ok) {
//                 window.location.href = "/Listings";
//             } else {
//                 const data = await response.json();
//                 setError(data.error);
//             }
//         } catch (error) {
//             console.error("Error:"+ error);
//             setError("An error occurred. Please try again later.");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <nav className="nav">
//                     <div className="img">
//                         <img src={black} alt="black" width={50} height={50} />
//                     </div>
//                     <ul className="links">
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Workouts</li>
//                         <li>
//                             <Link to="/Signup">SIGNUP</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="new">
//                 <div className="content">
//                     <h1 className="welcome">Your journey to fitness begins with a single step.<br/> Take it now and transform your life</h1>
//                     <div className="login">
//                         <form onSubmit={handleLogin}>
//                             <h2>LOGIN</h2>
//                             <label htmlFor="email"><h3>Email: </h3></label>
//                             <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                             <label htmlFor="password"><h3>Password: </h3></label>
//                             <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                             <p>Forget password?</p>
//                             {error && <p style={{ color: "red" }}>{error}</p>}
//                             <button type="submit">Login</button>
//                             <h3>Not a member yet ? <a href="/Signup">Signup</a></h3>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";
import './Login.css';
import black from './black.jpg';
import { Link, useHistory } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("https://fitness-bac-2.onrender.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.role === 'trainer') {
                    history.push(`/trainer-dashboard?trainerId=${data.userId}`);
                } else {
                    history.push(`/trainee-dashboard?traineeId=${data.userId}`);
                }
            } else {
                const data = await response.json();
                setError(data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <div>
                <nav className="nav">
                    <div className="img">
                        <img src={black} alt="black" width={50} height={50} />
                    </div>
                    <ul className="links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Workouts</li>
                        <li>
                            <Link to="/Signup">SIGNUP</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="new">
                <div className="content">
                    <h1 className="welcome">Your journey to fitness begins with a single step.<br/> Take it now and transform your life</h1>
                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <h2>LOGIN</h2>
                            <label htmlFor="email"><h3>Email: </h3></label>
                            <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="password"><h3>Password: </h3></label>
                            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <p>Forget password?</p>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <button type="submit">Login</button>
                            <h3>Not a member yet ? <Link to="/Signup">Signup</Link></h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
