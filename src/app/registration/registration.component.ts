import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { PersonDetails } from '../PersonDetails';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 person:any=PersonDetails
 list:any[]=[];
 dropdownList: Array<any> = []; 
 Id!:number 
 editMode:boolean=false;
 selected:any;
  constructor(private Service:PersonService ,private router:Router,private route:ActivatedRoute) {
    this.dropdownList = [
      {code:1,Religion:"select"},
      { code: 2, Religion: "Hindu" },
      { code: 3, Religion: "Muslim" },
      { code: 4, Religion: "Sikh" }
    ]
    this.selected=1;
   }
   ngOnInit():void{
   // this.selectedValue = this.items[0].value;
    
this.route.params.subscribe(params=>{
  debugger
  this.person.Id=params?.["id"]
this.person.AadharNumber=params?.["aadharNumber"]
this.person.FatherName=params?.["fatherName"]
this.person.MotherName=params?.["motherName"]
this.person.AccountNumber=params?.["accountNumber"]
this.person.FullName=params?.["fullName"]
this.person.DateOfBirth=params?.["dateOfBirth"]
this.person.Address=params?.["address"]
this.person.Category=params?.["category"]
this.person.Email=params?.["email"]
this.person.Hobbies=params?.["hobbies"]
this.person.MobileNumber=params?.["mobileNumber"]
this.person.PreviousClass=params?.["previousClass"]
this.person.Stream=params?.["stream"]
 this.person.Religion=params?.["religion"]
this.person.AadharNumber=params?.["accountNumber"]
this.person.AadharNumber=params?.["accountNumber"]
this.person.AadharNumber=params?.["accountNumber"]

})
     // this.Service.GetSingleStudentDetails(id)

   }
  onFormSubmit(register:NgForm){
     if(this.person.Id==undefined){
    this.Service.registerPerson(register.value).subscribe(
       (resp) => {
        console.log(resp)
       this.router.navigate(['/list']);
     }
    );
    }
    else{
      register.value.Id=Number(this.person.Id)
      register.value.AadharNumber=Number(this.person.AadharNumber)
      register.value.AccountNumber=Number(this.person.AccountNumber)
      register.value.MobileNumber=Number(this.person.MobileNumber)
     this.Service.updatePerson(register.value).subscribe(x=>{
        this.router.navigate(['/list']);
        //register.resetForm();
      })
    }
    this.router.navigate(['/list']);
    register.resetForm();
}
// currentPerson:any;
// Update(Id:number){
  
//   this.currentPerson=this.list.find((p)=>{return p.id==this.Id});
//   this.person={
//     Id:this.currentPerson.id,
//     FullName:this.currentPerson.fullName,
//     FatherName:this.currentPerson.fatherName,
//    MotherName:this.currentPerson.motherName,
//      AadharNumber:this.currentPerson.aadharNumber,
//      AccountNumber:this.currentPerson.accountNumber,
//      Religion:this.currentPerson.religion,
//      Stream:this.currentPerson.stream,
//      MobileNumber:this.currentPerson.mobileNumber,
//      Address:this.currentPerson.address,
//      Category:this.currentPerson.category,
//      DateOfBirth:this.currentPerson.dateOfBirth,
//      Email:this.currentPerson.email,
//      Hobbies:this.currentPerson.hobbies,
//      Gender:this.currentPerson.gender
     
//   }
//   this.editMode=true;
//   this.person.Id=Number(this.person.Id)
  
//   }
}
// OnClear(){
//   this.person.FatherName='',
//   this.person.AadharNumber='',
//   this.person.AccountNumber='',
//   this.person.Address='',
//   this.person.Email='',
//   this.person.FullName='',
//   this.person.Gender='',
//   this.person.Hobbies='',
//   this.person.MobileNumber=0,
//   this.person.MotherName='',
//   this.person.PreviousClass='',
//   this.person.Religion='',
//   this.person.Stream='',
  //this.person.DateOfBirth.widget.option("value",null),
  //this.DateOfBirth.widget.option("value",null); 
  // this.person.Category=''

//}

// delete(FullName:string) {
//   if(confirm("are you sure to delete the record?"))
//   this.Service.deletePerson(FullName).subscribe(res=>alert("record deleted successfully."))
//   window.location.reload();
// }
//}
