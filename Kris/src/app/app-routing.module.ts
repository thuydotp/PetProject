import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationModule } from './Conversation/conversation.module';
import { KrisbotModule } from './Krisbot/krisbot.module';
import { ProfileModule } from './Profile/profile.module';
import { AccountModule } from './Account/account.module';
import { AdminModule } from './Admin/admin.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [  
  { path: '', redirectTo: '/conversation', pathMatch: 'full' },  
  { path: 'conversation', loadChildren: './Conversation/conversation.module#ConversationModule'},
  { path: 'account', loadChildren: './Account/account.module#AccountModule'},
  { path: 'admin', loadChildren: './Admin/admin.module#AdminModule'},
  { path: 'krisbot', loadChildren: './Krisbot/krisbot.module#KrisbotModule'},
  { path: 'profile', loadChildren: './Profile/profile.module#ProfileModule'}
];

@NgModule({
  imports: [
    CommonModule,
    AccountModule,
    AdminModule,
    ConversationModule,
    KrisbotModule,
    ProfileModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
