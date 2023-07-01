import { Component,
  Input,
} from '@angular/core';

import { 
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})



export class HomeComponent {
  @Input() mainJPData = ''
  newData = {}

  constructor(route: ActivatedRoute) {

    // working
    // route.data.subscribe(data => {
    //   this.newData = data
    //   console.log(this.newData)
    // })



  }

  ngOnInit() {
    // console.log(this.mainJPData)
    // console.log(this.mainJPData)
    console.log(history.state)

    this.mainJPData = history.state.jpData
  }
}
