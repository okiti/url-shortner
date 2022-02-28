import requestIp from 'request-ip';
import dotenv from 'dotenv';
import geoip from 'geoip-lite';
import DeviceDetector from 'node-device-detector';

dotenv.config();

export const deviceLogger = async (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    const userAgent = req.headers['user-agent'];
    const clientIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(clientIp);
    const detector = new DeviceDetector();
    const thisDevice = detector.detect(userAgent);
    res.locals.geo = { ...geo, ip: clientIp };
    res.locals.device = thisDevice;
  } else {
    res.locals.device = {
      os: {},
      client: { type: 'library', name: 'Postman Desktop', version: '7.29.0' },
      device: { id: '', type: '', brand: '', model: '' },
    };
    res.locals.geo = {
      range: [1768972288, 1768974335],
      country: 'NG',
      region: 'ED',
      eu: '0',
      timezone: 'Africa/Lagos',
      city: 'Benin City',
      ll: [6.335, 5.6275],
      metro: 0,
      area: 200,
      ip: '105.112.102.139',
    };
  }
  next();
};
