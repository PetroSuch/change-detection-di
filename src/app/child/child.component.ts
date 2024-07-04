import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MyService } from '../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MyService], // Provide service at child level
  standalone: true,
  imports: [CommonModule]
})
export class ChildComponent implements OnChanges {
  @Input() childData: string = '';
  localData = 'Initial Child Data';

  constructor(private myService: MyService) {
    console.log(this.myService.getServiceData());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes in child component', changes);
  }

  updateChildData() {
    this.localData = 'Updated Child Data';
  }
}
