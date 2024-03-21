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
import { SucessMessageComponent } from './sucess-message/sucess-message.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LoginGuard } from './guards/login.guard';
import { ExpLandingComponent } from './exp-landing/exp-landing.component';
import { ExpLanding2Component } from './exp-landing2/exp-landing2.component';
const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [LoginGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoginGuard] },
  {
    path: 'user-landing',
    component: UserLandingComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'policy-purchase-landing',
    component: PolicyPurchaseLandingComponent,
    canActivate: [UserGuard],
  },
  { path: 'car', component: CarComponent, canActivate: [UserGuard] },
  { path: 'bike', component: BikeComponent, canActivate: [UserGuard] },
  { path: 'truck', component: TruckComponent, canActivate: [UserGuard] },
  { path: 'scooty', component: ScootyComponent, canActivate: [UserGuard] },
  { path: 'test', component: TestingComponent, canActivate: [UserGuard] },
  { path: 'test-2', component: Testing2Component, canActivate: [UserGuard] },
  { path: 'claim', component: ClaimsComponent, canActivate: [UserGuard] },
  {
    path: 'claim-details',
    component: ClaimDetailsComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'admin/landing',
    component: LandingPageComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/claim-requests',
    component: ClaimRequestsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/insurance-requests',
    component: InsuranceRequestsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/view-policy',
    component: ViewPolicyComponent,
    canActivate: [AdminGuard],
  },
  { path: 'test-3', component: Testing3Component, canActivate: [UserGuard] },
  {
    path: 'admin/create-policy',
    component: CreatePolicyComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'claim-details-data/:id',
    component: ClaimDetailsDataComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user-insurance-detail',
    component: UserInsuranceDetailComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'admin/claim-details-data/:id',
    component: ClaimDetailsDataAdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/insurance-details-data/:id',
    component: InsuranceDataAdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'insurance-details/:insuranceId',
    component: InsuranceDetailsComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'user-policy-status',
    component: UserPolicyStatusComponent,
    canActivate: [UserGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] }, // Add this route
  { path: 'success', component: SucessMessageComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'exp-landing', component: ExpLandingComponent },
  { path: 'exp-landing2', component: ExpLanding2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
