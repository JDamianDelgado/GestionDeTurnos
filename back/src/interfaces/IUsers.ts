import { ICredentials } from "./ICredential";

export interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: number;
  ndni: number;
  coberturaSocial: boolean;
  credentialsId: ICredentials["id"];
}
