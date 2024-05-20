// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrainerDashboard = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [videos, setVideos] = useState([]);
//   const [title, setTitle] = useState('');
//   const [videoFile, setVideoFile] = useState(null);
//   const [followers, setFollowers] = useState([]);

//   useEffect(() => {
//     fetchTrainers();
//     fetchVideos();
//     fetchFollowers();
//   }, []);

//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get('/api/trainers');
//       setTrainers(response.data);
//     } catch (error) {
//       console.error('Error fetching trainers:', error);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('/api/videos');
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//       // If error occurs, set an empty array as the fallback value for videos
//       setVideos([]);
//     }
//   };

//   const fetchFollowers = async () => {
//     try {
//       const response = await axios.get('/api/trainers/followers');
//       setFollowers(response.data);
//     } catch (error) {
//       console.error('Error fetching followers:', error);
//     }
//   };

//   const handleCreateAccount = async () => {
//     try {
//       await axios.post('/api/trainers', { name, email, password });
//       // Refresh trainers after creating account
//       fetchTrainers();
//     } catch (error) {
//       console.error('Error creating account:', error);
//     }
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('video', videoFile);
//       await axios.post('/api/videos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       // Refresh videos after upload
//       fetchVideos();
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/videos/${id}`);
//       // Refresh videos after delete
//       fetchVideos();
//     } catch (error) {
//       console.error('Error deleting video:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Trainer Dashboard</h2>
//       <div>
//         <h3>Create Account</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleCreateAccount}>Create Account</button>
//       </div>
//       <div>
//         <h3>Upload Video</h3>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="file"
//           accept="video/mp4"
//           onChange={(e) => setVideoFile(e.target.files[0])}
//         />
//         <button onClick={handleUpload}>Upload</button>
//       </div>
//       <div>
//         <h3>Videos</h3>
//         <ul>
//           {videos.map(video => (
//             <li key={video.id}>
//               <h4>{video.title}</h4>
//               <video width="320" height="240" controls>
//                 <source src={video.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button onClick={() => handleDelete(video.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Followers</h3>
//         <ul>
//           {followers.map(follower => (
//             <li key={follower.id}>
//               <h4>{follower.name}</h4>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TrainerDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TrainerDashboard = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [videos, setVideos] = useState([]); // Initialize as an empty array
//   const [title, setTitle] = useState('');
//   const [videoFile, setVideoFile] = useState(null);
//   const [followers, setFollowers] = useState([]);

//   useEffect(() => {
//     fetchTrainers();
//     fetchVideos();
//     fetchFollowers();
//   }, []);

//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get('/api/trainers');
//       setTrainers(response.data);
//     } catch (error) {
//       console.error('Error fetching trainers:', error);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('/api/videos');
//       setVideos(response.data); // Ensure response.data is an array
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const fetchFollowers = async () => {
//     try {
//       const response = await axios.get('/api/trainers/followers');
//       setFollowers(response.data); // Ensure response.data is an array
//     } catch (error) {
//       console.error('Error fetching followers:', error);
//     }
//   };

//   const handleCreateAccount = async () => {
//     try {
//       await axios.post('/api/trainers', { name, email, password });
//       // Refresh trainers after creating account
//       fetchTrainers();
//     } catch (error) {
//       console.error('Error creating account:', error);
//     }
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('video', videoFile);
//       await axios.post('/api/videos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       // Refresh videos after upload
//       fetchVideos();
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/videos/${id}`);
//       // Refresh videos after delete
//       fetchVideos();
//     } catch (error) {
//       console.error('Error deleting video:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Trainer Dashboard</h2>
//       <div>
//         <h3>Upload Video</h3>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="file"
//           accept="video/mp4"
//           onChange={(e) => setVideoFile(e.target.files[0])}
//         />
//         <button onClick={handleUpload}>Upload</button>
//       </div>
//       <div>
//         <h3>Provide Diet Plans</h3>
//         <textarea
//           placeholder="Weight Loss Plan"
//           value={weightLossPlan}
//           onChange={(e) => setWeightLossPlan(e.target.value)}
//         />
//         <textarea
//           placeholder="Weight Gain Plan"
//           value={weightGainPlan}
//           onChange={(e) => setWeightGainPlan(e.target.value)}
//         />
//         <button onClick={handleProvideDietPlan}>Provide Diet Plans</button>
//       </div>
//       <div>
//         <h3>Videos</h3>
//         <ul>
//           {videos.map(video => (
//             <li key={video.id}>
//               <h4>{video.title}</h4>
//               <video width="320" height="240" controls>
//                 <source src={video.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Followers</h3>
//         <ul>
//           {followers.map(follower => (
//             <li key={follower.id}>
//               <h4>{follower.name}</h4>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Trainers</h3>
//         <ul>
//           {trainers.map(trainer => (
//             <li key={trainer.id}>
//               <h4>{trainer.name}</h4>
//               <button onClick={() => handleFollowTrainer(trainer.id)}>Follow</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TrainerDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'
//  import './Trainer.css'; 
//  import black from './black.jpg'

