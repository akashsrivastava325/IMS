import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { PolicyDetail } from './policy-detail.model';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PolicyDetailService {
  list: PolicyDetail[] = [];
  url: string = environment.apiBaseUrl + '/Policies';
  formData: PolicyDetail = new PolicyDetail();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  postPolicyDetails() {
    return this.http.post(this.url, this.formData);
  }

  putPolicyDetail() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  deletePolicyDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  // Resets the form and model data
  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new PolicyDetail();
    this.formSubmitted = false;
  }

  getPolicyDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  createPolicy(policyData: any): Observable<any> {
    return this.http.post<any>(this.url, policyData);
  }

  getPolicyNameById(policyId: number): Observable<string> {
    return this.http.get<any>(`${this.url}/${policyId}`).pipe(
      map((response: any) => {
        if (response && response.name) {
          return response.name; // Return the policy name
        } else {
          // Handle the case where the response or 'name' property is missing
          throw new Error('Invalid response or missing policy name');
        }
      })
    );
  }
}
