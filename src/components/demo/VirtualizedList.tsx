import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, type FixedSizeListProps, type ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style, data } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      {/* <ListItemButton> */}
      <ListItemText primary={data[index]} />
      {/* </ListItemButton> */}
    </ListItem>
  );
}

interface VirtualizedListProps<T> {
  listProps?: Partial<FixedSizeListProps>;
  data: T[];
}
const VirtualizedList = <T,>({ data, listProps }: VirtualizedListProps<T>) => {
  return (
    <FixedSizeList
      height={400}
      width={360}
      itemSize={48}
      itemCount={data.length}
      overscanCount={5}
      itemData={data}
      {...listProps}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export default VirtualizedList;
