import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PostItem } from "src/api/postApi";

const ItemUI = ({ post }: { post: PostItem }) => {
  return (
    <Box>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="caption">{post.body}</Typography>
    </Box>
  );
};

export default ItemUI;
