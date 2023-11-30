import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrl: './react.component.css',
  providers:[EnrollService]
})
export class ReactComponent {
  title= "React"
  constructor(private enrollService:EnrollService)
  {
  }
  OnEnroll()
  {
    this.enrollService.OnEnrollClicked(this.title);
  }

}
