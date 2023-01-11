import { ResponsiveImageType } from "react-datocms";
export interface Welcome6 {
  startpage: Startpage;
}

export interface Startpage {
  __typename: string;
  title:      string;
  id:         string;
  content:    ContentValue;
  mainImage:  MainImage;
}

export interface ContentValue {
  schema: string;
  document: {
    type: string;
    children: {
      type: string;
      children: {
        type: string;
        value: string;
      }[]
    }[];
  }
}

export interface Value {
  schema:   string;
  document: Document;
}

export interface Document {
  type:     string;
  children: DocumentChild[];
}

export interface DocumentChild {
  type:     string;
  children: ChildChild[];
}

export interface ChildChild {
  type:  string;
  value: string;
}

export interface MainImage {
  __typename:      string;
  responsiveImage: ResponsiveImageType;
}

//PAGE
export interface Page {
  title: string;
  updatedAt: string;
  id: string;
  createdAt: string;
  content: ContentValue
  mainImage: {
    responsiveImage: ResponsiveImageType;
  }
}
export interface Product {
  __typename:        string;
  updatedAt:         Date;
  price:             number;
  name:              string;
  id:                string;
  description:       Description;
  alternativeImages: Image[];
  mainImage:         Image;
  _createdAt:        Date;
  quantity: number;
  keyValue: string;
}

export interface Image {
  __typename:      string;
  responsiveImage: ResponsiveImageType;
}
export interface Description {
  __typename: string;
  value:      Value;
}

export interface Value {
  schema:   string;
  document: Document;
}

export interface Document {
  type:     string;
  children: DocumentChild[];
}

export interface DocumentChild {
  type:     string;
  children: ChildChild[];
}

export interface ChildChild {
  type:  string;
  value: string;
}
