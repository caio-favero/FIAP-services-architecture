// Avaliação Substitutiva
// Services Architecture / API / Mobile Architecture
// Prof.Tadeu Barbosa
// Implementar seguindo as melhores práticas o diagrama abaixo:

// Descrição do Cenário: O usuário fará acesso ao microserviço PedidoService através de uma API Rest, na qual ele poderá criar um novo pedido.No momento de criação do Pedido, será calculada a Data de Entrega prevista do Pedido.

// A Data de Entrega Prevista é calculada pela Data de Criação do Pedido + Prazo de Entrega.Esse Prazo de entrega é obtido através da consulta ao microserviço EntregaService.Deverá ser passado como argumento o Estado(UF) do endereço de Entrega do Pedido.O microserviço EntregaService receberá a UF, consultará no banco o SLA respectivo e retornará esse valor para o PedidoService.

// Para simularmos a alteração de um Prazo de Entrega, vamos criar um método no EntregaService que altere no banco de dados o SLA para uma determinada UF.Após a alteração ter sido feita no banco de dados, devemos disparar uma mensagem para o Broker(Kafka) dizendo qual UF que sofreu alteração.

// O PedidoService estará “ouvindo” as mensagens que chegam nessa fila e receberá essa mensagem com a UF que sofreu a alteração. Nesse momento devemos consultar todos os pedidos com status diferente de ‘ENTREGUE’ e que a UF de entrega seja a mesma que recebemos na mensagem. Dessa forma devemos atualizar a data de Entrega com o novo SLA para aquela determinada UF.

// Se desejar implementar um terceiro microserviço responsável pelo ServiceDiscovery ou padrões de resiliência no caso do EntregaService estar indisponível, será um ponto diferencial no seu trabalho.

// Sugestões de Alguns Métodos que podem ser criados nos microserviços:


// PedidoService:
// POST / criarPedido
// GET / listarPedidoPorUF / { UF }
// GET / listarPedidoPorId / { ID }
// EntregaService
// GET / consultarPrazoEntrega / { UF }
// POST / alterarPrazoEntrega / { UF } / { prazoEntrega }
// Sugestão dos atributos das classes de domínio envolvidas:

const Pedido = {
  "id": "1",
  "status": "Aguardando Pagamento",
  "dataCriacao": "10/10/2019",
  "dataEntrega": "20/10/2019",
  "produto": "Camiseta Hering Branca",
  "endereco": "Av. Paulista, 900",
  "uf": "SP",
  "municipio": "São Paulo",
  "cep": "04545-800"
}

const SLA = {
  "id": "1",
  "UF": "SP",
  "SLA": "10"
}