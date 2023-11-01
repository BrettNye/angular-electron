import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, electronService:ElectronService) {
    // electronService.fs.readFile('package.json', (err, data) => {
    //   localStorage.setItem('data', data.toString())
    // })
   }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}