// const TrainerDashboard = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [followers, setFollowers] = useState([]);
//   const [dietPlan, setDietPlan] = useState('');
//   const [videoTitle, setVideoTitle] = useState('');
//   const [videoFile, setVideoFile] = useState(null);
//   const [trainerName, setTrainerName] = useState('');
//   const [trainerEmail, setTrainerEmail] = useState('');
//   const [trainerPassword, setTrainerPassword] = useState('');

//   useEffect(() => {
//     fetchTrainers();
//     fetchVideos();
//     fetchFollowers();
//   }, []);

  
//   const fetchTrainers = async () => {
//     try {
//       const response = await axios.get('/api/trainers');
//       setTrainers(response.data);
//     } catch (error) {
//       console.error('Error fetching trainers:', error);
//     }
//   };


//   // Fetch videos from API
//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('/trainers/${trainerId}/videos');
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const fetchFollowers = async () => {
//     try {
//       const response = await axios.get('/api/trainers/followers');
//       setFollowers(response.data);
//     } catch (error) {
//       console.error('Error fetching followers:', error);
//     }
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', videoTitle);
//       formData.append('video', videoFile);
//       await axios.post('/api/videos', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
  
//       // After successful upload, fetch the updated list of videos
//       await fetchVideos();
      
//       // Reset the input fields
//       setVideoTitle('');
//       setVideoFile(null);
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };
  


//   return (
//     <div className="trainer-dashboard">
//       <div>
//                 <nav className="nav">
//                     <div className="img">
//                         <img src={black} alt="black" width={50} height={50} />
//                     </div>
//                     <ul className="links">
//                         <li>Home</li>
//                         <li>About</li>
//                         <li><Link to="/Workouts" >Workouts</Link></li>
//                         <li>
//                             <Link to="/Signup">SIGNUP</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>

//       <div className="upload-video">
//         <h3>Upload Video</h3>
//         <input type="text" placeholder="Title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
//         <input type="file" accept="video/mp4" onChange={(e) => setVideoFile(e.target.files[0])} />
//         <button onClick={handleUpload}>Upload</button>
//       </div>
      
//       <div className="videos">
//         <h3>Videos</h3>
//         <ul>
//           {Array.isArray(videos) && videos.map(video => (
//             <li key={video.id}>
//               <h4>{video.title}</h4>
//               <video width="320" height="240" controls>
//                 <source src={video.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="followers">
//         <h3>Followers</h3>
//         <ul>
//           {Array.isArray(followers) && followers.map(follower => (
//             <li key={follower.id}>
//               <h4>{follower.name}</h4>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className="diet-plan">
//         <h3>Diet Plan</h3>
//         <textarea value={dietPlan} onChange={(e) => setDietPlan(e.target.value)} />
//       </div>
//     </div>
//   );
// };

// export default TrainerDashboard;

// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useLocation } from "react-router-dom";
// import './Trainer.css';
// import black from './black.jpg'

// const TrainerDashboard = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const trainerId = searchParams.get('trainerId');
//   console.log(trainerId);

//   const [trainerName, setTrainerName] = useState('');
//   const [videos, setVideos] = useState([]);
//   const [videoTitle, setVideoTitle] = useState('');
//   const [videoFile, setVideoFile] = useState(null);

//   // Fetch trainer details
//   useEffect(() => {
//     if (trainerId) {
//       fetchTrainerDetails(trainerId);
//     }
//   }, [trainerId]);

//   const fetchTrainerDetails = async (trainerId) => {
//     try {
//       const response = await fetch(
//         `https://fitnessbackend-9.onrender.com/api/trainer?trainerId=${trainerId}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setTrainerName(data.trainer.name.charAt(0).toUpperCase() + data.trainer.name.slice(1)); // Capitalize first letter
//       } else {
//         console.error("Failed to fetch trainer details");
//       }
//     } catch (error) {
//       console.error("Error fetching trainer details:", error);
//     }
//   };

