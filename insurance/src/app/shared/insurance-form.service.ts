import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { InsuranceForm } from '../models/insurance-form.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InsuranceFormService {
  list: InsuranceForm[] = [];
  url: string = environment.apiBaseUrl + '/InsuranceForms';
  formData: InsuranceForm = new InsuranceForm();
  formSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  postInsuranceForm() {
    return this.http.post(this.url, this.formData);
  }

  putInsuranceForm() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  deleteInsuranceForm(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  // Resets the form and model data
  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new InsuranceForm();
    this.formSubmitted = false;
  }

  getInsuranceForms(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  createInsuranceForm(insuranceFormData: any): Observable<any> {
    return this.http.post<any>(this.url, insuranceFormData);
  }

  getInsuranceFormsMore(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://localhost:7159/api/InsuranceForms/WithPolicyData'
    );
  }

  getInsuranceById(id: number): Observable<InsuranceForm> {
    return this.http.get<InsuranceForm>(`${this.url}/${id}`);
  }

  putInsurance(id: number, data: any): Observable<any> {
    console.log(data);
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
}
