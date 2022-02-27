import * as services from './url.service';
import call from '../../utils/call';

export const encode = call(async (req, res) => {
  const shortendUrl = await services.endcode({
    ...req.body,
  });
  res.status(201).json({ data: shortendUrl });
});
