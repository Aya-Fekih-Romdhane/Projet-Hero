import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public data : SharedService) { }

  listheros : any;

  ngOnInit(): void {
    this.data.getallHero()
    .subscribe(
      (res)=>{
        console.log(res);
        this.listheros=res;
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  del(id : any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(( result ) => {
      if (result.isConfirmed) {
        this.data.deleteHero(id)
    .subscribe(
      (res)=>{
        console.log(res);
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
        
      }
    )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    


    
  }





}
