import { Urls } from '../../modules/url-shortener/entities/urls.entities';

export default (factory: any) => {
  factory.define('urls', Urls, {
    id: factory.chance('guid'),
    originalUrl: factory.chance('email'),
    alias: factory.chance('word', { length: 6 }),
    createdAt: factory.chance('date'),
    updatedAt: factory.chance('date'),
  } as ElementDefinitionOptions);
};
