import moment from "moment";

type TSale = {
  giftId: {
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
  quantity: number;
  buyerName: string;
  date: Date;
};

const SaleHistoryTable = ({ data }: { data: TSale[] }) => {
  return (
    <div>
      {" "}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-1 border-b">Gift Name</th>
            <th className="py-2 px-1 border-b">Quantity</th>
            <th className="py-2 px-1 border-b">Price</th>
            <th className="py-2 px-1 border-b">Sale Date</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.map((item, index: number) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item?.giftId?.name}</td>
              <td className="py-2 px-4 border-b">{item?.quantity}</td>
              <td className="py-2 px-4 border-b">{item?.giftId?.price}</td>
              <td className="py-2 px-4 border-b">
                {moment(item?.date).format("DD/MM/YYYY")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleHistoryTable;
