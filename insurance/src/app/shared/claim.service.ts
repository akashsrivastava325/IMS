import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  url: string = environment.apiBaseUrl + '/Claims';

  constructor(private http: HttpClient) {}

  postClaim(claimData: any): Observable<any> {
    return this.http.post<any>(this.url, claimData);
  }

  putClaim(claimId: number, claimData: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${claimId}`, claimData);
  }

  deleteClaim(claimId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${claimId}`);
  }

  getClaims(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getClaim(claimId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${claimId}`);
  }

  getPolicyNamesByUserId(userId: number): Observable<any[]> {
    const apiUrl = `${this.url}/GetPolicyNamesByUserId/${userId}`;
    return this.http.get<any[]>(apiUrl);
  }

  getClaimsWithPolicyNames(): Observable<any[]> {
    const apiUrl = `${this.url}/WithUserAndPolicy`;
    return this.http.get<any[]>(apiUrl);
  }

  resetForm(form: NgForm) {
    form.form.reset();
  }
}
