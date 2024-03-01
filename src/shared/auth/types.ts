export interface UserRequest {
  email: string;
  password: string;
}

export interface UserRegister extends UserRequest {
  phoneNumber: string;
}
