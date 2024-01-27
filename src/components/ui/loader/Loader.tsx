import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </div>
  );
};

export default Loader;
