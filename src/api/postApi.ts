import { apiClient } from "src/lib/apiClient";

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const fetchAllList = async () => {
  return await apiClient.get<PostItem[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
};