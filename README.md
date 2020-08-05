### Pedidos

GET http://localhost:8001
GET http://localhost:8001/test
GET http://localhost:8001/listarPedidoPorUF/:uf
GET http://localhost:8001/listarPedidoPorId/:id

POST http://localhost:8001/criarPedido


### Entregas

GET http://localhost:8002
GET http://localhost:8002/test
GET http://localhost:8002/consultarPrazoEntrega/:uf

POST http://localhost:8002/alterarPrazoEntrega/:uf/:prazoEntrega


