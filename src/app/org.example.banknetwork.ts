import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.banknetwork{
   export class Account extends Asset {
      accountId: string;
      owner: Customer;
      balance: number;
   }
   export class Customer extends Participant {
      customerId: string;
      name: string;
   }
   export class SampleTransaction extends Transaction {
      from: Account;
      to: Account;
      amount: number;
   }
// }
