import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public features: any[] = [];

  constructor() { }

  ngOnInit() {
    this.features = this.getFeatures();
  }

  private getFeatures = () =>
    [{
      icon: 'supervisor_account',
      title: 'User management',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: true,
      url: '/users'
    },
    {
      icon: 'chat',
      title: 'Chat',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: true,
      url: '/chat'
    },
    {
      icon: 'trending_up',
      title: 'Performace',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    },
    {
      icon: 'access_time',
      title: 'Time Tracker',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    },
    {
      icon: 'desktop_windows',
      title: 'Desktop app',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    },
    {
      icon: 'card_giftcard',
      title: 'Gift Voucher',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    },
    {
      icon: 'report',
      title: 'Weekly Reports',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    },
    {
      icon: 'add_shopping_cart',
      title: 'E-commerce',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      active: false
    }
    ];

}
