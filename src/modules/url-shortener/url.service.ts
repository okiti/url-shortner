import { getConnection } from 'typeorm';
import { Urls } from './entities/urls.entity';
import { DeviceLogs } from './entities/devices.entity';
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
  const { alias, country, ip, device } = payload;
  const urlRepository = getConnection().getRepository(Urls);
  const deviceRepository = getConnection().getRepository(DeviceLogs);
  const url = await urlRepository.findOne({ alias });
  if (!url) {
    throw new HttpError(404, `Url with alias ${alias} not found`);
  }
  const loggedDevice = deviceRepository.create();
  loggedDevice.alias = alias;
  loggedDevice.country = country;
  loggedDevice.ip = ip;
  loggedDevice.device = device;
  await loggedDevice.save();
  url.visits = url.visits += 1;
  await url.save();
  delete url.visits;
  return url;
};

export const getStat = async (payload: { alias: string }) => {
  const { alias } = payload;
  const urlRepository = getConnection().getRepository(Urls);
  const deviceRepository = getConnection().getRepository(DeviceLogs);

  const url = await urlRepository.findOne({ alias });

  const devices = await deviceRepository.find({
    order: { createdAt: 'DESC' }, // order results
    take: 10,
  });

  return {
    ...url,
    devices,
  };
};
