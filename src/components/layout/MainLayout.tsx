import { Button, Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <NavLink to={"gift-inventory"}>Gift Inventory</NavLink>,
  },
  {
    key: "2",
    label: <NavLink to={"add-gift"}>Add Gift</NavLink>,
  },
  {
    key: "3",
    label: <NavLink to={"sale-history"}>Sale History</NavLink>,
  },
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Gift Management</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              justifyItems: "center",
              marginTop: "15px",
              marginRight: "5px",
            }}
          >
            <Button>Logout</Button>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
