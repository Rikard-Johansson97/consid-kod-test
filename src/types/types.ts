// RESPONSIVE IMAGE

import { StructuredTextPropTypes } from "react-datocms";

interface ResponsiveImage {
  width: number;
  webpSrcSet: string;
  title: any;
  srcSet: string;
  src: string;
  sizes: string;
  height: number;
  bgColor: string;
  base64: string;
  aspectRatio: number;
  alt: string;
}

// CONTENTS
interface ContentValue {
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

//PAGE
export interface Page {
  title: string;
  updatedAt: string;
  id: string;
  createdAt: string;
  content: ContentValue
  mainImage: {
    responsiveImage: ResponsiveImage;
  }
}
export interface Product {
  slice: any;
  product: {  
    updatedAt: string;
    price: number;
    name: string;
    quantity: number;
    keyValue: string;
    mainImage: {
      responsiveImage: ResponsiveImage;
    };
    alternativeImages: {
      map(arg0: (img: any, index: any) => JSX.Element): import("react").ReactNode;
      responsiveImage: ResponsiveImage;
    };
    _createdAt: string;
    id: string;
    description: any;
    }

}

export interface Data {
  allProducts: Product[];
  product: Product[];
}
interface Response {
  data: Data;
}