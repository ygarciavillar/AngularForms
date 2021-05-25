import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSetting } from '../interface/user-setting.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUserSettingForm(userSetting: UserSetting): Observable<UserSetting>{
    return of(userSetting)
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime'])
  }
}
