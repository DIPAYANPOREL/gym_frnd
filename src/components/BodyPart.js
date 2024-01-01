import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import '../App.css';


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={
                bodyPart === item ? {
                    borderTop: '4px solid #ff2625',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                } : {
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                }
            }
            onClick
        >

            <img src={Icon} alt="Dumbell"
            style={{ width: '40px', height: '40px' }}
            />
            <Typography 
            fontSize="24px" 
            fontWeight="bold"
            color="#3a1212"
            textTransform="capitalize"           
            >
                {item}
            </Typography>
        </Stack >)
};

export default BodyPart