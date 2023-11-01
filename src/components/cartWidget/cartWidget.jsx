import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CartWidget = () => {
  return (
    <>
      <card>
        <Badge count={100}>
          <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
        </Badge>
      </card>
    </>
  );
};

export default CartWidget;
