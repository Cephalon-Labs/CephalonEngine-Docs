---
title: Class BehaviorTopologyBuilder
slug: 0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder
editUrl: false
---

Namespace: [Cephalon.Behaviors.Builders](/0-1-0-preview/reference/api/cephalon-behaviors-builders/)  
Assembly: Cephalon.Behaviors.dll  

Fluent builder for constructing a <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor" data-throw-if-not-resolved="false"></xref>.
Implements <xref href="Cephalon.Abstractions.Behaviors.IBehaviorTopologyBuilder" data-throw-if-not-resolved="false"></xref> so behaviors can declare
topology from both manual <code>Register&lt;T&gt;</code> callbacks and auto-discovered
static <code>ConfigureTopology</code> methods.

```csharp
public sealed class BehaviorTopologyBuilder : IBehaviorTopologyBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

#### Implements

IBehaviorTopologyBuilder

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsCqrs"></a> AsCqrs\(\)

Declares this behavior as CQRS-shaped (command/query split, 200/202 HTTP semantics).

```csharp
public IBehaviorTopologyBuilder AsCqrs()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsDirect"></a> AsDirect\(\)

Declares this behavior as direct (no architectural pattern — input → handler → output, 200/204 HTTP).

```csharp
public IBehaviorTopologyBuilder AsDirect()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsDurableExecution"></a> AsDurableExecution\(\)

Declares this behavior as a durable execution workflow with event-store replay semantics.

```csharp
public IBehaviorTopologyBuilder AsDurableExecution()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsEventDriven"></a> AsEventDriven\(\)

Declares this behavior as event-driven (fire-and-forget, 202 HTTP, fanout).

```csharp
public IBehaviorTopologyBuilder AsEventDriven()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsProcessManager"></a> AsProcessManager\(\)

Declares this behavior as a process manager step (long-running, durable checkpoint).

```csharp
public IBehaviorTopologyBuilder AsProcessManager()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsSaga"></a> AsSaga\(\)

Declares this behavior as a saga step (stateful, compensation chain).

