import { getConnection } from 'typeorm';
import { Urls } from './entities/urls.entities';
import shortCode from 'src/utils/generateCode';

export const endcode = async (payload: { url: string }) => {
  const urlRepository = getConnection().getRepository(Urls);
  const { url } = payload;
  const alias = shortCode();

  const shortendUrl = urlRepository.create();
  shortendUrl.originalUrl = url;
  shortendUrl.alias = alias;

  await shortendUrl.save();
  return shortendUrl;
};
