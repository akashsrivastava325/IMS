import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { PolicyPurchaseLandingComponent } from './policy-purchase-landing/policy-purchase-landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarComponent } from './insurance-form/car/car.component';
import { BikeComponent } from './insurance-form/bike/bike.component';
import { TruckComponent } from './insurance-form/truck/truck.component';
import { ScootyComponent } from './insurance-form/scooty/scooty.component'; // Import FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { Testing2Component } from './testing-2/testing-2.component';
import { Testing3Component } from './testing-3/testing-3.component';
import { UserPolicyStatusComponent } from './user-policy-status/user-policy-status.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimDetailsComponent } from './claim-details/claim-details.component';
import { LandingPageComponent } from './admin/landing-page/landing-page.component';
import { ViewPolicyComponent } from './admin/view-policy/view-policy.component';
import { InsuranceRequestsComponent } from './admin/insurance-requests/insurance-requests.component';
import { ClaimRequestsComponent } from './admin/claim-requests/claim-requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UserDataAccess } from './helper/userDataAccess';
import { CreatePolicyComponent } from './admin/create-policy/create-policy.component';
import { ClaimDetailsDataComponent } from './claim-details-data/claim-details-data.component';
import { ClaimDetailsDataAdminComponent } from './admin/claim-details-data-admin/claim-details-data-admin.component';
import { InsuranceDataAdminComponent } from './admin/insurance-data-admin/insurance-data-admin.component';
import { UserInsuranceDetailComponent } from './user-insurance-detail/user-insurance-detail.component';
import { NavBar2Component } from './nav-bar-2/nav-bar-2.component';
import { SucessMessageComponent } from './sucess-message/sucess-message.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NavbarUser1Component } from './navbar-user-1/navbar-user-1.component';
import { NavbarAdmin1Component } from './navbar-admin-1/navbar-admin-1.component';
import { ExpLandingComponent } from './exp-landing/exp-landing.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { register } from 'swiper/element/bundle';
import { ExpLanding2Component } from './exp-landing2/exp-landing2.component';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    UserLandingComponent,
    PolicyPurchaseLandingComponent,
    NavbarComponent,
    CarComponent,
    BikeComponent,
    TruckComponent,
    ScootyComponent,
    TestingComponent,
    Testing2Component,
    Testing3Component,
    UserPolicyStatusComponent,
    InsuranceDetailsComponent,
    ClaimsComponent,
    ClaimDetailsComponent,
    LandingPageComponent,
    ViewPolicyComponent,
    InsuranceRequestsComponent,
    ClaimRequestsComponent,
    CreatePolicyComponent,
    ClaimDetailsDataComponent,
    ClaimDetailsDataAdminComponent,
    InsuranceDataAdminComponent,
    UserInsuranceDetailComponent,
    NavBar2Component,
    SucessMessageComponent,
    UnauthorizedComponent,
    NavbarUser1Component,
    NavbarAdmin1Component,
    ExpLandingComponent,
    ExpLanding2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxSliderModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserDataAccess],
  bootstrap: [AppComponent],
})
export class AppModule {}
