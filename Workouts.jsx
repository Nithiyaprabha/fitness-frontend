// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const WorkoutsPage = ({ trainerId }) => {
//   const [workouts, setWorkouts] = useState([]);
//   const [formData, setFormData] = useState({
//     picture: '',
//     description: ''
//   });

//   useEffect(() => {
//     fetchWorkouts();
//   }, []);

//   const fetchWorkouts = async () => {
//     try {
//       const response = await axios.get(`/api/workouts/${trainerId}`);
//       setWorkouts(response.data);
//     } catch (error) {
//       console.error('Error fetching workouts:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUploadWorkout = async () => {
//     try {
//       await axios.post('/api/workouts', formData);
//       fetchWorkouts();
//       setFormData({
//         picture: '',
//         description: ''
//       });
//     } catch (error) {
//       console.error('Error uploading workout:', error);
//     }
//   };

//   const handleEditWorkout = async (id, newData) => {
//     try {
//       await axios.put(`/api/workouts/${id}`, newData);
//       fetchWorkouts();
//     } catch (error) {
//       console.error('Error editing workout:', error);
//     }
//   };

//   const handleDeleteWorkout = async (id) => {
//     try {
//       await axios.delete(`/api/workouts/${id}`);
//       fetchWorkouts();
//     } catch (error) {
//       console.error('Error deleting workout:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Workouts</h2>
//       <div>
//         <input type="text" name="picture" value={formData.picture} onChange={handleInputChange} placeholder="Picture URL" />
//         <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
//         <button onClick={handleUploadWorkout}>Upload Workout</button>
//       </div>
//       <ul>
//         {workouts.map(workout => (
//           <li key={workout.id}>
//             <img src={workout.picture} alt="Workout" />
//             <p>{workout.description}</p>
//             <div>
//               <input type="text" name="picture" defaultValue={workout.picture} />
//               <input type="text" name="description" defaultValue={workout.description} />
//               <button onClick={() => handleEditWorkout(workout.id, {
//                 picture: document.querySelector(`input[name='picture']`).value,
//                 description: document.querySelector(`input[name='description']`).value
//               })}>Edit</button>
//               <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WorkoutsPage;
import React, { useState } from 'react';
import { styled, Box, Button, InputBase, Select, MenuItem } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const AddWorkout = ({ trainerId }) => {
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
    console.log(trainerId);

    const saveWorkout = async () => {
        const formData = new FormData();
        formData.append('trainerId', trainerId);
        formData.append('workoutName', workout.workoutName);
        formData.append('description', workout.description);
        formData.append('category', workout.category);
        formData.append('image', workout.image);

        try {
            const response = await fetch('https://fitnessbackend-3.onrender.com/api/workouts', {
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
            <Navbar/>
            <Container>
                <ToastContainer autoClose={2000} />
                <br/><br/><br/><br/>
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
    )
}

export default AddWorkout;
