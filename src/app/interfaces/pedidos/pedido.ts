export interface Pedidos {
  items:   Item[];
  hasMore: boolean;
  limit:   number;
  offset:  number;
  count:   number;
  links:   Link[];
}

export interface Item {
  id:           number;
  fecha_pedido: Date;
  nombre_mesa:  string;
  status:       string;
}

export interface Link {
  rel:  string;
  href: string;
}
