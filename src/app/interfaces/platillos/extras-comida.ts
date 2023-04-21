export interface ExtrasComida {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  id:           number;
  nombre_extra: string;
}

export interface Link {
  rel:  string;
  href: string;
}
