import { Table } from "rsuite";

const CustomHeaderCell = ({ ...props }) => {
  return (
    <>
      <Table.HeaderCell {...props} />
    </>
  );
};
export default CustomHeaderCell;
