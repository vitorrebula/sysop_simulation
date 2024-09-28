import { LuBarChart3 } from "react-icons/lu";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import useNavbar from './Navbar.hook';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Add Jobs',
        key: 'addjobs',
        icon: <MdOutlinePlaylistAdd />,
    },
    {
        label: 'See results',
        key: 'results',
        icon: <LuBarChart3 />,
    },
];

function Navbar() {
    const { current, onClick } = useNavbar();

    return <Menu data-testid='navbar' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ justifyContent: 'center' }} />
}

export default Navbar;