import Box from '@mui/material/Box';

const TableNativeDebug = () => {
  return (
    <Box
      sx={{
        '& table, td, th': {
          border: '1px solid',
        },
        '& th': {
          whiteSpace: 'nowrap',
        },
        overflow: 'auto',
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th>결제ID</th>
            <th>요기요ID</th>
            <th>customer ID</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
            <th>휴대폰번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default TableNativeDebug;
