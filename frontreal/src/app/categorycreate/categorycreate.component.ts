import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service' ;
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './categorycreate.component.html',
  styleUrl: './categorycreate.component.css'
})
export class  CategorycreateComponent implements OnInit {
     constructor(private service:ApiserviceService,private router:ActivatedRoute) { } 
     errormsg:any; 
     successmsg:any;
     getparamid:any;
     rData:any;


     ngOnInit(): void {
      
      this.getparamid = this.router.snapshot.paramMap.get('id');
       
     
       
     }
     


     categoryForm = new FormGroup({
       
       'categoryid':new FormControl('',Validators.required),
       'categoryname':new FormControl('',Validators.required)
     })
       //create newuser
     categorySubmit(){
      if(this.categoryForm.valid){
        console.log(this.categoryForm.value);
        this.service.createcData(this.categoryForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          this.categoryForm.reset();
          this.successmsg = res.message;
        })
      }
      else{
        this.errormsg = 'all field is required!';
      }
     }


     categoryUpdate(){
      console.log(this.categoryForm.value,'updatedform');


      if(this.categoryForm.valid){
        this.service.updatecategoryData(this.categoryForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdated');
          this.successmsg = res.message;
        })
      } else{
              this.errormsg='all field is required';
      }
   }

     

    
     
}

