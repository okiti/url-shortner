export interface UrlModel {
  id: string;
  originalUrl: string;
  alias: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface encodeType {
  url: string;
}

export interface decodeType {
  alias: string;
  ip: string;
  country: string;
  device: any;
}
