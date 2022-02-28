import * as services from './url.service';
import call from '../../utils/call';

export const encode = call(async (req, res) => {
  const shortendUrl = await services.encode({
    ...req.body,
  });
  res.status(201).json({ data: shortendUrl });
});

export const decode = call(async (req, res) => {
  const { geo, device } = res.locals;
  const decodeUrl = await services.decode({
    ...req.params,
    device,
    country: geo.country,
    ip: geo.ip,
  });
  res.status(200).json({ data: decodeUrl });
});

export const getStat = call(async (req, res) => {
  const urlStats = await services.getStat({
    ...req.params,
  });
  res.status(200).json({ data: urlStats });
});
