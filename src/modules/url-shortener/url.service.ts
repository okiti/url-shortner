import { getConnection } from 'typeorm';
import { Urls } from './entities/urls.entities';
import shortCode from 'src/utils/generateCode';
import HttpError from '../../exceptions/http-error';

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

export const decode = async (payload: { alias: string }) => {
  const { alias } = payload;
  const urlRepository = getConnection().getRepository(Urls);
  const url = await urlRepository.findOne({ alias });
  if (!url) {
    throw new HttpError(404, `Url with alias ${alias} not found`);
  }
  return url;
};
