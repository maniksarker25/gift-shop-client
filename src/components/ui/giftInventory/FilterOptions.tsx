import { Select } from "antd";
import { Option } from "antd/es/mentions";
type TFilters = {
  category: string;
  theme: string;
  occasion: string;
  brand: string;
};
const FilterOptions = ({
  filters,
  handleFilterChange,
}: {
  filters: TFilters;
  handleFilterChange: any;
}) => {
  return (
    <div>
      <Select
        style={{ width: 200, marginRight: "7px", marginBottom: "7px" }}
        placeholder="Select Category"
        onChange={(value) => handleFilterChange("category", value)}
        value={filters.category || undefined}
        allowClear
      >
        <Option value="Home decor">Home decor</Option>
        <Option value="Gadget">Gadget</Option>
        <Option value="Accessories">Accessories</Option>
      </Select>

      <Select
        style={{ width: 200, marginRight: "7px", marginBottom: "7px" }}
        placeholder="Select Theme"
        onChange={(value) => handleFilterChange("theme", value)}
        value={filters.theme || undefined}
        allowClear
      >
        <Option value="Vintage">Vintage</Option>
        <Option value="Romantic">Romantic</Option>
        <Option value="Modern">Modern</Option>
      </Select>

      <Select
        style={{ width: 200, marginRight: "7px", marginBottom: "7px" }}
        placeholder="Select Occasion"
        onChange={(value) => handleFilterChange("occasion", value)}
        value={filters.occasion || undefined}
        allowClear
      >
        <Option value="Birthday">Birthday</Option>
        <Option value="Anniversary">Anniversary</Option>
        <Option value="Holiday">Holiday</Option>
      </Select>
      <Select
        style={{ width: 200, marginRight: "7px", marginBottom: "7px" }}
        placeholder="Select Brand"
        onChange={(value) => handleFilterChange("brand", value)}
        value={filters.brand || undefined}
        allowClear
      >
        <Option value="GiftCraft">GiftCraft</Option>
        <Option value="JoyFusion">JoyFusion</Option>
        <Option value="ElegantGiftery">ElegantGiftery</Option>
      </Select>
    </div>
  );
};

export default FilterOptions;
