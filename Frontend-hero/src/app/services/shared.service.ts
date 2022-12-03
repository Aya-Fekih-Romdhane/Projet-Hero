import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url="http://127.0.0.1:3000/hero/";

  constructor(public http : HttpClient) { }
  
createNewHer(hero : any){

  return this.http.post(this.url+'ajout',hero)  ;
}


getallHero(){
  return this.http.get(this.url+'getall');
}

deleteHero(heroId : any){
  return this.http.delete(this.url+'del/'+heroId);
}  

getHeroById(id:any){
  return this.http.get(this.url+'getbyid/'+id);

}
 updateHero(id : any , hero : any){
  return this.http.put(this.url+'update/'+id,hero);
 }




  heros:any=[];



}
