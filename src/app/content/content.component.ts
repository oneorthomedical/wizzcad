import {Component, OnInit} from '@angular/core';
import {UserDataService} from '@app/services/user-data.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  data: { createdAt: any; name: any; id: any; updatedAt: any }[];
  columnsToDisplay = ['id', 'name', 'createdAt' , 'updatedAt'];
  constructor(private userData: UserDataService) {
  }

  ngOnInit(): void {
    this.userData.get()
      .subscribe((data: []) => {
        this.data = data.map((d: any) => ({
          id: d.id,
          name: d.name,
          createdAt: d.createdAt,
          updatedAt: d.updatedAt,
        }));
      });
  }
}
