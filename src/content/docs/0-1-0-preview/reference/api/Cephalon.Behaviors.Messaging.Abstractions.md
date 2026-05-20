---
title: Namespace Cephalon.Behaviors.Messaging.Abstractions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions
editUrl: false
---

### Interfaces

 [IMessagingBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbinding/)

Adapts a messaging transport to the ABT behavior dispatcher.
Each transport variant (InMemory, RabbitMQ, Kafka, etc.) implements this interface
and is registered in the <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.

 [IMessagingBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-abstractions-imessagingbehaviorbindingregistry/)

Provides lookup and enumeration of all registered <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBinding" data-throw-if-not-resolved="false"></xref> instances.
