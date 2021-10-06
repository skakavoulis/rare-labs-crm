import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class VerticalMenuComponent implements OnInit {
  @Input('menuItems') menuItems: any;
  @Input('menuParentId') menuParentId: any;
  parentMenu?: Array<any>;
  public settings: Settings;
  constructor(public appSettings: AppSettings, public menuService: MenuService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter((item: any) => item.parentId == this.menuParentId);
  }

  onClick(menuId: any) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuItems, menuId);
  }

}
