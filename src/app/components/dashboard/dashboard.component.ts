import { Component } from '@angular/core';
import { TableDetails } from 'src/app/interfaces/table-details';


const TRANSACTION: TableDetails[] = [
  {
    id: 'ID 123456789',
    name: 'Monicca James',
    phone: '+91 9878542810',
    accountType: 'Savings',
    amount: 200,
    balance: 6000,
    category: {
      title: 'Income',
      type: 'Salary',
    },
  },
  {
    id: 'ID 12356789',
    name: 'Samantha',
    phone: '+91 9744012980',
    accountType: 'Savings',
    amount: 200,
    balance: 6000,
    category: {
      title: 'Income',
      type: 'Salary',
    },
  },
  {
    id: 'ID 12356789',
    name: 'Catherine',
    phone: '+91 9744012980',
    accountType: 'Savings',
    amount: 200,
    balance: 6000,
    category: {
      title: 'Income',
      type: 'Salary',
    },
  },
  {
    id: 'ID 12356789',
    name: 'Monicca James',
    phone: '+91 9744012980',
    accountType: 'Savings',
    amount: 200,
    balance: 6000,
    category: {
      title: 'Income',
      type: 'Salary',
    },
  },
  {
    id: 'ID 12356789',
    name: 'ileana Sam',
    phone: '+91 9744012980',
    accountType: 'Savings',
    amount: 200,
    balance: 6000,
    category: {
      title: 'Income',
      type: 'Salary',
    },
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  transactions = TRANSACTION;
constructor(){}

}
