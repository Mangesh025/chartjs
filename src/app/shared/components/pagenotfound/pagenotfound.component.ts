import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit{

  msg!: string
  constructor(
    private _acRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.msg = this._acRoute.snapshot.data['errorMsg']
  }
}
