import { Card } from "antd";
import { useGetGiftsQuery } from "../../../redux/features/gift/giftApi";
import Loader from "../loader/Loader";
import SaleModal from "./SeleModal";

type TGift = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  occasion: string;
  recipient: string;
  category: string;
  theme: string;
  brand: string;
  color: string;
};
const GiftInventoryContainer = () => {
  const { data, isLoading } = useGetGiftsQuery(undefined);
  // console.log(isLoading);
  // console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  // for modal

  return (
    <div>
      <div>
        {/* <Row gutter={[16, 16]} justify="space-between"> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            justifyContent: "center",
            gap: "16px",
          }}
        >
          {data?.data?.map((gift: TGift, index: number) => (
            <Card
              key={index}
              title={gift?.name}
              bordered={false}
              style={{ width: 300 }}
            >
              <p>Price : {gift?.price}</p>
              <p>Quantity : {gift?.quantity}</p>
              <p>Occasion : {gift?.occasion}</p>
              <p>Recipient : {gift?.recipient}</p>
              <p>Category : {gift?.category}</p>
              <p>Theme : {gift?.theme}</p>
              <p>Brand : {gift?.brand}</p>
              <p>Color : {gift?.color}</p>
              <div style={{ display: "flex", justifyContent: "end" }}>
                {/* <Button>Sell</Button> */}
              </div>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <SaleModal giftId={gift._id} />
              </div>
            </Card>
          ))}
          {/* </Row> */}
        </div>
      </div>
    </div>
  );
};

export default GiftInventoryContainer;
