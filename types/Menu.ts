export interface Menu {
  documentId: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  title: string;
  path: string;
  externalPath: null;
  related?: {
    documentId: string;
    __type: string;
    [key: string]: any;
  };
  items?: MenuItem[];
}
