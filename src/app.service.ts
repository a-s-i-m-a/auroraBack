import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Product')
    private readonly ProductModel: Model<ProductDocument>,
  ) {}

  //  creating a Product
  async createProduct(Product: Product): Promise<Product> {
    const newProduct = new this.ProductModel(Product);
    return newProduct.save();
  }

  //  reading the Product collection
  async readProduct() {
    return this.ProductModel.find({ isInStock: true })
      .then((Product) => {
        return Product;
      })
      .catch((err) => console.log(err));
  }

  // upadting the data
  async updateProduct(id, data): Promise<Product> {
    return this.ProductModel.findByIdAndUpdate(id, data);
  }

  // deleting the data
  async deleteProduct(id) {
    return this.ProductModel.findByIdAndRemove(id);
  }

  // find the data
  async findProduct(id) {
    return this.ProductModel.findById(id);
  }

  async featureReport() {
    const bought = await this.ProductModel.find({})
      .then((Account) => {
        return Account.map(
          (el) => Number(el.boughtPrice) * el.sizes.length,
        ).reduce((acc, rec) => acc + rec, 0);
      })
      .catch((err) => console.log(err));
    const sold = await this.ProductModel.find({})
      .then((Account) => {
        return Account.map(
          (el) => Number(el.soldPrice) * el.sizes.length,
        ).reduce((acc, rec) => acc + rec, 0);
      })
      .catch((err) => console.log(err));
    return {
      bought,
      sold,
    };
  }
}
