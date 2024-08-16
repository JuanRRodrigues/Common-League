import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import homeIcon from '../../public/icones/home.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';




const navListData = [
    {
        id: 1,
        target: 'Home',
        name: 'Home',
        icon: 'bi bi-house-door',
        active: true,
    },
    {
        id:2,
        target: 'Championships',
        name: 'Championships',
        icon: 'bi bi-trophy',
        active: false,
    },
    {
        id: 3,
        target: 'Team',
        name: 'Team',
        icon: 'bi bi-people',
        active: false,
    },
    {
        id: 4,
        target: 'Perfil',
        name: 'Perfil',
        icon: 'bi bi-person-badge',
        active: false,
    },
];

export default navListData;






