import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './account.models';

@Injectable()
export class AccountmentService {
  constructor(
    @InjectModel('Account')
    private readonly AccountModel: Model<AccountDocument>,
  ) {}

  async sellProduct(Account: Account): Promise<Account> {
    const newSell = new this.AccountModel(Account);
    return newSell.save();
  }

  async getSoldProducts() {
    return this.AccountModel.find({})
      .then((Account) => {
        return Account;
      })
      .catch((err) => console.log(err));
  }

  async report() {
    const bought = await this.AccountModel.find({})
      .then((Account) => {
        return Account.reduce((acc: number, rec: any) => {
          return acc + Number(rec.boughtPrice);
        }, 0);
      })
      .catch((err) => console.log(err));
    const sold = await this.AccountModel.find({})
      .then((Account) => {
        return Account.reduce((acc: number, rec: any) => {
          return acc + Number(rec.soldPrice);
        }, 0);
      })
      .catch((err) => console.log(err));
    const data = {
      sold,
      bought,
    };
    return data;
  }
}
