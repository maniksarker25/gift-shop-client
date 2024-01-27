import { Button, Row } from "antd";
import GForm from "../../form/GForm";
import GInput from "../../form/GInput";
import { FieldValues } from "react-hook-form";
import GSelect from "../../form/GSelect";

const AddGiftContainer = () => {
  const handleAddGiftSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Row justify={"center"}>
      <GForm onSubmit={handleAddGiftSubmit}>
        <div className="md:flex gap-4">
          <GInput type={"text"} name={"name"} label={"Name"} />
          <GInput type={"text"} name={"price"} label={"Price"} />
        </div>
        <div className="md:flex gap-4">
          <GInput type={"quantity"} name={"quantity"} label={"Quantity"} />
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
        {/* {errorMessage && (
          <p style={{ color: "red", marginBottom: "7px" }}>{errorMessage}</p>
        )} */}

        <div>
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
      </GForm>
    </Row>
  );
};

export default AddGiftContainer;
