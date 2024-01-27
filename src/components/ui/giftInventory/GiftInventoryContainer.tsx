import { Card } from "antd";
import { useGetGiftsQuery } from "../../../redux/features/gift/giftApi";
const GiftInventoryContainer = () => {
  const { data, isLoading } = useGetGiftsQuery(undefined);
  console.log(isLoading);
  console.log(data);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div>
        {/* <Row gutter={[16, 16]} justify="space-between"> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {data?.data?.map((gift, index) => (
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
            </Card>
          ))}
          {/* </Row> */}
        </div>
      </div>
    </div>
  );
};

export default GiftInventoryContainer;
