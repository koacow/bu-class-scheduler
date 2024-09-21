import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import { DarkModeContext } from '../../App';

export default function NavBar() {
    const LinksToLabels = {
        '/': 'Home',
        '/about': 'About',
        '/cart': 'Cart',
    }

    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    return (
        <Drawer 
            variant='permanent'
            sx={{
                bgcolor: 'primary.main',
            }}
        >
            <List>
                <ListItem>
                    <Typography variant="h6">
                        BU Course Schedule Generator
                    </Typography>
                </ListItem>
                {Object.entries(LinksToLabels).map(([link, label]) => (
                    <ListItem key={link}>
                        <Link href={link} >{label}</Link>
                    </ListItem>
                ))}
                <ListItem>
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </ListItem>
            </List>
        </Drawer>
    )
}