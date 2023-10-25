import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartWidget = () => {
  return (
    <>
      <Badge count={12}>
        <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
      </Badge>
    </>
  );
};

export default CartWidget;
