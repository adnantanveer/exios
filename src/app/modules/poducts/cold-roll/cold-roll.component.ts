import { Component, OnInit } from '@angular/core';
import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-cold-roll',
  templateUrl: './cold-roll.component.html',
  styleUrls: ['./cold-roll.component.scss']
})
export class ColdRollComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  coldrol = [
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },   {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
    {
      product: "Galvanized",
      quality: "Prime",
      thickness: "0.78",
      width: "42",
      weight: "1078",
      piw: "2897",
      location: "DETROIT",
      coilnumber: "98798"

    },
  ]


  openDialogenquiry(): void {
    const dialogRef = this.dialog.open(EnquirypopUpComponent, {
      width: '250px',
      data: {
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
