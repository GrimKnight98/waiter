export interface Carrito {
  items:   any[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Link {
  rel:  string;
  href: string;
}
