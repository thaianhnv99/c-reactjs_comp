import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

const TableBasic = () => {
    return ( <>
    <TableContainer component={Paper} square>
        <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2}>A</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>C</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableCell component="th" scope="row">
                Name
              </TableCell>
                <TableCell>ValueA</TableCell>
                <TableCell>ValueB</TableCell>
                <TableCell>ValueC</TableCell>
            </TableBody>
        </Table>
    </TableContainer>
    </> );
}
 
export default TableBasic;