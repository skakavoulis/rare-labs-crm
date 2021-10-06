import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentChat = {
    image: 'assets/img/users/user.jpg',
    name: 'Emilio Verdines',
    status: 'Online',
    intro: 'Hi, Annular is a fully compatible with angular material 2, responsive, organized folder structure, clean & customizable code, easy to use and much more...',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
