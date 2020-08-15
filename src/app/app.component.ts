import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlavoursService } from './services/flavours.service';
import { Flavour} from './models/flavour.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'The Popsicle Stop';
  flavours: Flavour[];
  selectedFlavour: Flavour;

constructor (
  private _flavoursService: FlavoursService
) {
}
ngOnInit() {

  this._flavoursService.getFlavours().subscribe(response => {

    this.flavours = response;
    this.selectedFlavour = this.flavours[0];
  })
}

updateSelectedFlavour(newSelectedFlavourTitle: string) {

  for (let i = 0; i < this.flavours.length; i++) {

    if (newSelectedFlavourTitle === this.flavours[i].title) {

      this.selectedFlavour = this.flavours[i];
    }
  }
}

}
