export interface Bebidas {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  id:           number;
  nombre:       string;
  precio:       number;
  presentacion: string;
  imagen:       string;
}

export interface Link {
  rel:  string;
  href: string;
}
