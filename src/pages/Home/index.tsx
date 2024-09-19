import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CourseSearch from '../../components/CourseSearch';
import { useEffect } from 'react';

export default function Home(){
    useEffect(() => {
        document.title = 'Course Search'
    }, [])
    return (
        <Box>
            <Typography variant='h1'>Course Search</Typography>
            <CourseSearch />
        </Box>
    )
}