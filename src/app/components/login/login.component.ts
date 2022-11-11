import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {

  public usuario: any = {};

    constructor(public auth : AngularFireAuth,private router: Router ) {
    this.auth.authState.subscribe(user => {
      console.log('Estado del usuario: ', user?.multiFactor);
      if (!user) {
        return;
      } else {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        this.usuario.email = user.email;
        this.usuario.photo = user.photoURL
      }

      if (this.usuario.email.substring(this.usuario.email.indexOf('@')) == "@bbva.com") {
        Swal.fire({
          title: `Exito`,
          text: `Bienvenido ${this.usuario.email}`,
          icon: `success`,
          confirmButtonText: `Ok`
        }).then( ()=>{
          console.log("Hola mundo");
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['dashboard']);
        });
      } else {
        Swal.fire({
          title: `Error`,
          text: `Correo no valido para acceso ${this.usuario.email}`,
          icon: `error`,
          confirmButtonText: `Ok`
        });
      }
    })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }



}
