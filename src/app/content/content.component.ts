import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountServiceService } from '../services/count-service.service';
import { UserDetails } from '../shared/user-details';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    imports: [HeaderComponent,FormsModule,ReactiveFormsModule,CommonModule]
})
export class ContentComponent implements OnInit {

  detailsForm!:FormGroup;
  userDetails:UserDetails[]=[];
  
  constructor(private fb: FormBuilder,private countService:CountServiceService) { }

 
  ngOnInit(): void {

    this.detailsForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(5), this.checkSpacesInName]],
      age: ['', [Validators.required, Validators.min(20),Validators.max(60)]],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if(this.detailsForm.valid){
      console.log("Form Submitted",this.detailsForm.value);
      this.incCount();
      const userDetail:UserDetails={
        name:this.detailsForm.value.name,
        age:this.detailsForm.value.age,
        id:this.countService.getCount()
      }
      this.userDetails.push(userDetail);
      this.detailsForm.reset();
    }else{
      console.log("the form is invalid");
    }
  }

  checkSpacesInName(ctrl:any){
  if(ctrl.value && ctrl.value.trim().indexOf(' ')!==-1){
    return {invalidSpace:true};
  }return;
  }
  incCount(){
    this.countService.increaseCount();
  }
  decCount(){
    this.countService.decreaseCount();
  }

  removeDetail(idx:number){
    console.log("button working");
    
    for(let i=0;i<this.userDetails.length;i++){
      if(this.userDetails[i].id==this.userDetails[idx].id){
        this.userDetails.splice(i,1);
        this.decCount();
        break;
      }
      
    }
  }

 

}
