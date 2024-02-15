import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';
import { VerticalnavComponent } from './userfolder/verticalnav/verticalnav.component';
import { HomenavComponent } from './userfolder/homenav/homenav.component';
import { PlansComponent } from './userfolder/plans/plans.component';
import { StoreComponent } from './userfolder/store/store.component';
import { MoreComponent } from './userfolder/more/more.component';
import { BurnComponent } from './userfolder/burn/burn.component';
import { TrackStepsComponent } from './userfolder/tracksteps/tracksteps.component';
import { DrinkwaterComponent } from './userfolder/drinkwater/drinkwater.component';
import { ViewalltrackersComponent } from './userfolder/viewalltrackers/viewalltrackers.component';
import { FitnessStoreComponent } from './userfolder/fitness-store/fitness-store.component';
import { HealthLogsComponent } from './userfolder/health-logs/health-logs.component';
import { ProgressReportsComponent } from './userfolder/progress-reports/progress-reports.component';
import { RemindersComponent } from './userfolder/reminders/reminders.component';
import { SettingsComponent } from './userfolder/settings/settings.component';
import { HelpAndSupportComponent } from './userfolder/help-and-support/help-and-support.component';
import { TrainerUsersComponent } from './trainerfolder/trainer-users/trainer-users.component';
import { ExerciseComponent } from './trainerfolder/exercise/exercise.component';
import { WorkoutComponent } from './trainerfolder/workout/workout.component';
import { ProgressComponent } from './trainerfolder/progress/progress.component';
import { TrainerComponent } from './trainerfolder/trainer/trainer.component';
import { WebsiteComponent } from './website/website.component';
import { UserListComponent } from './adminfolder/user-list/user-list.component';
import { UserFormComponent } from './adminfolder/user-form/user-form.component';
import { DoctorListComponent } from './adminfolder/doctor-list/doctor-list.component';
import { DoctorComponent } from './adminfolder/doctor/doctor.component';
import { TrainerListComponent } from './adminfolder/trainer-list/trainer-list.component';
import { TrainerregComponent } from './adminfolder/trainerreg/trainerreg.component';
import { BranchesComponent } from './adminfolder/branches/branches.component';
import { EquipmentComponent } from './trainerfolder/equipment/equipment.component';
import { MembershipComponent } from './adminfolder/membership/membership.component';
import { AdminnavComponent } from './adminfolder/adminnav/adminnav.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'userlogin',component:UserloginComponent
  },
  {
    path:'programs',component:ProgramsComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'verticalnav',component:VerticalnavComponent
  },

  {
    path:'home1',component:HomenavComponent
  },

  {
    path:'plans',component:PlansComponent
  },
  {
    path:'store',component:StoreComponent
  },
  {
    path:'more',component:MoreComponent
  },
  {
    path:'adminnav',component:AdminnavComponent
  },
 
 

  { path: 'burn', component: BurnComponent },
  { path: 'track-steps', component: TrackStepsComponent }, // Create TrackStepsComponent and other tracker components
  { path: 'drink-water', component: DrinkwaterComponent },
  { path: 'view-all', component:  ViewalltrackersComponent},
  // Add more routes as needed
  // { path: '', redirectTo: '/burn', pathMatch: 'full' }, // Default route
  
  

 
  
    { path: 'fitness-store', component: FitnessStoreComponent },
    { path: 'health-logs', component: HealthLogsComponent },
    { path: 'progress-reports', component: ProgressReportsComponent },
    { path: 'reminders', component: RemindersComponent },
    { path: 'help-support', component: HelpAndSupportComponent },
    { path: 'settings', component: SettingsComponent },
    // { path: '**', redirectTo: 'fitness-store', pathMatch: 'full' },
    { path: '', component: TrackStepsComponent },


    { path: 'users', component: TrainerUsersComponent },
    { path: 'exercise', component: ExerciseComponent },
    { path: 'workout', component: WorkoutComponent },
    { path: 'progress', component: ProgressComponent },

    { path: 'trainer', component: TrainerComponent },




    { path: 'users', component: UserListComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },

  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/edit/:id', component: DoctorComponent },
  { path: 'doctors/add', component: DoctorComponent },

  { path: 'trainers', component: TrainerListComponent },
  { path: 'trainers/edit/:id', component: TrainerregComponent },
  { path: 'trainers/add', component: TrainerregComponent },
  
  { path: 'equipment', component: EquipmentComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'membership', component: MembershipComponent },
   
    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
