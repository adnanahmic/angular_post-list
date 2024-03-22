import { Component } from '@angular/core';
import { CONSTANTS } from '../../Constants/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public header = CONSTANTS.HEADER
}
