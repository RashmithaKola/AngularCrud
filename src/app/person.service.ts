import { Injectable } from '@angular/core';
import { PersonDetails } from './PersonDetails';
import{HttpClient, HttpHeaders}from'@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  API ="https://localhost:44341/api/PersonRegister/AddPersons"
  BaseUrl="https://localhost:44341/api/PersonRegister/"
  Url="https://localhost:44341/api/PersonRegister/"
  registerPerson(data:PersonDetails):Observable<any>{
    return this.http.post("https://localhost:44341/api/PersonRegister/AddPersons",data)
  }
 public GetSingleStudentDetails(Id:any){
return this.http.get("https://localhost:44341/api/PersonRegister/GetSingleStudentDetails/"+Id)
 }
   getPerson(){
    return this.http.get<Observable<PersonDetails[]>>("https://localhost:44341/api/PersonRegister/GetAll");
  }
  deletePerson(Id:number):Observable<any>{
    return this.http.delete(this.Url+Id);
  }
  updatePerson(data:PersonDetails):Observable<any>{

    return this.http.put("https://localhost:44341/api/PersonRegister/UpdatePerson",data);
  }
   SearchPerson(FullName:string){
    return this.http.get<Observable<PersonDetails[]>>((`https://localhost:44341/api/PersonRegister?FullName=${FullName}`))
  }
}
