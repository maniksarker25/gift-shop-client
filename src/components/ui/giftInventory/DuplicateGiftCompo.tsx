import GSelect from "../../form/GSelect";
import GInput from "../../form/GInput";
import { Button } from "antd";
import GForm from "../../form/GForm";
import { FieldValues } from "react-hook-form";
import { useAddGiftMutation } from "../../../redux/features/gift/giftApi";
import toast from "react-hot-toast";
import { ApiError } from "../../../types/responseType";
import Loader from "../loader/Loader";
type TDefaultValues = {
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
const DuplicateGiftCompo = ({
  defaultValues,
  setIsModalOpen,
}: {
  defaultValues: TDefaultValues;
  setIsModalOpen: any;
}) => {
  const [addGift, { isLoading }] = useAddGiftMutation();
  // handle duplicate
  const handleDuplicateGift = async (data: FieldValues) => {
    try {
      const giftInfo = {
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
      const res = await addGift(giftInfo).unwrap();
      if (res?.success) {
        toast.success("Gift duplicate successfully");
        setIsModalOpen(false);
      }
    } catch (err) {
      const apiError = err as ApiError;
      toast.error(apiError?.data?.errorMessage);
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
        Make duplicate your product with some changes
      </h2>
      <GForm onSubmit={handleDuplicateGift} defaultValues={defaultValues}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <div className="md:flex gap-4">
              <GInput type={"text"} name={"name"} label={"Name"} />
              <GInput type={"number"} name={"price"} label={"Price"} />
            </div>
            <div className="md:flex gap-4">
              <GInput type={"number"} name={"quantity"} label={"Quantity"} />
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
              <GInput type={"text"} name={"recipient"} label={"Recipient"} />
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
                Submit
              </Button>
            </div>
          </div>
        </div>
      </GForm>
    </div>
  );
};

export default DuplicateGiftCompo;
