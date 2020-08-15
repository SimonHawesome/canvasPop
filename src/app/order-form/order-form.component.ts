import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flavour } from '../models/flavour.model';
import { Order } from '../models/order.model';
import { OrdersService } from '../services/orders.service';

export enum OrderState {
    New = 0,
    Processing = 1,
    Success = 2,
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() flavours: Flavour[];
  @Input() selectedFlavour: Flavour;
  @Output() onFlavourSelectionUpdate: EventEmitter<string> = new EventEmitter<string>();

  customerName: string;
  shouldSubscribe: boolean;
  errorMessage: string;
  orderState: OrderState;
  orderStateEnum = OrderState;

  constructor(
    private _ordersService: OrdersService
  ) { }

  ngOnInit(): void {

    this.shouldSubscribe = true;
  }

  updateSelectedFlavour(selectedFlavourTitle: any): void {

    const newSelectedFlavourTitle = selectedFlavourTitle;

    this.onFlavourSelectionUpdate.emit(selectedFlavourTitle);
  }

  submitOrder(): void {

    const newOrder =  new Order(0, this.customerName, this.selectedFlavour.id, this.shouldSubscribe);

    if (!this.customerName) {

      this.errorMessage = 'Please enter your name to order';
    } else if (this.customerName.length <= 1) {

      this.errorMessage = 'Your name must be more than one (1) character';
    } else {

      this.errorMessage = '';
      this.orderState = OrderState.Processing;

      this._ordersService.placeOrder(newOrder).subscribe(
          response => {

          this.orderState = OrderState.Success;
      },
      error => {
        
        this.errorMessage = 'Sorry, something went wrong on our end. Please try again later.';
    });
    }
  }


  resetForm(): void {

      this.customerName = '';
      this.shouldSubscribe = true;
      this.updateSelectedFlavour(this.flavours[0].title);
      this.orderState = OrderState.New;
  }
}
