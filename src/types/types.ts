
export interface Product {
    _createdAt: string;
    id: string;
    mainImage: {
      responsiveImage: {
        width: number;
        webpSrcSet: string;
        title: string;
        srcSet: string;
        src: string;
        sizes: string;
        height: number;
        bgColor: string;
        base64: string;
        aspectRatio: number;
        alt: string;
      };
      id: string;
      url: string;
    };
    description: {
      blocks: any[];
      links: any[];
      value: string;
    };
    alternativeImages: {
      width: number;
      url: string;
      responsiveImage: {
        width: number;
        webpSrcSet: string;
        title: string;
        srcSet: string;
        src: string;
        sizes: string;
        height: number;
        bgColor: string;
        base64: string;
        aspectRatio: number;
        alt: string;
      };
      id: string;
      alt: string;
    }[];
    price: number;
    name: string;
    updatedAt: string;
  }
  
  export interface MyQuery {
    product: Product;
  }
  