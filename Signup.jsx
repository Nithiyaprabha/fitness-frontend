// import React, { useState } from "react";
// import 'Signup.css';
// import logo from '/fitness.jpg';

// export const Signup = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleSignup = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch("https://estate-3-oxif.onrender.com/signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ username, email, password })
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
//             <div className="us">
//                 <h2>WHY US?</h2>
//                 <h2>
//                     <p><img src={logo} alt="logo" width={50} height={50}></img>Post your property for FREE</p>
//                     <p><img src={logo} alt="logo" width={50} height={50}></img>Get instant response</p>
//                     <p><img src={logo} alt="logo" width={50} height={50}></img>Showcase your property</p>
//                     <p><img src={logo} alt="logo" width={50} height={50}></img>Contact sellers</p>
//                 </h2>
//             </div>
//             <div className="signup">
//                 <form onSubmit={handleSignup}>
//                     <h2 className="title">SIGNUP</h2>
//                     <label htmlFor="name"><h3>Username: </h3></label>
//                     <input type="text" placeholder="Enter Username" name="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
//                     <label htmlFor="email"><h3>Email: </h3></label>
//                     <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     <label htmlFor="password"><h3>Password: </h3></label>
//                     <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     {error && <p style={{ color: "red" }}>{error}</p>}
//                     <button type="submit">Signup</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from "react";
// import './Signup.css';
// import logo from './fitness.jpeg';
// import black from './black.jpg';
// import { Link, useHistory } from "react-router-dom";

// export const Signup = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("trainee"); // Default role is trainee
//     const [error, setError] = useState("");
//     const history = useHistory();

//     const handleSignup = async (event) => {
//         event.preventDefault();

//         try {
            

//             const response = await fetch(`https://fitnessbackend-8.onrender.com/signup`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ name, email, password, role })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 if (data.role === 'trainer') {
//                     history.push(`/trainer-dashboard?trainerId=${data.userId}`);
//                 } else {
//                     history.push(`/trainee-dashboard?traineeId=${data.userId}`);
//                 }
//                 // // Redirect to appropriate dashboard based on role
//                 // history.push(role === "trainee" ? "/trainee-dashboard" : "/trainer-dashboard");
//                 //   history.push(role === "trainee" ? `/trainee-dashboard?traineeId=${data.userId}` : `/trainer-dashboard?trainerId=${data.userId}`);
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
//         <div className="big">
//             <div className="us">
                
//                 <h2>
//                     <p>Welcome to our fitness community!</p>
//                 </h2>
//                 <p className="login">Already a member? <a><Link to="/Login">LOGIN</Link></a>  </p>
//             </div>
//             <div className="signup">
//                 <form onSubmit={handleSignup}>
//                     <h2 className="title">SIGNUP</h2>
//                     <label htmlFor="name"><h3>Username: </h3></label>
//                     <input type="text" placeholder="Enter Username" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
//                     <label htmlFor="email"><h3>Email: </h3></label>
//                     <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                     <label htmlFor="password"><h3>Password: </h3></label>
//                     <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                     <div>
//                         <label htmlFor="role"><h3>Role: </h3></label>
//                         <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
//                             <option value="trainee">Trainee</option>
//                             <option value="trainer">Trainer</option>
//                         </select>
//                     </div>
//                     {error && <p style={{ color: "red" }}>{error}</p>}
//                     <button type="submit">Signup</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from "react";
import './Signup.css';
import { Link, useHistory } from "react-router-dom";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("trainee"); // Default role is trainee
    const [error, setError] = useState("");
    const history = useHistory();

    const handleSignup = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`https://fitness-bac-2.onrender.com/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, role })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Response Data:", data); // Log the response data
                const userId = data.userId;
                if (!userId) {
                    throw new Error("User ID not returned from backend");
                }
                // Redirect to appropriate dashboard based on role
                history.push(role === "trainee" ? `/trainee-dashboard?traineeId=${userId}` : `/trainer-dashboard?trainerId=${userId}`);
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
        <div className="big">
            <div className="us">
                <h2>
                    <p>Welcome to our fitness community!</p>
                </h2>
                <p className="login">Already a member? <Link to="/Login">LOGIN</Link></p>
            </div>
            <div className="signup">
                <form onSubmit={handleSignup}>
                    <h2 className="title">SIGNUP</h2>
                    <label htmlFor="name"><h3>Username: </h3></label>
                    <input type="text" placeholder="Enter Username" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="email"><h3>Email: </h3></label>
                    <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password"><h3>Password: </h3></label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div>
                        <label htmlFor="role"><h3>Role: </h3></label>
                        <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="trainee">Trainee</option>
                            <option value="trainer">Trainer</option>
                        </select>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
