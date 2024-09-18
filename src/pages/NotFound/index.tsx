import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    
    return (
        <Box>
            <Typography variant="h1">Oops, the page you were looking for does not exist.</Typography>
            <Button onClick={() => navigate('/')}>Go Home</Button>
        </Box>
    )
}