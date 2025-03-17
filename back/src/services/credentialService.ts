import { credentialRepository } from "../Repositories/index";
import { Credential } from "../entities/Credentials";

export const newCredentials = async (
  userData: Credential
): Promise<Credential> => {
  const newCredencial: Credential = credentialRepository.create(userData);
  const result = await credentialRepository.save(newCredencial);
  return result;
};

export const findCredential = async (
  userData: Credential
): Promise<Credential | undefined> => {
  const { username, password } = userData;
  const usuario = await credentialRepository.findOne({
    where: { username: username },
    relations: ["idUser"],
  });

  if (usuario && usuario.password === password) {
    return usuario;
  }
  return undefined;
};

export const findOneCredential = async (
  id: number
): Promise<Credential | undefined> => {
  const creden = await credentialRepository.findOne({
    where: { idCredential: id },
  });
  if (!creden) {
    return undefined;
  } else {
    return creden;
  }
};
