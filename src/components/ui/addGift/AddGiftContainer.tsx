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
        <div style={{ display: "flex", gap: "8px" }}>
          <GInput type={"text"} name={"name"} label={"Name"} />
          <GInput type={"text"} name={"price"} label={"Price"} />
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <GInput type={"quantity"} name={"quantity"} label={"Quantity"} />
          <GSelect
            name="category"
            label="Category"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
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
