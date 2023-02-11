import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './widgets/contact/contact.component';

@NgModule({
  declarations: [ContactsComponent, ChatroomComponent, ProfileComponent, ContactComponent],
  imports: [CommonModule],
  exports: [ContactsComponent, ChatroomComponent, ProfileComponent],
})
export class MessagingModule {}
