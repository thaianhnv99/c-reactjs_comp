import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { useEffect, useState } from "react";

interface ColumnProps<Item> {
    field: keyof Item,
    headerName: string,
    groupBy?: string,
    [key: string]: any
}

interface TableBasicProps<Item> {
    columns: ColumnProps<Item>[],
    rows: Item[]
}
const TableBasic = <Item,>({ columns, rows }: TableBasicProps<Item>) => {
    const [columnGroup, setColumnGroup] = useState([]);
    useEffect(() => {
        if (columns) {
            //Map columns
            const group = columns.reduce((result, currentValue) => {
                if (currentValue?.groupBy) {
                    return (result[currentValue?.groupBy] = result[currentValue?.groupBy] || []).push(currentValue)
                }

                return result;
            }, {});

            console.log('1111111111111', group);

        }
    }, [columns])
    return (<>
        <TableContainer component={Paper} square>
            <Table stickyHeader sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((item, index) => {
                                return <TableCell key={index}>{item.headerName}</TableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((item, index) => {
                            return <TableRow>
                                {columns.map(col => {
                                    return <TableCell key={index}>
                                        {item[col.field] as string}
                                    </TableCell>
                                })}
                            </TableRow>
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
}

export default TableBasic;