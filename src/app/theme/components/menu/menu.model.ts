export class Menu {
    constructor(public id: number,
        public title: string | null,
        public routerLink: string | null,
        public href: string | null,
        public icon: string | null,
        public target: string | null,
        public hasSubMenu: boolean,
        public parentId: number,
        public active = true) { }
}