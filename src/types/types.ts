import { ResponsiveImageType } from "react-datocms";
export interface Startpage {
  startpage: {
    __typename: string;
    title: string;
    id: string;
    content: ContentValue;
    mainImage: MainImage;
  };
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
      }[];
    }[];
  };
}

export interface MainImage {
  __typename: string;
  responsiveImage: ResponsiveImageType;
}

//PAGE
export interface Page {
  title: string;
  updatedAt: string;
  id: string;
  createdAt: string;
  content: ContentValue;
  mainImage: MainImage;
}
export interface Product {
  __typename: string;
  updatedAt: Date;
  price: number;
  name: string;
  id: string;
  description: Description;
  alternativeImages: MainImage;
  mainImage: MainImage;
  _createdAt: Date;
  quantity: number;
  keyValue: string;
  ids: any[]
  data: {
      title: string;
      btn: string;
      keyValue: string; 
  }
}

export interface Description {
  __typename: string;
  value: ContentValue;
}
export interface MenuData {
  data: {
    title: string;
    btn: string;
    keyValue: string;
  };
}

export interface LinkType {
  id?: number;
  title: string;
  url: string;
  icon?: JSX.Element | null;
}