```csharp
public IBehaviorTopologyBuilder AsSaga()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_AsSagaChoreography"></a> AsSagaChoreography\(\)

Declares this behavior as a choreography-based saga step (event-reaction coordination).

```csharp
public IBehaviorTopologyBuilder AsSagaChoreography()
```

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_Build_System_String_"></a> Build\(string\)

Builds the immutable <xref href="Cephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor" data-throw-if-not-resolved="false"></xref> for the given behavior identifier.

```csharp
public BehaviorTopologyDescriptor Build(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

#### Returns

 BehaviorTopologyDescriptor

The resolved topology descriptor.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_RequireFeatureFlag_System_String_"></a> RequireFeatureFlag\(string\)

Requires one Cephalon feature flag to be enabled before the behavior can execute.

```csharp
public BehaviorTopologyBuilder RequireFeatureFlag(string featureFlagId)
```

#### Parameters

`featureFlagId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The feature-flag identifier that must resolve to enabled.

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_RequireFeatureFlags_System_String___"></a> RequireFeatureFlags\(params string\[\]\)

Requires all requested Cephalon feature flags to be enabled before the behavior can execute.

```csharp
public BehaviorTopologyBuilder RequireFeatureFlags(params string[] featureFlagIds)
```

#### Parameters

`featureFlagIds` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The feature-flag identifiers that must resolve to enabled.

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaGrpc"></a> ViaGrpc\(\)

Declares exposure over the <code>grpc</code> transport.

```csharp
public BehaviorTopologyBuilder ViaGrpc()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaHttpGraphQl"></a> ViaHttpGraphQl\(\)

Declares exposure over the <code>http.graphql</code> transport.

```csharp
public BehaviorTopologyBuilder ViaHttpGraphQl()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaHttpGraphQlSse"></a> ViaHttpGraphQlSse\(\)

Declares exposure over the <code>http.graphql-sse</code> transport.

```csharp
public BehaviorTopologyBuilder ViaHttpGraphQlSse()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaHttpGraphQlWs"></a> ViaHttpGraphQlWs\(\)

Declares exposure over the <code>http.graphql-ws</code> transport.

```csharp
public BehaviorTopologyBuilder ViaHttpGraphQlWs()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaHttpJsonRpc"></a> ViaHttpJsonRpc\(\)

Declares exposure over the <code>http.jsonrpc</code> transport.

```csharp
public BehaviorTopologyBuilder ViaHttpJsonRpc()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaHttpSse"></a> ViaHttpSse\(\)

Declares exposure over the <code>http.sse</code> transport.

```csharp
public BehaviorTopologyBuilder ViaHttpSse()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaInMemory"></a> ViaInMemory\(\)

Declares exposure over the <code>in-memory</code> transport.

```csharp
public BehaviorTopologyBuilder ViaInMemory()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaKafka"></a> ViaKafka\(\)

Declares exposure over the <code>kafka</code> transport.

```csharp
public BehaviorTopologyBuilder ViaKafka()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaRabbitMq"></a> ViaRabbitMq\(\)

Declares exposure over the <code>rabbitmq</code> transport.

```csharp
public BehaviorTopologyBuilder ViaRabbitMq()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_ViaWebSocket"></a> ViaWebSocket\(\)

Declares exposure over the <code>http.ws</code> (WebSocket) transport.

```csharp
public BehaviorTopologyBuilder ViaWebSocket()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithApiSurface_System_String_System_String_"></a> WithApiSurface\(string, string\)

Overrides the logical API surface projected by route-shaped transport adapters.

```csharp
public BehaviorTopologyBuilder WithApiSurface(string groupPath, string operationPath)
```

#### Parameters

`groupPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical group path, such as <code>cart</code>.

`operationPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical operation path, such as <code>get</code>.

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

#### Remarks

This primarily affects the shared HTTP behavior route contract used by route-shaped
non-REST bindings such as JSON-RPC, GraphQL-over-SSE, GraphQL-over-WebSocket,
Server-Sent Events, and WebSocket. Public REST stays module-owned, and GraphQL remains
schema-owned.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithCqrsPattern"></a> WithCqrsPattern\(\)

Sets the interaction pattern to <code>cqrs</code>.

```csharp
public BehaviorTopologyBuilder WithCqrsPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithDirectPattern"></a> WithDirectPattern\(\)

Sets the interaction pattern to <code>direct</code>.

```csharp
public BehaviorTopologyBuilder WithDirectPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithDurableExecutionPattern"></a> WithDurableExecutionPattern\(\)

Sets the interaction pattern to <code>durable-execution</code>.

```csharp
public BehaviorTopologyBuilder WithDurableExecutionPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithEventDrivenPattern"></a> WithEventDrivenPattern\(\)

Sets the interaction pattern to <code>event-driven</code>.

```csharp
public BehaviorTopologyBuilder WithEventDrivenPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithMetadata_System_String_System_String_"></a> WithMetadata\(string, string?\)

Adds or replaces descriptor metadata that companion packages can later project into
adapter-specific runtime behavior.

```csharp
public BehaviorTopologyBuilder WithMetadata(string key, string? value)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The metadata key to write.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The metadata value to store. Pass <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> to remove the key.

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithOptions_System_Action_Cephalon_Abstractions_Behaviors_BehaviorTopologyOptions__"></a> WithOptions\(Action<BehaviorTopologyOptions\>\)

Configures optional feature flags for this behavior (outbox, inbox, event sourcing).

```csharp
public IBehaviorTopologyBuilder WithOptions(Action<BehaviorTopologyOptions> configure)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<BehaviorTopologyOptions\>

#### Returns

 IBehaviorTopologyBuilder

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithProcessManagerPattern"></a> WithProcessManagerPattern\(\)

Sets the interaction pattern to <code>process-manager</code>.

```csharp
public BehaviorTopologyBuilder WithProcessManagerPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithSagaChoreographyPattern"></a> WithSagaChoreographyPattern\(\)

Sets the interaction pattern to <code>saga-choreography</code>.

```csharp
public BehaviorTopologyBuilder WithSagaChoreographyPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.

### <a id="Cephalon_Behaviors_Builders_BehaviorTopologyBuilder_WithSagaStepPattern"></a> WithSagaStepPattern\(\)

Sets the interaction pattern to <code>saga-step</code>.

```csharp
public BehaviorTopologyBuilder WithSagaStepPattern()
```

#### Returns

 [BehaviorTopologyBuilder](/0-1-0-preview/reference/api/cephalon-behaviors-builders-behaviortopologybuilder/)

The same builder for fluent chaining.
