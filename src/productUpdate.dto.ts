

export class ProductUpdateDto {
  sizes: string[];
  isInStock: boolean;
}

export class ProductEditDto {
  title: string;
  boughtPrice: string;
  soldPrice: string;
  color: string;
  sizes: string[];
  isInStock: boolean;
  description: string;
}
