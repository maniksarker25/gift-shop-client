import { useGetSalesQuery } from "../../../redux/features/sale/saleApi";
import SaleHistoryTable from "./SaleHistoryTable";

const SaleContainer = () => {
  const { data, isLoading } = useGetSalesQuery(undefined);
  console.log(isLoading, data);
  return (
    <div>
      <SaleHistoryTable data={data?.data} />
    </div>
  );
};

export default SaleContainer;
