import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cotiza } from 'src/app/shared/models/cotiza';
import { CotizaService } from 'src/app/shared/services/cotiza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cotiza:Cotiza= new Cotiza();
  fContact:FormGroup;

  constructor(private enviarcorreo:CotizaService,
    private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.fContact = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      name: ['',Validators.required],
      phone: ['',[Validators.required]],
      empresa: ['',[Validators.required]],
      rubro: [''],
      provincia: [''],
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
      this.cotiza.name = this.fContact.get('name').value;
      this.cotiza.email = this.fContact.get('email').value;
      this.cotiza.telf = this.fContact.get('phone').value;
      this.cotiza.empresa = this.fContact.get('empresa').value;
      this.cotiza.rubro = this.fContact.get('rubro').value;
      this.cotiza.provincia = this.fContact.get('provincia').value;
      this.cotiza.message = this.fContact.get('message').value;
      this.enviarcorreo.enviarEmail(this.cotiza).subscribe(
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
      message: '',
      provincia:'',
      empresa: '',
      rubro:''
    })
    this.cotiza = new Cotiza();
  }

}
