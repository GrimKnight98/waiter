export interface ResumenPedidos {
  items: Items;
}

export interface Items {
  pedidos_emitidos:    number;
  pedidos_enproceso:   number;
  pedidos_completados: number;
}
