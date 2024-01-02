import { Menu } from "antd";
import {
    HomeOutlined, 
    UserOutlined, 
    DesktopOutlined, 
    BookOutlined,
    BarsOutlined,
} from "@ant-design/icons"

const MenuList = () => {
    return (
        <Menu theme="dark" mode="inline" className="menu-bar">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                HOME
            </Menu.Item>
            <Menu.Item key="user" icon={<UserOutlined />}>
                USERS
            </Menu.Item>
            <Menu.Item key="device" icon={<DesktopOutlined />}>
                DEVICES
            </Menu.Item>
            <Menu.Item key="bookclass" icon={<BookOutlined />}>
                BOOKCLASS
            </Menu.Item>  
            <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Tasks">
                <Menu.Item key="task-1">Task 1</Menu.Item>
                <Menu.Item key="task-2">Task 2</Menu.Item>
            </Menu.SubMenu>
        </Menu>
        
    )
}
export default MenuList