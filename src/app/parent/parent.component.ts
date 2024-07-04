import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MyService } from '../my-service.service';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [MyService], // Provide service at parent level
  standalone: true,
  imports: [CommonModule, ChildComponent]
})
export class ParentComponent {
  parentData = 'Initial Parent Data';

  constructor(private myService: MyService) {
    console.log(this.myService.getServiceData());
  }

  updateParentData() {
    this.parentData = 'Updated Parent Data';
  }
}
