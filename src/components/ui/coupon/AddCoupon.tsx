import { Button, Modal } from "antd";
import { useState } from "react";
import GForm from "../../form/GForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import GInput from "../../form/GInput";
import GDatePicker from "../../form/GDatePicker";
import { useCreateCouponMutation } from "../../../redux/features/coupon/coupon.api";
import toast from "react-hot-toast";
import { ApiError } from "../../../types/responseType";
const AddCoupon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createCoupon] = useCreateCouponMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const couponInfo = {
      event: data.event,
      coupon: data.coupon,
      discountPercentage: Number(data.discountPercentage),
      expireDate: data.expireDate,
    };
    try {
      const res = await createCoupon(couponInfo).unwrap();
      if (res.success) {
        toast.success("Coupon created successfully");
        setIsModalOpen(false);
      }
    } catch (err) {
      const apiError = err as ApiError;
      console.log(apiError);
      toast.error(apiError?.data?.errorMessage);
    }
  };
  return (
    <div>
      <Button
        style={{ backgroundColor: "#1677FF", color: "white" }}
        onClick={showModal}
      >
        Add Coupon
      </Button>
      <Modal
        title="Add Coupon"
        open={isModalOpen}
        onCancel={handleCancel}
        footer=""
      >
        <GForm onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <GInput type={"text"} name={"event"} label={"Event"} />
              <GInput type={"text"} name={"coupon"} label={"Coupon"} />
              <GInput
                type={"number"}
                name={"discountPercentage"}
                label={"Discount Percentage"}
              />
              <GDatePicker name="expireDate" label="Select Expire Date" />

              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button htmlType="submit">Submit</Button>
              </div>
            </div>
          </div>
        </GForm>
      </Modal>
    </div>
  );
};

export default AddCoupon;
