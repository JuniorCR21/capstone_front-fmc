import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import  Swal  from 'sweetalert2';
import { Contact } from './shared/models/contact';
import { ContactService } from './shared/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacto:Contact = new Contact();
  fContact:FormGroup;

  constructor(private enviarcorreo:ContactService,
    private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.fContact = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      name: ['',Validators.required],
      phone: ['',[Validators.required]],
      message: ['']
    })
  }

  send(){
    if(this.fContact.invalid == true){
      this.toastr.error('Complete los campos requeridos','Error',{
        timeOut:2000,
        progressBar: true,
        progressAnimation: 'increasing',
      })
    }else{
      //    this.enviarcorreo.enviarEmail(this.contacto).subscribe()
      this.contacto.name = this.fContact.get('name').value;
      this.contacto.email = this.fContact.get('email').value;
      this.contacto.telf = this.fContact.get('phone').value;
      this.contacto.message = this.fContact.get('message').value;
      this.enviarcorreo.enviarEmail(this.contacto).subscribe(
        email =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado',
            text:'Nos estaremos contactando contigo',
            showConfirmButton: false,
            timer: 1500
          })
        },(error) =>{
          this.toastr.error('Vuelva a intentar','Error al Enviar',{
            timeOut:2000,
            progressBar: true,
            progressAnimation: 'increasing',
          })
        }
      )
      this.limpiarCampos();
    }
  }

  limpiarCampos(){
    this.fContact.patchValue({
      email: '',
      name: '',
      phone:'',
      message: ''
    })
    this.contacto = new Contact();
  }

}
