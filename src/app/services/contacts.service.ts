import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Contact } from '../interfaces/contact.model';

@Injectable()
export class ContactsService {

  private api: string = 'https://retoolapi.dev/Yj67v2/data';
  private prefix: string;

  constructor(
    private _http: HttpClient
  ) {
    this.prefix = 'contacts'
  }

  clear(){
    localStorage.clear()
  }

  getInitData():Observable<Contact[]> {
    return this._http.get<Contact[]>(this.api)
  }

  setContact(contact: Contact){
    localStorage.setItem(this.prefix, JSON.stringify(contact));
  }

  setNewContact(contact: Contact){
    const miArrayStr:any = localStorage.getItem(this.prefix);
    const miArray = JSON.parse(miArrayStr);
    const nuevoContacto = contact;
    miArray.push(nuevoContacto);
    localStorage.setItem(this.prefix, JSON.stringify(miArray))
  }

  updateContact(key: number, dato: any){
    const contactos:any = localStorage.getItem(this.prefix);
    let contactosParse = JSON.parse(contactos);
    const indiceProducto = contactosParse.findIndex((producto:any) => producto.id === key);
    contactosParse[indiceProducto] = {...contactosParse[indiceProducto], ...dato};
    localStorage.setItem(this.prefix, JSON.stringify(contactosParse))
  }

  deleteContact(key:number){
    const miArrayStr:any = localStorage.getItem(this.prefix);
    const miArray = JSON.parse(miArrayStr);
    const filtrado = miArray.filter( (dato:any) => dato.id != key )
    localStorage.setItem('contacts', JSON.stringify(filtrado));
  }

  setPrefix(prefix: string){
    return this.prefix = prefix;
  }
}
