import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { useEffect, useState } from "react";

interface ColumnProps<Item> {
  field?: string;
  headerName: string;
  section?: string;
  column?: ColumnProps<Item>[];
}
interface TableBasicProps<Item> {
  columns: ColumnProps<Item>[];
  rows: Item[];
}
const TableBasic = <Item,>({ columns, rows }: TableBasicProps<Item>) => {
  const [columnGroup, setColumnGroup] = useState<ColumnProps<Item>[]>([]);
  useEffect(() => {
    if (columns) {
      const data = columns.flatMap((item, index) => {
        if (item.column?.length) {
          return item.column.map((col) => ({ ...col, section: item.section }));
        }
        return [item];
      });
      console.log(data);

      setColumnGroup(data);
    }
  }, [columns]);

  return (
    <>
      <TableContainer component={Paper} square>
        <Table stickyHeader sx={{ minWidth: 650 }}>
          <TableHead>
            {columns?.length && (
              <TableRow>
                {columns.map((item, index) => {
                  return (
                    <TableCell
                      colSpan={item?.column?.length ?? -1}
                      rowSpan={item?.column?.length ? -1 : 2}
                      key={index}
                    >
                      {item.section ?? item.headerName}
                    </TableCell>
                  );
                })}
              </TableRow>
            )}
            <TableRow>
              {columnGroup.map((item, index) => {
                return item?.section ? (
                  <TableCell key={index}>{item.headerName}</TableCell>
                ) : null;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item: any, index) => {
              return (
                <TableRow key={index}>
                  {columnGroup.map((col, i) => {
                    return (
                      <TableCell key={i}>
                        {col?.field ? item[col?.field] : ""}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableBasic;