//   // Fetch videos
//   useEffect(() => {
//     if (trainerId) {
//       fetchVideos(trainerId);
//     }
//   }, [trainerId]);

//   const fetchVideos = async (trainerId) => {
//     try {
//       const response = await fetch(
//         `https://fitnessbackend-9.onrender.com/api/trainer/${trainerId}/videos`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setVideos(data.videos);
//       } else {
//         console.error("Failed to fetch videos");
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('title', videoTitle);
//       formData.append('video', videoFile);
//       const response = await fetch('https://fitnessbackend-9.onrender.com/api/upload-video', {
//         method: 'POST',
//         body: formData
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setVideos([...videos, data.url]);
//         toast.success("Video uploaded successfully");
//       } else {
//         toast.error("Failed to upload video");
//       }
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       toast.error("Failed to upload video");
//     }
//   };

//   const handleDelete = async (videoUrl) => {
//     try {
//       await fetch(`https://fitnessbackend-9.onrender.com/api/delete-video?url=${videoUrl}`, {
//         method: 'DELETE'
//       });
//       setVideos(videos.filter(video => video !== videoUrl));
//       toast.success("Video deleted successfully");
//     } catch (error) {
//       console.error("Error deleting video:", error);
//       toast.error("Failed to delete video");
//     }
//   };

//   return (
//     <>
//       <div className="trainer-dashboard">
//        <div>
//                 <nav className="nav">
//                   <div className="img">
//                      <img src={black} alt="black" width={50} height={50} />
//                   </div>
//                    <ul className="links">
//                        <li>Home</li>
//                                                 <li>About</li>
//                         <li><Link to="/Workouts" >Workouts</Link></li>
//                         <li>
//                             <Link to="/Signup">SIGNUP</Link>
//                         </li>
//                      </ul>
//                  </nav>
//              </div>

//        <div className="upload-video">
//          <h3>Upload Video</h3>
//          <input type="text" placeholder="Title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
//          <input type="file" accept="video/mp4" onChange={(e) => setVideoFile(e.target.files[0])} />
//          <button onClick={handleUpload}>Upload</button>
//        </div>
      
//       <div className="trainer-content">
//         <div className="welcome-message">
//           <h2>Welcome, {trainerName}!</h2>
//         </div>
//         {videos.length > 0 && (
//           <div className="video-section">
//             {videos.map((video, index) => (
//               <div key={index} className="video-item">
//                 <video controls>
//                   <source src={video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <div className="buttons">
//                   <button onClick={() => handleDelete(video)}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default TrainerDashboard;

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from "react-router-dom";
import './Trainer.css';
import black from './black.jpg';
import { styled, Box, Button, InputBase, Select, MenuItem } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Navbar from "./Navbar";

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const StyledFormControl = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
});

const InputTextField = styled(InputBase)({
    fontSize: '25px',
    flex: '1',
});

const AddWorkoutButton = styled(Button)({
    marginLeft: 'auto',
});

