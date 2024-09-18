import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
export default function About() {
    return (
        <Box>
            <Typography variant="h1">BU Course Schedule Generator</Typography>
            <Typography variant='h2'>
                Course schedule generator for Boston University students. Unaffiliated with Boston University.
            </Typography>
            <Typography variant="h3">
                Search for your classes, add them to your schedule, hit "Build" and let us take care of the rest.
                We will generate all possible schedules for you, so you can choose the one that fits you best.
            </Typography>
            <Box>
                <Link href='/'>
                    <Button variant='contained'>Get Started</Button>
                </Link>
                <Link href='/'>
                    <Button variant='outlined'>Source Code</Button>
                </Link>
            </Box>
        </Box>
    )
}