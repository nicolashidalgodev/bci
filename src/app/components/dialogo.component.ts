import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../interfaces/contact.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-dialog',
  template: `
    <h1 mat-dialog-title>Editar contacto</h1>
    <div mat-dialog-content>
      <form [formGroup]="editForm">
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Nombre</mat-label>
          <input matInput type="text" name="nombre" formControlName="nombre" [value]="data.nombre">
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Nombre</mat-label>
          <input matInput type="text" name="cuenta" formControlName="cuenta" [value]="data.cuenta">
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-button (click)="onGuardar()" cdkFocusInitial>Actualizar</button>
    </div>
  `,
})
export class MyDialogComponent {

  editForm = new FormGroup({
    nombre: new FormControl(this.data.nombre, [Validators.required, Validators.minLength(3)]),
    cuenta: new FormControl(this.data.cuenta, [Validators.required, Validators.minLength(3)]),
  })

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {}

  onGuardar() {
    const resultado = {id: this.data.id, ...this.editForm.value}
    this.dialogRef.close(resultado);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
