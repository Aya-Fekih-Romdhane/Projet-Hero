import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  hero:any={
    name:'',
    power:0
  }
  myPhoto:any;

  selectImage(e:any){

    this.myPhoto= e.target.files[0];

  }
  
 create (){
  let fd = new FormData();

  fd.append('name',this.hero.name);
  fd.append('power',this.hero.power);
  fd.append('image',this.myPhoto);

  this.data.createNewHer( fd )
  .subscribe(
    (res)=>{
      console.log(res);
      this.hero={
        name:'',
        power:0
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Hero has been saved !!',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/list']);

    },
    (err)=>{
      console.log(err);
      
    }
  )

 }
  constructor(public data : SharedService , public router :Router) { }

  ngOnInit(): void {
  }

}
