import { Layout, Menu } from "antd";
import Brand from "../assets/images/brand-logo.png";

const { Sider } = Layout;

const Sidebar = (props) => {
  const { collapsed, items, screenBreak, pathname } = props;

  // console.log(screens);
  return (
    <>
      <Sider
        style={{
          backgroundColor: "var(--main-bg)",
          borderRight: "2px solid var(--border)",
        }}
        // trigger={null}
        collapsedWidth={screenBreak ? 80 : 0}
        collapsed={collapsed}
      >
        <div className="flex justify-start items-center  py-2">
          <img src={Brand} alt="" />
          {!collapsed && (
            <p className="brand-name text-white font-semibold text-sm">
              Crypto Tracker
            </p>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          className="menu-container"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          items={items}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
