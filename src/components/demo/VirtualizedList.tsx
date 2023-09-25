import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  FixedSizeList,
  FixedSizeListProps,
  ListChildComponentProps,
} from "react-window";

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

interface VirtualizedListProps {
  listProps?: Partial<FixedSizeListProps>;
  data: any[];
}
const VirtualizedList = ({ data, listProps }: VirtualizedListProps) => {
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
