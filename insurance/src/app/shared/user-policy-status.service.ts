import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';
import { UserPolicyStatus } from '../models/user-policy-status.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserPolicyStatusService {
  url: string = environment.apiBaseUrl + '/InsuranceForms/WithPolicyData';

  constructor(private http: HttpClient) {}

  getUserPolicyStatus(): Observable<UserPolicyStatus[]> {
    return this.http.get<UserPolicyStatus[]>(this.url);
  }

  createUserPolicyStatus(userPolicyStatusData: any): Observable<any> {
    return this.http.post<any>(this.url, userPolicyStatusData);
  }

  updateUserPolicyStatus(
    userPolicyStatusData: UserPolicyStatus
  ): Observable<any> {
    return this.http.put<any>(
      `${this.url}/${userPolicyStatusData.id}`,
      userPolicyStatusData
    );
  }

  deleteUserPolicyStatus(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getInsuranceDetails(insuranceId: number): Observable<any> {
    return this.http
      .get<any[]>(this.url)
      .pipe(map((data: any[]) => data.find((item) => item.id === insuranceId)));
  }

  // Add any additional methods as needed
}
