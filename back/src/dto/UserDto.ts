export interface IUserDto {
  name: string;
  username: string;
  password: string;
  email: string;
  birthdate: Date;
  ndni: number;
}

export interface IUserLoginDto {
  username: string;
  password: string;
}