const TrainerDashboard = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const trainerId = searchParams.get('trainerId');
    console.log(trainerId);

    const [trainerName, setTrainerName] = useState('');
    const [videos, setVideos] = useState([]);
    const [videoTitle, setVideoTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [workout, setWorkout] = useState({
        trainerId: trainerId,
        workoutName: '',
        description: '',
        category: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkout({ ...workout, [name]: value });
    }

    const handleCategoryChange = (e) => {
        setWorkout({ ...workout, category: e.target.value });
    }

    const handleImageChange = (e) => {
        setWorkout({ ...workout, image: e.target.files[0] });
    }

    // Fetch trainer details
    useEffect(() => {
        if (trainerId) {
            fetchTrainerDetails(trainerId);
        }
    }, [trainerId]);

    const fetchTrainerDetails = async (trainerId) => {
        try {
            const response = await fetch(
                `https://fitness-bac-7.onrender.com/getTrainerDetails?trainerId=${trainerId}`
            );
            if (response.ok) {
                const data = await response.json();
                setTrainerName(data.trainer.name.charAt(0).toUpperCase() + data.trainer.name.slice(1)); // Capitalize first letter
            } else {
                console.error("Failed to fetch trainer details");
            }
        } catch (error) {
            console.error("Error fetching trainer details:", error);
        }
    };

    // Fetch videos
    useEffect(() => {
        if (trainerId) {
            fetchVideos(trainerId);
        }
    }, [trainerId]);

    const fetchVideos = async (trainerId) => {
        try {
            const response = await fetch(
                `https://fitness-bac-7.onrender.com/getTrainerVideos/${trainerId}`
            );
            if (response.ok) {
                const data = await response.json();
                setVideos(data.videos);
            } else {
                console.error("Failed to fetch videos");
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('title', videoTitle);
            formData.append('video', videoFile);
            formData.append('trainerId', trainerId);
            const response = await fetch(`https://fitness-bac-7.onrender.com/uploadVideo`, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const data = await response.json();
                setVideos([...videos, data.url]);
                toast.success("Video uploaded successfully");
            } else {
                toast.error("Failed to upload video");
            }
        } catch (error) {
            console.error("Error uploading video:", error);
            toast.error("Failed to upload video");
        }
    };

    const handleDelete = async (videoUrl) => {
        try {
            await fetch(`https://fitness-bac-7.onrender.com/deleteVideo?url=${videoUrl}`, {
                method: 'DELETE'
            });
            setVideos(videos.filter(video => video !== videoUrl));
            toast.success("Video deleted successfully");
        } catch (error) {
            console.error("Error deleting video:", error);
            toast.error("Failed to delete video");
        }
    };

    const saveWorkout = async () => {
        const formData = new FormData();
        formData.append('trainerId', trainerId);
        formData.append('workoutName', workout.workoutName);
        formData.append('description', workout.description);
        formData.append('category', workout.category);
        formData.append('image', workout.image);

        try {
            const response = await fetch(`https://fitness-bac-7.onrender.com/api/addWorkout`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                toast.success('Workout added successfully!');
                setWorkout({
                    trainerId: trainerId,
                    workoutName: '',
                    description: '',
                    category: '',
                    image: null
                });
            } else {
                toast.error('Failed to add workout.');
            }
        } catch (error) {
            console.error('Error occurred while adding workout:', error);
            toast.error('Error occurred while adding workout.');
        }
    }

    return (
        <>
            <Navbar />
            <div className="trainer-dashboard">
                <div>
                    <nav className="nav">
                        <div className="img">
                            <img src={black} alt="black" width={50} height={50} />
                        </div>
                        <ul className="links">
                            <li>Home</li>
                            <li>About</li>
                            <li><Link to="/Workouts">Workouts</Link></li>
                            <li>
                                <Link to="/Signup">SIGNUP</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="upload-video">
                    <h3>Upload Video</h3>
                    <input type="text" placeholder="Title" value={videoTitle} onChange={(e) => setVideoTitle(e.target.value)} />
                    <input type="file" accept="video/mp4" onChange={(e) => setVideoFile(e.target.files[0])} />
                    <button onClick={handleUpload}>Upload</button>
                </div>

                <div className="trainer-content">
                    <div className="welcome-message">
                        <h2>Welcome, {trainerName}!</h2>
                    </div>
                    {videos.length > 0 && (
                        <div className="video-section">
                            {videos.map((video, index) => (
                                <div key={index} className="video-item">
                                    <video controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="buttons">
                                        <button onClick={() => handleDelete(video)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Container>
                <ToastContainer autoClose={2000} />
                <br /><br /><br /><br />
                <img
                    src={workout.image ? URL.createObjectURL(workout.image) : 'https://via.placeholder.com/300'}
                    alt="Workout"
                    style={{ maxWidth: '100%', height: '300px' }}
                />

                <StyledFormControl>
                    <InputTextField
                        onChange={handleChange}
                        value={workout.workoutName}
                        name='workoutName'
                        placeholder="Workout Name"
                    />

                    <Select
                        value={workout.category}
                        onChange={handleCategoryChange}
                        placeholder="Category"
                        style={{ minWidth: '120px' }}
                    >
                        <MenuItem value="Cardio">Cardio</MenuItem>
                        <MenuItem value="Strength Training">Strength Training</MenuItem>
                        <MenuItem value="Yoga">Yoga</MenuItem>
                        <MenuItem value="Pilates">Pilates</MenuItem>
                        <MenuItem value="Crossfit">Crossfit</MenuItem>
                        <MenuItem value="Zumba">Zumba</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>

                    <label htmlFor="fileInput">
                        <Add fontSize="large" color="action" />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                    <AddWorkoutButton onClick={saveWorkout} variant="contained" color="primary">Add Workout</AddWorkoutButton>
                </StyledFormControl>

                <TextareaAutosize
                    placeholder="Workout Description"
                    value={workout.description}
                    name='description'
                    onChange={handleChange}
                    style={{ width: '100%', border: 'none', marginTop: '10px', fontSize: '18px', minHeight: '100px', resize: 'vertical' }}
                />
            </Container>
        </>
    );
}

export default TrainerDashboard;
