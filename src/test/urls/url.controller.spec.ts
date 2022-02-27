import 'reflect-metadata';
import app from '../../config/app';
import request from 'supertest';
import factory from '../factories';
import * as urlService from '../../modules/url-shortener/url.service';

jest.mock('../../modules/url-shortener/url.service');
const mockedUrlServices = urlService as jest.Mocked<typeof urlService>;

describe('Authentication (Unit)', () => {
  const url = '';
  let rq: request.SuperTest<request.Test>;
  beforeAll(async () => {
    rq = request(app);
  });

  describe(`POST ${url}`, () => {
    it('should create a user', async () => {
      const encodedUrls = await factory.buildMany('urls', 2);
      mockedUrlServices.encode.mockResolvedValue(encodedUrls[0]);
      const { body } = await rq
        .post(`${url}/encode`)
        .set('Accept', 'application/json')
        .send({
          url: 'https://wwww/ourpass.co/some-really-long-url',
        })
        .expect(201);
      expect(body).toEqual(
        expect.objectContaining({
          data: expect.any(Object),
        }),
      );
    });
  });
});
