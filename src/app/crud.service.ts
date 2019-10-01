import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private ht:HttpClient) { }
  get(){
    return this.ht.get("http://localhost:3000/details")
  }
  post(d){
    return this.ht.post("http://localhost:3000/details",d)
  }
  Update(u){
    return this.ht.put("http://localhost:3000/details"+ '/' + u.id,u)
  }
  delete(id:number){
    return this.ht.delete("http://localhost:3000/details"+ '/' + id)
  }
}
