import { Component } from '@angular/core';
import { CONSTANTS } from '../../Constants/constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public footer = CONSTANTS.FOOTER
}
