import { apiClient } from 'src/lib/apiClient';

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const POST_CACHE_KEY = {
  GET_LIST: 'get-list',
};
export const fetchAllList = async () => {
  return await apiClient.get<PostItem[]>('https://jsonplaceholder.typicode.com/posts');
};

export const fetchSeachListByTitle = async (text?: string) => {
  return await apiClient
    .get<PostItem[]>('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      const dataFilter = text
        ? res.data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(text.toLowerCase());
          })
        : res.data;
      return {
        ...res,
        data: dataFilter,
      };
    });
};
