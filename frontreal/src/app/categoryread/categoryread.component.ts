import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-categoryread',
  templateUrl: './categoryread.component.html',
  styleUrl: './categoryread.component.css'
})
export class CategoryreadComponent implements OnInit{


  constructor(private service:ApiserviceService) {

  }
  categories:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
  
  }

  getAllData()
  {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");

      this.categories = res.data
    })
  }

  deleteID(id:any){
    
    this.service.deletecategoryData(id).subscribe((res)=>{
      console.log(res,'deleteres==>')
      this.successmsg=res.message;
      this.getAllData();
      
    })
   
  }

}
