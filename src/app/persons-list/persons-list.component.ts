import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from '../person.service';
import { PersonDetails } from '../PersonDetails';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  list:any; 
  listData:any=PersonDetails
  feilds!:PersonDetails
  Name:string=''
constructor(private service:PersonService,private router:Router){
}
async ngOnInit():Promise<any>{
  debugger
  await this.service.getPerson().subscribe(
     (resp) => {
      console.log(resp);
     this.list = resp;
    }
  );
    }
 delete(Id:number) {
   if(confirm("are you sure to delete the record?"))
   this.service.deletePerson(Id).subscribe(res=>alert("record deleted successfully."))
  window.location.reload();
 }
 Edit(person:PersonDetails){
  this.router.navigate(['/register',{...person}]);
  
 }
  Search(){
 this.service.SearchPerson(this.Name).subscribe(res=>{
  this.list=[res]})
 }
}


