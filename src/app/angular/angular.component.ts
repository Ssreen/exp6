import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css',
  providers:[EnrollService]
})
export class AngularComponent {
  title= "Angular"
  constructor(private enrollService:EnrollService)
  {
  }
  OnEnroll()
  {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
