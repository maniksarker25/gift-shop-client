import { useState } from "react";
import { Button, Modal } from "antd";
import GForm from "../../form/GForm";
import GInput from "../../form/GInput";
import { FieldValues } from "react-hook-form";
import GDatePicker from "../../form/GDatePicker";
import { useAddSaleMutation } from "../../../redux/features/sale/saleApi";
import toast from "react-hot-toast";
import Loader from "../loader/Loader";
import { ApiError } from "../../../types/responseType";
// import Swal from "sweetalert2";
// import { saveAs } from "file-saver";
// import generatePDFData from "../../../utils/generatePdf";

const SaleModal = ({ giftId }: { giftId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addSale, { isLoading }] = useAddSaleMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // handle sell
  const handleSellSubmit = async (data: FieldValues) => {
    try {
      const saleInfo = {
        giftId: giftId,
        quantity: parseInt(data.quantity),
        buyerName: data.buyerName,
        coupon: data.coupon,
        date: data.date,
      };
      const res = await addSale(saleInfo).unwrap();
      if (res.success) {
        toast.success("Gift sale successfully");
        setIsModalOpen(false);
      }
    } catch (err) {
      const apiError = err as ApiError;
      console.log(apiError);
      toast.error(apiError?.data?.errorMessage);
    }
  };
  // const handleSellSubmit = async (data: FieldValues) => {
  //   try {
  //     const saleInfo = {
  //       giftId: giftId,
  //       quantity: parseInt(data.quantity),
  //       buyerName: data.buyerName,
  //       date: data.date,
  //     };
  //     const res = await addSale(saleInfo).unwrap();
  //     if (res.success) {
  //       Swal.fire({
  //         title: "Download PDF?",
  //         text: "Do you want to download the PDF for selling information?",
  //         icon: "question",
  //         showCancelButton: true,
  //         confirmButtonText: "Yes",
  //         cancelButtonText: "No",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           // Logic for downloading PDF
  //           // You need to implement this part according to your PDF generation logic
  //           const pdfData = generatePDFData(saleInfo); // You need to implement generatePDFData function
  //           const pdfBlob = new Blob([pdfData], { type: "application/pdf" });
  //           saveAs(pdfBlob, "sale_information.pdf");
  //         }
  //       });
  //       toast.success("Gift sale successfully");
  //       setIsModalOpen(false);
  //     }
  //   } catch (err) {
  //     const apiError = err as ApiError;
  //     console.log(apiError);
  //     toast.error(apiError?.data?.errorMessage);
  //   }
  // };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {" "}
      <Button
        // style={{ backgroundColor: "#1677FF", color: "white" }}
        onClick={showModal}
      >
        Sale
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={""}
      >
        <GForm onSubmit={handleSellSubmit}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <GInput type={"number"} name={"quantity"} label={"Quantity"} />
              <GInput type={"text"} name={"buyerName"} label={"Buyer Name"} />
              <GDatePicker name="date" label="Select Date" />
              <GInput
                type={"text"}
                name={"coupon"}
                label={"Add Coupon For Discount"}
                notRequired={true}
              />
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button htmlType="submit">Sale</Button>
              </div>
            </div>
          </div>
        </GForm>
      </Modal>
    </div>
  );
};

export default SaleModal;
