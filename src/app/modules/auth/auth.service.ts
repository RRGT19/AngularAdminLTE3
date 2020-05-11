import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "./auth.models";
import {Router} from "@angular/router";

/**
 * The authentication service is used to login and logout of the application.
 * The logged in user details are stored in local storage so the user will stay
 * logged in if they refresh the browser and also between browser sessions until they logout.
 */

@Injectable()
export class AuthService {

  private storage: Storage = localStorage;

  private bsCurrentUser: BehaviorSubject<IUser>;

  // Observable that can be used when you want a component to reactively update when a user logs in or out.
  private readonly currentUser$: Observable<IUser>;

  constructor(
    private router: Router
  ) {
    this.bsCurrentUser = new BehaviorSubject<IUser>(this.user);
    this.currentUser$ = this.bsCurrentUser.asObservable();
  }

  /**
   * Property that can be used when you just want to get the current value of the logged in user
   * but don't need to reactively update when it changes.
   */
  public get currentUserValue(): IUser {
    if (!this.bsCurrentUser.value) {
      this.bsCurrentUser = new BehaviorSubject<IUser>(this.user);
    }
    return this.bsCurrentUser.value;
  }

  /**
   * Sign in a user with an email address and password.
   * @param email       The user's email address
   * @param password    The user's password
   */
  login(email: string, password: string): Promise<any> {
    const user: IUser = {firstName: 'Test', email: 'test@gmail.com'};
    this.storage.setItem('currentUser', JSON.stringify(user));
    this.bsCurrentUser.next(user);
    return Promise.resolve();
  }

  /**
   * Signs out the current user.
   */
  logout(): void {
    this.clearAll();
    this.router.navigateByUrl('/auth/login');
  }

  /**
   * Sends a password reset email to the given email address.
   * @param email   The email address with the password to be reset.
   */
  sendPasswordResetEmail(email: string): Promise<void> {
    return Promise.resolve();
  }

  private clearAll() {
    this.storage.clear();
    this.bsCurrentUser.next(null);
  }

  private get user() {
    return JSON.parse(this.storage.getItem('currentUser'));
  }

}
