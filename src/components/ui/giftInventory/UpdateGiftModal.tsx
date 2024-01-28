import { useState } from "react";
import { Button, Modal } from "antd";
import GForm from "../../form/GForm";
import { FieldValues } from "react-hook-form";
import GInput from "../../form/GInput";
import GSelect from "../../form/GSelect";
import { TGift } from "./GiftInventoryContainer";
import { useUpdateGiftMutation } from "../../../redux/features/gift/giftApi";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import DuplicateGiftCompo from "./DuplicateGiftCompo";

const UpdateGiftModal = ({ gift }: { gift: TGift }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateGift, { isLoading }] = useUpdateGiftMutation();
  const [makeDuplicate, setMakeDuplicate] = useState(false);
  // default values
  const defaultValues = {
    name: gift.name,
    price: gift.price,
    quantity: gift.quantity,
    occasion: gift.occasion,
    recipient: gift.recipient,
    category: gift.category,
    theme: gift.theme,
    brand: gift.brand,
    color: gift.color,
  };

  // console.log("add sale", data, isLoading, isError);

  const showModal = () => {
    setMakeDuplicate(false);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setMakeDuplicate(false);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setMakeDuplicate(false);
    setIsModalOpen(false);
  };

  // handle sell
  const handleUpdateGift = async (data: FieldValues) => {
    const updatedGiftInfo = {
      name: data.name,
      price: parseInt(data.price),
      quantity: parseInt(data.quantity),
      occasion: data.occasion,
      recipient: data.recipient,
      category: data.category,
      theme: data.theme,
      brand: data.brand,
      color: data.color,
    };
    const options = {
      id: gift?._id,
      data: updatedGiftInfo,
    };
    const res = await updateGift(options).unwrap();

    if (res.success) {
      toast.success("Gift updated successfully");
      handleCancel();
    } else {
      toast.error("Something went wrong");
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {" "}
      <Button onClick={showModal}>Duplicate & Edit</Button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={""}
        width={"800px"}
      >
        {makeDuplicate ? (
          <DuplicateGiftCompo
            defaultValues={defaultValues}
            setIsModalOpen={setIsModalOpen}
          />
        ) : (
          <div>
            <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
              Make update your product
            </h2>
            <GForm onSubmit={handleUpdateGift} defaultValues={defaultValues}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <div className="md:flex gap-4">
                    <GInput type={"text"} name={"name"} label={"Name"} />
                    <GInput
                      type={"number"}
                      name={"price"}
                      label={"Price (BDT)"}
                    />
                  </div>
                  <div className="md:flex gap-4">
                    <GInput
                      type={"number"}
                      name={"quantity"}
                      label={"Quantity"}
                    />
                    <GSelect
                      name="occasion"
                      label="Occasion"
                      options={[
                        { value: "Birthday", label: "Birthday" },
                        { value: "Anniversary", label: "Anniversary" },
                        { value: "Holiday", label: "Holiday" },
                      ]}
                    />
                  </div>
                  <div className="md:flex gap-4">
                    <GInput
                      type={"text"}
                      name={"recipient"}
                      label={"Recipient"}
                    />
                    <GSelect
                      name="category"
                      label="Category"
                      options={[
                        { value: "Home decor", label: "Home decor" },
                        { value: "Gadget", label: "Gadget" },
                        { value: "Accessories", label: "Accessories" },
                      ]}
                    />
                  </div>
                  <div className="md:flex gap-4">
                    <GSelect
                      name="theme"
                      label="Theme"
                      options={[
                        { value: "Vintage", label: "Vintage" },
                        { value: "Romantic", label: "Romantic" },
                        { value: "Modern", label: "Modern" },
                      ]}
                    />
                    <GSelect
                      name="brand"
                      label="Brand"
                      options={[
                        { value: "GiftCraft", label: "GiftCraft" },
                        { value: "JoyFusion", label: "JoyFusion" },
                        { value: "ElegantGiftery", label: "ElegantGiftery" },
                      ]}
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <GInput type={"text"} name={"color"} label={"Color"} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      style={{
                        backgroundColor: "#1677FF",
                        color: "white",
                      }}
                      htmlType="submit"
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </GForm>
            <Button
              onClick={() => setMakeDuplicate(!makeDuplicate)}
              style={{
                backgroundColor: "#1677FF",
                color: "white",
              }}
            >
              Make Duplicate
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UpdateGiftModal;
