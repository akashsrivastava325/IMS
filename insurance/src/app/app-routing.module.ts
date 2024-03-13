import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { PolicyPurchaseLandingComponent } from './policy-purchase-landing/policy-purchase-landing.component';
import { CarComponent } from './insurance-form/car/car.component';
import { BikeComponent } from './insurance-form/bike/bike.component';
import { TruckComponent } from './insurance-form/truck/truck.component';
import { ScootyComponent } from './insurance-form/scooty/scooty.component';
import { TestingComponent } from './testing/testing.component';
import { Testing2Component } from './testing-2/testing-2.component';
import { Testing3Component } from './testing-3/testing-3.component';
import { UserPolicyStatusComponent } from './user-policy-status/user-policy-status.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { ClaimRequestsComponent } from './admin/claim-requests/claim-requests.component';
import { InsuranceRequestsComponent } from './admin/insurance-requests/insurance-requests.component';
import { ViewPolicyComponent } from './admin/view-policy/view-policy.component';
import { CreatePolicyComponent } from './admin/create-policy/create-policy.component';
import { ClaimDetailsDataComponent } from './claim-details-data/claim-details-data.component';
import { ClaimDetailsDataAdminComponent } from './admin/claim-details-data-admin/claim-details-data-admin.component';
import { InsuranceDataAdminComponent } from './admin/insurance-data-admin/insurance-data-admin.component';
import { UserInsuranceDetailComponent } from './user-insurance-detail/user-insurance-detail.component';
import { UserGuard } from './guards/user-auth.guard';
import { AdminGuard } from './guards/admin-auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-landing', component: UserLandingComponent },
  {
    path: 'policy-purchase-landing',
    component: PolicyPurchaseLandingComponent,
  },
  { path: 'car', component: CarComponent },
  { path: 'bike', component: BikeComponent },
  { path: 'truck', component: TruckComponent },
  { path: 'scooty', component: ScootyComponent },
  { path: 'test', component: TestingComponent },
  { path: 'test-2', component: Testing2Component },
  { path: 'claim', component: ClaimsComponent },
  {
    path: 'claim-details',
    component: ClaimDetailsComponent,
  },
  {
    path: 'admin/landing',
    component: LandingPageComponent,
  },
  {
    path: 'admin/claim-requests',
    component: ClaimRequestsComponent,
  },
  {
    path: 'admin/insurance-requests',
    component: InsuranceRequestsComponent,
  },
  {
    path: 'admin/view-policy',
    component: ViewPolicyComponent,
  },
  { path: 'test-3', component: Testing3Component },
  {
    path: 'admin/create-policy',
    component: CreatePolicyComponent,
  },
  {
    path: 'claim-details-data/:id',
    component: ClaimDetailsDataComponent,
  },
  {
    path: 'user-insurance-detail',
    component: UserInsuranceDetailComponent,
  },
  {
    path: 'admin/claim-details-data/:id',
    component: ClaimDetailsDataAdminComponent,
  },
  {
    path: 'admin/insurance-details-data/:id',
    component: InsuranceDataAdminComponent,
  },
  {
    path: 'insurance-details/:insuranceId',
    component: InsuranceDetailsComponent,
  },
  {
    path: 'user-policy-status',
    component: UserPolicyStatusComponent,
  },
  { path: 'login', component: LoginComponent }, // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// create 3 new component
// claim-details/:id and admin/insurance-details/:id and admin/claim-details/:id
