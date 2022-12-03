import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  hero:any;
  id:any;

   
 

  constructor(private act : ActivatedRoute , public data : SharedService, private router:Router) { }

  ngOnInit(): void {

    this.id=this.act.snapshot.paramMap.get('id');
    this.data.getHeroById(this.id)
    .subscribe(
      res=>{
        console.log(res);
        this.hero=res;
            
      },err=>{
        console.log(err);
        
      }
    )
   
  }

  modifier(){
    this.data.updateHero(this.id, this.hero)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/list']);
        
      },err=>{
        console.log(err);
        
      }
    )
      
  }

}
