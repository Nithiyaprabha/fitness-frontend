// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Trainee.css';

// const TraineeDashboard = () => {
//   const [videos, setVideos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const [likedVideos, setLikedVideos] = useState([]);
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [bmi, setBMI] = useState(null);
//   const [suggestedVideos, setSuggestedVideos] = useState([]);
//   const [suggestedTrainers, setSuggestedTrainers] = useState([]);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('/api/videos');
//       setVideos(response.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const calculateBMI = () => {
//     const heightInMeters = height / 100; // Convert height from cm to meters
//     const bmiValue = weight / (heightInMeters * heightInMeters);
//     setBMI(bmiValue);

//     // Suggest videos and trainers based on BMI
//     if (bmiValue < 18.5) {
//       suggestWeightGain();
//     } else if (bmiValue >= 25) {
//       suggestWeightLoss();
//     }
//   };

//   const suggestWeightGain = async () => {
//     try {
//       const response = await axios.get('/api/suggest-weight-gain');
//       setSuggestedVideos(response.data.videos);
//       setSuggestedTrainers(response.data.trainers);
//     } catch (error) {
//       console.error('Error suggesting weight gain:', error);
//     }
//   };

//   const suggestWeightLoss = async () => {
//     try {
//       const response = await axios.get('/api/suggest-weight-loss');
//       setSuggestedVideos(response.data.videos);
//       setSuggestedTrainers(response.data.trainers);
//     } catch (error) {
//       console.error('Error suggesting weight loss:', error);
//     }
//   };

//   const handleSearch = () => {
//     // Filter videos based on search term
//     const filteredVideos = videos.filter(video =>
//       video.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setVideos(filteredVideos);
//   };

//   const handlePlay = (video) => {
//     setPlayingVideo(video);
//   };

//   const handlePause = () => {
//     setPlayingVideo(null);
//   };

//   const handleLike = (video) => {
//     // Toggle like status
//     const liked = likedVideos.includes(video.id);
//     if (liked) {
//       setLikedVideos(likedVideos.filter(id => id !== video.id));
//     } else {
//       setLikedVideos([...likedVideos, video.id]);
//     }
//   };

//   return (
//     <div>
//       <h2>Trainee Dashboard</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Search for videos"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         <h3>Enter Details to Calculate BMI</h3>
//         <div>
//           <label>Height (cm):</label>
//           <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//         </div>
//         <div>
//           <label>Weight (kg):</label>
//           <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//         </div>
//         <button onClick={calculateBMI}>Calculate BMI</button>
//         {bmi && <p>BMI: {bmi}</p>}
//       </div>
//       <div>
//         <h3>Suggested Videos</h3>
//         <ul>
//           {suggestedVideos.map(video => (
//             <li key={video.id}>
//               <h4>{video.title}</h4>
//               <video width="320" height="240" controls>
//                 <source src={video.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button onClick={() => handlePlay(video)}>Play</button>
//               <button onClick={handlePause}>Pause</button>
//               <button onClick={() => handleLike(video)}>
//                 {likedVideos.includes(video.id) ? 'Unlike' : 'Like'}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {playingVideo && (
//         <div>
//           <h3>Currently Playing</h3>
//           <video width="320" height="240" controls autoPlay>
//             <source src={playingVideo.url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TraineeDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trainee.css'; // Import the CSS file

const TraineeDashboard = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [likedVideos, setLikedVideos] = useState([]);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [suggestedTrainers, setSuggestedTrainers] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);

    // Suggest videos and trainers based on BMI
    if (bmiValue < 18.5) {
      suggestWeightGain();
    } else if (bmiValue >= 25) {
      suggestWeightLoss();
    }
  };

  const suggestWeightGain = async () => {
    try {
      const response = await axios.get('/api/suggest-weight-gain');
      setSuggestedVideos(response.data.videos);
      setSuggestedTrainers(response.data.trainers);
    } catch (error) {
      console.error('Error suggesting weight gain:', error);
    }
  };

  const suggestWeightLoss = async () => {
    try {
      const response = await axios.get('/api/suggest-weight-loss');
      setSuggestedVideos(response.data.videos);
      setSuggestedTrainers(response.data.trainers);
    } catch (error) {
      console.error('Error suggesting weight loss:', error);
    }
  };

  const handleSearch = () => {
    // Filter videos based on search term
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  const handlePlay = (video) => {
    setPlayingVideo(video);
  };

  const handlePause = () => {
    setPlayingVideo(null);
  };

  const handleLike = (video) => {
    // Toggle like status
    const liked = likedVideos.includes(video.id);
    if (liked) {
      setLikedVideos(likedVideos.filter(id => id !== video.id));
    } else {
      setLikedVideos([...likedVideos, video.id]);
    }
  };

  return (
    <div className="trainee-dashboard">
      {/* <h2>Trainee Dashboard</h2> */}
      <div className="search-form">
        <input
          type="text"
          placeholder="Search for videos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="bmi-form">
        <h3>Enter Details to Calculate BMI</h3>
        <div className="bmi-input">
          <label>Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="bmi-input">
          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>BMI: {bmi}</p>}
      </div>
      <div className="suggested-videos">
        <h3>Suggested Videos</h3>
        <ul>
          {suggestedVideos.map(video => (
            <li key={video.id}>
              <h4>{video.title}</h4>
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button onClick={() => handlePlay(video)}>Play</button>
              <button onClick={handlePause}>Pause</button>
              <button onClick={() => handleLike(video)}>
                {likedVideos.includes(video.id) ? 'Unlike' : 'Like'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {playingVideo && (
        <div className="currently-playing">
          <h3>Currently Playing</h3>
          <video width="320" height="240" controls autoPlay>
            <source src={playingVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default TraineeDashboard;
