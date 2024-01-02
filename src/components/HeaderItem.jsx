import {
    BellOutlined,
    LoginOutlined,
    SettingOutlined,

} from "@ant-design/icons";
const HeaderItem = () => {
    return (
        <div className="header-container">
            <div className="header-item">
                <div className="header-setting">{<SettingOutlined />}</div>
                <div className="header-notification">{<BellOutlined />}</div>
                <div className="header-login">{<LoginOutlined />}</div>
            </div>
        </div>
    );
}
export default HeaderItem