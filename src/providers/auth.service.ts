import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) {
  }

  signup(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isLoggedIn(){
    if(this.firebaseAuth.auth.currentUser != null){
      return true;
    }else{
      return false;;
    }
  }

  getLoggedUID() : string{
    return this.firebaseAuth.auth.currentUser.uid;
  }
  
  recover(email):void{
    this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

}