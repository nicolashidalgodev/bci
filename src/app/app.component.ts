import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './components/dialogo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  contactForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3) ]),
    cuenta: new FormControl('', [Validators.required, Validators.minLength(3) ]),
  })

  contacts: any[] = [];
  error: string | null = null;

  constructor(
    private _contactService: ContactsService,
    private dialog: MatDialog
  ){
    _contactService.clear();
  }

  ngOnInit(){
    this._contactService.getInitData().subscribe(
      (res:any) => this._contactService.setContact( res ),
      (error: string) => {
        this.error = 'Ocurrió un error al obtener los datos.';
        console.error(error);
      },
      () => this.getContactsFromLocalStorage()
    )
  }

  numberOnly(event:any){
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


  getContactsFromLocalStorage(){
    const contactos: any =  localStorage.getItem('contacts');
    if(contactos){
      this.contacts = JSON.parse(contactos)
    }
  }

  addContact(contact: any){
    const ls:any = localStorage.getItem('contacts')
    const parse = JSON.parse(ls);
    const id:number = (parse.length > 0) ? parse[parse.length - 1].id + 1 : 1;
    const nuevoContacto = { id, ...contact }
    this._contactService.setNewContact( nuevoContacto ),
    this.getContactsFromLocalStorage()
  }

  showModal(key: number){

    const dato: any = localStorage.getItem('contacts');
    const filtrar = JSON.parse(dato).filter( (contact: any) => contact.id == key)[0]

    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: filtrar
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      console.log('The dialog was closed', result);
      this.editContact(result.id, result)
    });
  }

  editContact(key: number, val: any){
    this._contactService.updateContact(key, val)
    this.getContactsFromLocalStorage()
  }

  deleteContact(key: number){
    this._contactService.deleteContact(key)
    this.getContactsFromLocalStorage()
  }

}
