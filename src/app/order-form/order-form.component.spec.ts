import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrdersService } from '../services/orders.service';
import { OrderFormComponent } from './order-form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderFormComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    }).compileComponents();
  }));

  it('should create the order form component', () => {
    const fixture = TestBed.createComponent(OrderFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('Input values and output events tests', () => {
    it('should display hero name in uppercase', () => {

    });
  });


});
