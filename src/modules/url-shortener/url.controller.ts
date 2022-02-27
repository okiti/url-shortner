import * as services from './url.service';
import call from '../../utils/call';

export const encode = call(async (req, res) => {
  const shortendUrl = await services.endcode({
    ...req.body,
  });
  res.status(201).json({ data: shortendUrl });
});

export const decode = call(async (req, res) => {
  const decodeUrl = await services.decode({
    ...req.params,
  });
  res.status(200).json({ data: decodeUrl });
});
