import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu(2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new Menu(3, 'Chat', '/chat', null, 'chat', null, false, 0),
    new Menu(4, 'Performance', null, '#', 'trending_up', null, false, 0, false),
    new Menu(4, 'Time tracker', null, '#', 'access_time', null, false, 0, false),
    new Menu(5, 'Desktop app', null, '#', 'desktop_windows', null, false, 0, false),
    new Menu(6, 'Gift voucher', null, '#', 'card_giftcard', null, false, 0, false),
    new Menu(7, 'Weekly reports', null, '#', 'report', null, false, 0, false),
    new Menu(8, 'E-commerce', null, '#', 'add_shopping_cart', null, false, 0, false)
]

export const horizontalMenuItems = [
    new Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu(2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new Menu(3, 'Chat', '/chat', null, 'chat', null, false, 40),
    new Menu(4, 'Performance', null, '#', 'trending_up', null, false, 0, false),
    new Menu(4, 'Time tracker', null, '#', 'access_time', null, false, 0, false),
    new Menu(5, 'Desktop app', null, '#', 'desktop_windows', null, false, 0, false),
    new Menu(6, 'Gift voucher', null, '#', 'card_giftcard', null, false, 0, false),
    new Menu(7, 'Weekly reports', null, '#', 'report', null, false, 0, false),
    new Menu(8, 'E-commerce', null, '#', 'add_shopping_cart', null, false, 0, false)
]