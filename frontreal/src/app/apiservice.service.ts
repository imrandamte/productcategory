import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) {
   }

   //connect frontend to backend
   apiurl = 'http://localhost:3300/user';
   cpiurl = 'http://localhost:3300/categories';

   //get all data
   getProducts(page: number, pageSize: number): Observable<any> {
    const url = `${this.apiurl}?page=${page}&pageSize=${pageSize}`;
    return this._http.get(url);
  }

   //createdata
   createData(data:any):Observable<any>{

    console.log(data,'createapi=>')
    return this._http.post(`${this.apiurl}`,data);
   }

   //delete data
   deleteData(id:any):Observable<any>
   {
    let ids=id;
    return this._http.delete(`${this.apiurl}/${ids}`);
    
   }

   //update data
   updateData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.apiurl}/${ids}`,data);
   }


   //getsingledata
   getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiurl}/${ids}`);
   }

   //create categorydata
   createcData(data:any):Observable<any>{

    console.log(data,'createapi=>')
    return this._http.post(`${this.cpiurl}`,data);
   }

   //get category data
   getAllData():Observable<any>{
    return this._http.get(`${this.cpiurl}`);
   }
   //delete categorydata

   deletecategoryData(id:any):Observable<any>
   {
    let zids=id;
    return this._http.delete(`${this.cpiurl}/${zids}`);
    
   }

   //update categorydata
   updatecategoryData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.cpiurl}/${ids}`,data);
   }
    
}
