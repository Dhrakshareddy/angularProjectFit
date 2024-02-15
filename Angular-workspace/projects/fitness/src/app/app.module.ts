import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { GuestloginComponent } from './guestlogin/guestlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { MembershipComponent } from './membership/membership.component';
import { TrainerloginComponent } from './trainerlogin/trainerlogin.component';
import { ProgramsComponent } from './programs/programs.component';
import { VerticalnavComponent } from './userfolder/verticalnav/verticalnav.component';




import { RouterModule } from '@angular/router';

import { HomenavComponent } from './userfolder/homenav/homenav.component';
import { StoreComponent } from './userfolder/store/store.component';
import { MoreComponent } from './userfolder/more/more.component';
import { PlansComponent } from './userfolder/plans/plans.component';
import { BurnComponent } from './userfolder/burn/burn.component';
import { DrinkwaterComponent } from './userfolder/drinkwater/drinkwater.component';
import { FitnessStoreComponent } from './userfolder/fitness-store/fitness-store.component';
import { GoalsAndBudgetsComponent } from './userfolder/goals-and-budgets/goals-and-budgets.component';
import { HealthLogsComponent } from './userfolder/health-logs/health-logs.component';
import { HelpAndSupportComponent } from './userfolder/help-and-support/help-and-support.component';
import { InviteComponent } from './userfolder/invite/invite.component';
import { ProgressReportsComponent } from './userfolder/progress-reports/progress-reports.component';
import { RemindersComponent } from './userfolder/reminders/reminders.component';
import { SettingsComponent } from './userfolder/settings/settings.component';
import { TasksAndLeaderboardComponent } from './userfolder/tasks-and-leaderboard/tasks-and-leaderboard.component';

import { UpgradeComponent } from './userfolder/upgrade/upgrade.component';
import { UserProfileComponent } from './userfolder/user-profile/user-profile.component';
import { TrackStepsComponent } from './userfolder/tracksteps/tracksteps.component';


import { ViewalltrackersComponent } from './userfolder/viewalltrackers/viewalltrackers.component';
import { EquipmentComponent } from './trainerfolder/equipment/equipment.component';
import { WorkoutComponent } from './trainerfolder/workout/workout.component';
import { ProgressComponent } from './trainerfolder/progress/progress.component';
import { TrainerComponent } from './trainerfolder/trainer/trainer.component';
import { TrainerUsersComponent } from './trainerfolder/trainer-users/trainer-users.component';
import { UsersProgressComponent } from './trainerfolder/users-progress/users-progress.component';
import { ExerciseComponent } from './trainerfolder/exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    UserloginComponent,
    GuestloginComponent,
    DoctorloginComponent,
    MembershipComponent,
    TrainerloginComponent,
    ProgramsComponent,
    VerticalnavComponent,
    VerticalnavComponent,
    HomenavComponent,
    StoreComponent,
    MoreComponent,
    PlansComponent,
    BurnComponent,
    DrinkwaterComponent,
    FitnessStoreComponent,
    GoalsAndBudgetsComponent,
    HealthLogsComponent,
    HelpAndSupportComponent,
    InviteComponent,
    ProgressReportsComponent,
    RemindersComponent,
    SettingsComponent,
    TasksAndLeaderboardComponent,
    TrackStepsComponent,
    UpgradeComponent,
    UserProfileComponent,
    
    
    ViewalltrackersComponent,
    EquipmentComponent,
    WorkoutComponent,
    ProgressComponent,
    TrainerComponent,
    ExerciseComponent,
    TrainerUsersComponent,
    UsersProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [WebsiteComponent]
})
export class AppModule { }
