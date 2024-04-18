import { createStorage, type IStorageProperties } from './create-storage';

export function useLocalStorage<T>(props: IStorageProperties<T>) {
  return createStorage<T>('localStorage')(props);
}
