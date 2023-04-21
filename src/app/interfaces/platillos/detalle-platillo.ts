export interface DetallePlatillo {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  id:           number;
  imagen:       string;
  nombre:       string;
  descripcion:  string;
  ingredientes: string;
  tipo:         number;
  precio:       number;
  status:       number;
  fecha:        Date;
}

export interface Link {
  rel:  string;
  href: string;
}
