import { Component } from '@angular/core';
// import {Observable} from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

// import Papa from 'papaparse';


// let file:string = ''

// Load CSV data in
// Papa.parse(file, config);
// const csv = Papa.unparse(data[, config]);

const csvFileName:String = 'jouyou-kanji-only-words.csv'
const csvPath:String = '.\src\\data\\sph-mn-kanji\\maincsv'
const csvPathB:String = 'assets/sph-mn-kanji/maincsv'


// const fs = require('fs');

// fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const fs = require('fs')
// import fs from 'fs'

// fs.readFile(`${csvPath}\\${csvFileName}`, 'ISO-2022-JP', (err:Error, data:String) => {
//   if(err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })


// @NgModule({
//   imports: [..., HttpClientModule]
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'japanese-helper';


  // csvFileName:String = 'jouyou-kanji-only-words.csv'
  // csvPath:String = '.\src\\data\\sph-mn-kanji\\maincsv'
  // myData:Observable<String> = ''
  mainJPData:String = ''
  constructor(private httpClient: HttpClient){
    this.getJson()
  }

  public getJson() {
    // this.httpClient.get('assets/data.json').subscribe(data => {
    this.httpClient.get(`${csvPathB}/${csvFileName}`, {responseType: 'text'}).subscribe(data => {
      // console.log(data);
      this.mainJPData = data
    })
  }

  // ngOnInit() {
  //   this.myData = this.http
  //     .get<String>('csvPath')
  // }

}
