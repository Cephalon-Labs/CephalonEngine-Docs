---
title: Interface IBehaviorTopologyBuilder
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Fluent builder for declaring behavior topology: pattern, transports, and feature options.

```csharp
public interface IBehaviorTopologyBuilder
```

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsCqrs"></a> AsCqrs\(\)

Declares this behavior as CQRS-shaped (command/query split, 200/202 HTTP semantics).

```csharp
IBehaviorTopologyBuilder AsCqrs()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsDirect"></a> AsDirect\(\)

Declares this behavior as direct (no architectural pattern — input → handler → output, 200/204 HTTP).

```csharp
IBehaviorTopologyBuilder AsDirect()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsDurableExecution"></a> AsDurableExecution\(\)

Declares this behavior as a durable execution workflow with event-store replay semantics.

```csharp
IBehaviorTopologyBuilder AsDurableExecution()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsEventDriven"></a> AsEventDriven\(\)

Declares this behavior as event-driven (fire-and-forget, 202 HTTP, fanout).

```csharp
IBehaviorTopologyBuilder AsEventDriven()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsProcessManager"></a> AsProcessManager\(\)

Declares this behavior as a process manager step (long-running, durable checkpoint).

```csharp
IBehaviorTopologyBuilder AsProcessManager()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsSaga"></a> AsSaga\(\)

Declares this behavior as a saga step (stateful, compensation chain).

```csharp
IBehaviorTopologyBuilder AsSaga()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_AsSagaChoreography"></a> AsSagaChoreography\(\)

Declares this behavior as a choreography-based saga step (event-reaction coordination).

```csharp
IBehaviorTopologyBuilder AsSagaChoreography()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_Build_System_String_"></a> Build\(string\)

Builds the final descriptor. Called internally by the engine — do not call directly.

```csharp
BehaviorTopologyDescriptor Build(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [BehaviorTopologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologydescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_RequireFeatureFlag_System_String_"></a> RequireFeatureFlag\(string\)

Requires one Cephalon feature flag to be enabled before the behavior can execute.

```csharp
IBehaviorTopologyBuilder RequireFeatureFlag(string featureFlagId)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The feature-flag identifier that must resolve to enabled.

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_RequireFeatureFlags_System_String___"></a> RequireFeatureFlags\(params string\[\]\)

Requires all requested Cephalon feature flags to be enabled before the behavior can execute.

```csharp
IBehaviorTopologyBuilder RequireFeatureFlags(params string[] featureFlagIds)
```

#### Parameters

`featureFlagIds` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The feature-flag identifiers that must resolve to enabled.

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaGrpc"></a> ViaGrpc\(\)

Adds the gRPC transport.

```csharp
IBehaviorTopologyBuilder ViaGrpc()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaHttpGraphQl"></a> ViaHttpGraphQl\(\)

Adds the GraphQL over HTTP transport (queries and mutations).

```csharp
IBehaviorTopologyBuilder ViaHttpGraphQl()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaHttpGraphQlSse"></a> ViaHttpGraphQlSse\(\)

Adds the GraphQL subscriptions via Server-Sent Events transport.

```csharp
IBehaviorTopologyBuilder ViaHttpGraphQlSse()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaHttpGraphQlWs"></a> ViaHttpGraphQlWs\(\)

Adds the GraphQL subscriptions via WebSocket transport.

```csharp
IBehaviorTopologyBuilder ViaHttpGraphQlWs()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaHttpJsonRpc"></a> ViaHttpJsonRpc\(\)

Adds the JSON-RPC 2.0 over HTTP transport.

```csharp
IBehaviorTopologyBuilder ViaHttpJsonRpc()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaHttpSse"></a> ViaHttpSse\(\)

Adds the raw Server-Sent Events push transport.

```csharp
IBehaviorTopologyBuilder ViaHttpSse()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaInMemory"></a> ViaInMemory\(\)

Adds the in-memory transport (zero-infra, for tests and local dev).

```csharp
IBehaviorTopologyBuilder ViaInMemory()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaKafka"></a> ViaKafka\(\)

Adds the Kafka transport.

```csharp
IBehaviorTopologyBuilder ViaKafka()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaRabbitMq"></a> ViaRabbitMq\(\)

Adds the RabbitMQ (AMQP) transport.

```csharp
IBehaviorTopologyBuilder ViaRabbitMq()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_ViaWebSocket"></a> ViaWebSocket\(\)

Adds the raw WebSocket bi-directional transport.

```csharp
IBehaviorTopologyBuilder ViaWebSocket()
```

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_WithApiSurface_System_String_System_String_"></a> WithApiSurface\(string, string\)

Overrides the logical API surface projected by route-shaped transport adapters.

```csharp
IBehaviorTopologyBuilder WithApiSurface(string groupPath, string operationPath)
```

#### Parameters

`groupPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`operationPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

#### Remarks

This primarily affects the shared generic behavior HTTP transport surface used by JSON-RPC,
GraphQL, GraphQL-SSE, GraphQL-WS, Server-Sent Events, and WebSocket bindings. Public REST
endpoints are module-owned and should be mapped through
<code>RestBehaviorModuleBase.ConfigureRestBehaviors(...)</code>, with
<code>MapAdditionalEndpoints(...)</code> plus <code>MapBehaviorRestGroup(...)</code> reserved for the
advanced manual-route escape hatch, instead of behavior topology.

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_WithMetadata_System_String_System_String_"></a> WithMetadata\(string, string?\)

Adds or replaces arbitrary topology metadata for companion packs that need extra routing or runtime hints.

```csharp
IBehaviorTopologyBuilder WithMetadata(string key, string? value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable metadata key.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The metadata value. Pass <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to remove the key from the topology descriptor.

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorTopologyBuilder_WithOptions_System_Action_Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions__"></a> WithOptions\(Action<BehaviorTopologyOptions\>\)

Configures optional feature flags for this behavior (outbox, inbox, event sourcing).

```csharp
IBehaviorTopologyBuilder WithOptions(Action<BehaviorTopologyOptions> configure)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[BehaviorTopologyOptions](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviortopologyoptions/)\>

#### Returns

 [IBehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviortopologybuilder/)
