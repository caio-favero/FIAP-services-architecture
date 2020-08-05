## Tarefas

- [x] GET para listar pedidos por UF

- [x] GET para listar pedidos por id

- [x] POST pra criação de pedidos

- [x] GET para consultar prazo de entrega por UF

- [x] POST para criar/editar SLA com base no UF

- [x] GET em entregas quando criar um pedido

- [x] Comunicação via fila entre APIs


### Pedidos

GET http://localhost:8001

GET http://localhost:8001/test

GET http://localhost:8001/listarPedidoPorUF/:uf

GET http://localhost:8001/listarPedidoPorId/:id

POST http://localhost:8001/criarPedido
```
{
  "status": "AguardandoPagamento",
  "dataCriacao": "10/10/2019",
  "dataEntrega": "20/10/2019",
  "produto": "CamisetaHeringBranca",
  "endereco": "Av.Paulista, 900",
  "uf": "SP",
  "municipio": "SãoPaulo",
  "cep": "04545-800"
}
```


### Entregas

GET http://localhost:8002

GET http://localhost:8002/test

GET http://localhost:8002/consultarPrazoEntrega/:uf

POST http://localhost:8002/alterarPrazoEntrega/:uf/:prazoEntrega

### Repositório

https://github.com/caio-favero/services-architecture
