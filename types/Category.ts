import { Product } from "./Product";

export interface Category {
  id?: number;
  documentId: string | null;
  slug?: string;
  title?: string;
  description?: null;
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  locale?: string;
  shortDescription?: string | null;
  localizations?: Category[];
  image?: Media;
  products?: Product[];
  price?: number;
  msrp?: null;
}

export interface Description {
  type: string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export enum EXT {
  Webp = ".webp",
}

export interface Formats {
  thumbnail: Medium;
  medium: Medium;
  small: Medium;
}

export interface Medium {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export enum MIME {
  ImageWebp = "image/webp",
}