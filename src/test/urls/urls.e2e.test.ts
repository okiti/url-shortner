import 'reflect-metadata';
import { createConnection, getConnection, Repository } from 'typeorm';
import app from '../../config/app';
import request from 'supertest';
import { getDbConfig } from '../../config/database.config';
import factory from '../factories';
import { Urls } from '../../modules/url-shortener/entities/urls.entity';

describe('URL (E2E) tests', () => {
  const url = '';
  let rq: request.SuperTest<request.Test>;
  let urlRepository: Repository<Urls>;
  beforeAll(async () => {
    await createConnection({ type: 'postgres', ...getDbConfig })
      .then(() => {
        console.log('Db connected');
        urlRepository = getConnection().getRepository(Urls);
      })
      .catch((error) => console.log(error));

    rq = request(app);
  });

  afterEach(async () => {
    await urlRepository.query(`DELETE FROM urls;`);
  });

  describe(`POST ${url}`, () => {
    it('should encode a url', async () => {
      await rq
        .post(`${url}/encode`)
        .set('Accept', 'application/json')
        .send({
          url: 'https://ourpass.co/x/12we-sadag-aeav-alaks',
        })
        .expect(201);
    });

    it('should fail to encode url if no body is passed', async () => {
      await rq
        .post(`${url}/encode`)
        .set('Accept', 'application/json')
        .send({})
        .expect(400);
    });

    it('should decode a url', async () => {
      const encodedUrls = await factory.buildMany('urls', 2);
      await urlRepository.save(encodedUrls);
      await rq
        .get(`${url}/decode/${encodedUrls[0].alias}`)
        .set('Accept', 'application/json')
        .send({})
        .expect(404);
    });

    it("should fail to decode a url if alias doesn't exists", async () => {
      await rq
        .get(`${url}/decode/random`)
        .set('Accept', 'application/json')
        .send({})
        .expect(200);
    });
  });
});
