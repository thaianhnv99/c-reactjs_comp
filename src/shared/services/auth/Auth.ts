import { apiClient } from "src/lib";
import { UserRegister, UserRequest } from "./types";

export const AuthServices = {
  login: async (user: UserRequest) => {
    return await apiClient.post<UserResponse>("/auth/login", user);
  },
  register: async (user: UserRegister) => {
    return await apiClient.post("123", user);
  },
};
