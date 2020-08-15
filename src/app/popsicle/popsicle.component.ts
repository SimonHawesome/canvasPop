import { Component, OnInit, Input } from '@angular/core';
import { Flavour} from '../models/flavour.model';

@Component({
  selector: 'app-popsicle',
  templateUrl: './popsicle.component.html',
  styleUrls: ['./popsicle.component.scss']
})
export class PopsicleComponent implements OnInit {

  @Input() selectedFlavour: Flavour;

  constructor() { }

  ngOnInit(): void {
  }

}
