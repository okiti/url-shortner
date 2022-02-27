import { getConnection } from 'typeorm';
import { Urls } from './entities/urls.entity';
import shortCode from '../../utils/generateCode';
import HttpError from '../../exceptions/http-error';
import { UrlModel, encodeType, decodeType } from './types/url.types';

export const encode = async (payload: encodeType): Promise<UrlModel> => {
  const urlRepository = getConnection().getRepository(Urls);
  const { url } = payload;
  let alias = shortCode();
  const alreadyExists = await urlRepository.findOne({ alias });
  while (alreadyExists) {
    alias = shortCode();
  }
  const shortendUrl = urlRepository.create();
  shortendUrl.originalUrl = url;
  shortendUrl.alias = alias;

  await shortendUrl.save();
  return shortendUrl;
};

export const decode = async (payload: decodeType): Promise<UrlModel> => {
  const { alias } = payload;
  const urlRepository = getConnection().getRepository(Urls);
  const url = await urlRepository.findOne({ alias });
  if (!url) {
    throw new HttpError(404, `Url with alias ${alias} not found`);
  }
  return url;
};
