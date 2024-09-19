import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export default function NavBar() {
    const LinksToLabels = {
        '/': 'Home',
        '/about': 'About',
        '/cart': 'Cart',
    }
    return (
        <Drawer 
            variant='permanent'
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
            </List>
        </Drawer>
    )
}