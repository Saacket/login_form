import { Component, OnInit } from '@angular/core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
faLock = faLock;
  formValidate: any;
constructor(){}
ngOnInit(): void {
//     var isChecked = true;
//     if(!this.formValidate.valid){
//       for(var a in this.formValidate.controls){
//         this.formValidate.controls[a].markAsDirty();
//         this.formValidate.controls[a].updatevalueandvalidatity();
//         isChecked = false;

//       }
//     }
//     if(this.formValidate.valid){
//       alert('logged in Successfully')
//       console.log(this.formValidate.value)
//       localStorage.setItem('token',"bvhfbjbvhjb")
//       this.formValidate.value.username=="saacket@gmail.com" ? localStorage.setItem('userType','admin')
      
//     }
// 
}
}
