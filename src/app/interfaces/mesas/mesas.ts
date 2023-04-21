export interface Mesas {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  mesa_id:     number;
  nombre_mesa: string;
  created_at:  Date;
  updated_at:  Date;
  status:      string;
}

export interface Link {
  rel:  string;
  href: string;
}
