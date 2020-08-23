import { Component, OnInit } from '@angular/core';
import { EnquirypopUpComponent } from 'src/app/shared/enquirypop-up/enquirypop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-galvalume',
  templateUrl: './galvalume.component.html',
  styleUrls: ['./galvalume.component.scss']
})
export class GalvalumeComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  galvalume = [
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
    
      data: {
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
