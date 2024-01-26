import { Button, Layout, Menu, MenuProps } from "antd";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
  },
  {
    key: "2",
    label: "Gift Inventory",
  },
  {
    key: "3",
    label: "Sales History",
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
            <h1>The main content should show here</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
