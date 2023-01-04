import { useState } from "react";
import { Drawer, Button, Layout, Menu } from "antd";
import {
  LeftCircleFilled,
  RightCircleFilled,
  MenuOutlined,
} from "@ant-design/icons";
import Brand from "../assets/images/brand-logo.png";

const { Header } = Layout;
const HeaderTop = (props) => {
  const { collapsed, setCollapsed, screenBreak, items, pathname } = props;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header
        className="shadow-2xl"
        style={{ backgroundColor: "var(--main-bg)", paddingInline: "10px" }}
      >
        {screenBreak ? (
          <>
            {collapsed ? (
              <RightCircleFilled
                className="trigger"
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "30px",
                  border: "0",
                  color: "rgb(101 87 137)",
                }}
              />
            ) : (
              <LeftCircleFilled
                className="trigger"
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "30px",
                  border: "0",
                  color: "rgb(101 87 137)",
                }}
              />
            )}
          </>
        ) : (
          <>
            <div className="flex items-center mt-2">
              <Button
                style={{
                  boxShadow: "0 2px 0 rgb(135 92 156)",
                }}
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
              />

              <img
                className="mx-auto"
                style={{ height: "50px" }}
                src={Brand}
                alt=""
              />
            </div>

            <Drawer
              title="Crypto Tracker"
              placement="left"
              onClick={() => setVisible(false)}
              onClose={() => setVisible(false)}
              bodyStyle={{ padding: "0" }}
              visible={visible}
            >
              <Menu
                theme="dark"
                mode="inline"
                className="menu-container"
                style={{ marginTop: 0 }}
                defaultSelectedKeys={[pathname]}
                selectedKeys={[pathname]}
                items={items}
                onClick={() => setVisible(false)}
              />
            </Drawer>
          </>
        )}
      </Header>
    </>
  );
};

export default HeaderTop;
