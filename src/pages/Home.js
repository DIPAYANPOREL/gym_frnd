import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setexercises] = useState([]);

    return (
        <Box>
            <HeroBanner />
            <SearchExercise
                setexercises={setexercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                exercises={exercises}
                setexercises={setexercises}
                bodyPart={bodyPart}
            />
        </Box>
    )
};

export default Home;