---
title: Namespace Cephalon.Behaviors.Messaging.Registry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-registry
editUrl: false
---

### Classes

 [MessagingBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-registry-messagingbehaviorbindingregistry/)

Default implementation of <xref href="Cephalon.Behaviors.Messaging.Abstractions.IMessagingBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.
Uses a <xref href="System.Collections.Frozen.FrozenDictionary%602" data-throw-if-not-resolved="false"></xref> with <xref href="System.StringComparer.OrdinalIgnoreCase" data-throw-if-not-resolved="false"></xref>
for O(1) lock-free transport id lookup.
