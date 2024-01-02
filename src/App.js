import { Breadcrumb, Layout, Menu, Theme } from "antd";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import BreadcrumbItem from "./components/BreadcrumbItem";
import ContentItem from "./components/ContentItem";
import HeaderItem from "./components/HeaderItem";

const {Header, Content, Footer, Sider} = Layout

const App = () => {
  return (
    <Layout className="layout-container">
      <Sider className="sidebar">
        <Logo /> 
        <MenuList />
      </Sider>
      <Layout>
        <Header className="header">
          <HeaderItem />
        </Header>
        <Content className="content">
          <BreadcrumbItem />
          <ContentItem />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}
export default App