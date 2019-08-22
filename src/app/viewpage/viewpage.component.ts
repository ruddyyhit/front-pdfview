import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {


  // private route: ActivatedRoute

   constructor() {

   }


  ngOnInit() {

    console.log('hello');
    // console.log(this.route.snapshot.params['name']);
  }

}
