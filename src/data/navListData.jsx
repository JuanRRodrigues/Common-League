import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';



const navListData = [
    {
        id: 1,
        target: 'Home',
        name: 'Home',
        icons: <HomeIcon/>,
        active: true,
    },
    {
        id:2,
        target: 'cartegories',
        name: 'Categories',
        icon: 'bi-window-stack',
        active: false,
    },
    {
        id: 3,
        target: 'library',
        name: 'My Library',
        icon: 'bi-bag',
        active: false,
    },
    {
        id: 4,
        target: 'bag',
        name: 'My Bag',
        icon: 'bi-bag',
        active: false,
    },
];

export default navListData;






