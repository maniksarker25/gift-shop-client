import { Button } from "antd";
import jsPDF from "jspdf";
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
  totalPrice: number;
  buyerName: string;
  discountPercentage?: number;
  date: Date;
};

const SaleHistoryTable = ({ data }: { data: TSale[] }) => {
  // const downloadPdf = (item) => {
  //   console.log(item);
  // };
  const downloadPdf = (item: TSale) => {
    const doc = new jsPDF({
      orientation: "portrait", // or "landscape"
      unit: "mm", // units: mm, cm, in, px
      format: [150, 210], // width and height in mm
    });

    // Add content to the PDF
    doc.text("Selling Invoice", 55, 10);
    doc.text(`Gift Name: ${item.giftId.name}`, 10, 20);
    doc.text(`Quantity: ${item.quantity}`, 10, 30);
    doc.text(`Price: ${item.giftId.price}`, 10, 40);
    doc.text(
      `Discount: ${
        item?.discountPercentage
          ? item?.discountPercentage + "%"
          : "Not Available"
      }`,
      10,
      50
    );
    doc.text(`Total Price: ${item.totalPrice}`, 10, 60);
    doc.text(`Sale Date: ${moment(item.date).format("DD/MM/YYYY")}`, 10, 70);

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <div className="min-w-full w-11/12 bg-white  overflow-scroll">
      {" "}
      <table className="min-w-full w-11/12 bg-white border border-gray-300 overflow-scroll">
        <thead>
          <tr>
            <th className="py-2 px-1 border-b">Gift Name</th>
            <th className="py-2 px-1 border-b">Quantity</th>
            <th className="py-2 px-1 border-b">Price</th>
            <th className="py-2 px-1 border-b">Discount</th>
            <th className="py-2 px-1 border-b">Total Price</th>
            <th className="py-2 px-1 border-b">Sale Date</th>
            <th className="py-2 px-1 border-b">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.map((item, index: number) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item?.giftId?.name}</td>
              <td className="py-2 px-4 border-b">{item?.quantity}</td>
              <td className="py-2 px-4 border-b">{item?.giftId?.price}</td>
              {/* <td className="py-2 px-4 border-b">{item?.giftId?.price}</td> */}
              <td className="py-2 px-4 border-b">
                {item?.discountPercentage
                  ? item?.discountPercentage + "%"
                  : "Not Available"}
              </td>
              <td className="py-2 px-4 border-b">
                {moment(item?.date).format("DD/MM/YYYY")}
              </td>
              <td className="py-2 px-4 border-b ">
                <Button onClick={() => downloadPdf(item)}>
                  Download Invoice
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleHistoryTable;
