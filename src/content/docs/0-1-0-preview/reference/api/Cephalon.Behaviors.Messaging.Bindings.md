---
title: Namespace Cephalon.Behaviors.Messaging.Bindings
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings
editUrl: false
---

### Classes

 [InMemoryTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-inmemorytransportbinding/)

In-memory messaging transport binding (transport ID: <code>"in-memory"</code>).
Uses a bounded <xref href="System.Threading.Channels.Channel%601" data-throw-if-not-resolved="false"></xref> with
<xref href="System.Threading.Channels.BoundedChannelFullMode.Wait" data-throw-if-not-resolved="false"></xref> backpressure internally.
No external dependencies — suitable for testing and local development.

 [KafkaTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-kafkatransportbinding/)

Kafka messaging transport binding (transport ID: <code>"kafka"</code>).
Consumes messages from a Kafka topic and dispatches them through the ABT behavior dispatcher.
Manually commits offsets after successful dispatch. Supports partition assignment/revocation logging.

 [RabbitMqTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-bindings-rabbitmqtransportbinding/)

RabbitMQ messaging transport binding (transport ID: <code>"rabbitmq"</code>).
Uses a lazy connection strategy — the broker connection is established only
on <xref href="Cephalon.Behaviors.Messaging.Bindings.RabbitMqTransportBinding.StartAsync(Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor%2cCephalon.Behaviors.Services.BehaviorDispatcher%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>, not at construction time.
