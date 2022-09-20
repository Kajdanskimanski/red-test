import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-dialog-detail-row',
  templateUrl: './dialog-detail-row.component.html',
  styleUrls: ['./dialog-detail-row.component.scss'],
})
export class DialogDetailRowComponent {
  public readonly formGroup: FormGroup;
  public familyName: string = "";
  public firstName: string = "";
  public phone: string = "";
  public email: string = "";
  public fax: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public rowData: any,

  ) {
    console.log("data", this.rowData)

    this.rowData.name.map(data => {
      this.familyName = data.family;
      this.firstName = data.given.map(x => x)
    });


    // this.rowData.address.map(data => {
    //   this.city = data.city;
    //   this.firstName = data.given.map(x => x)
    // });

    if (this.rowData.telecom != undefined) {
      this.rowData.telecom.map(data => {
        this.phone = data[0].map(x => x.value)
        this.email = data[1].map(x => x.value)
        this.fax = data[2].map(x => x.value)
        console.log('phone', this.phone)

      });
    }

    if (rowData.resourceType === 'Patient') {

      this.formGroup = new FormGroup({
        id: new FormControl({ value: rowData.id, disabled: true }),
        name: new FormControl({ value: this.familyName, disabled: true }),
        firstName: new FormControl({ value: this.firstName, disabled: true }),
        birthDate: new FormControl({ value: rowData.birthDate, disabled: true }),
        gender: new FormControl({ value: rowData.gender, disabled: true }),
        // address: new FormControl({ value: rowData.address, disabled: true }),
      });
    }


    if (rowData.resourceType === 'Practitioner') {

      this.formGroup = new FormGroup({
        id: new FormControl({ value: rowData.id, disabled: true }),
        name: new FormControl({ value: this.familyName, disabled: true }),
        firstName: new FormControl({ value: this.firstName, disabled: true }),
        phone: new FormControl({ value: this.phone, disabled: true }),
        email: new FormControl({ value: this.email, disabled: true }),
        fax: new FormControl({ value: this.fax, disabled: true }),
      });
    }
  }
}
