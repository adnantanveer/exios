import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isnotHomeRoute(){
    return this.router.url !== '/';

  }
  isHomeRoute(){
    return this.router.url === '/';

  }

  openDialogsignin(): void {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '600px',
      height: '95vh',

      data: {
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialogsignup(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '600px',
      height: '95vh',
      data: {
        
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
