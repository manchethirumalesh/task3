import { Component, OnInit } from '@angular/core';
import { PhoneModule } from '../../app/phone/phone.module';


@Component({
  selector: 'app-display-phone',
  templateUrl: './display-phone.component.html',
  styleUrls: ['./display-phone.component.css']
})
export class DisplayPhoneComponent implements OnInit {

  PhoneModule = new PhoneModule()
  phonearray:any[] = []

  List = false;

  arr : any[]=[]

  constructor() { }

  ngOnInit(): void {
    this.PhoneModule = new PhoneModule()
    this.phonearray.push(this.PhoneModule)
  }

  addform(){
    this.PhoneModule = new PhoneModule()
    this.phonearray.push(this.PhoneModule)
    if(this.phonearray.length>0){
      this.List = true
    }
  }

  removeform(index: number){
    this.phonearray.splice(index,1)
    console.log("Total Phone Numbers : " + this.phonearray.length)
    if(this.phonearray.length<=1){
      this.List = false
    }
  }

  submit(){
    console.log("Total Phone Numbers : " + this.phonearray.length)
      for(let i =0; i<this.phonearray.length;i++){
        const id = i+1
        console.log("phoneNumber" + id +": " + this.phonearray[i].phone)
      }
  }

}
