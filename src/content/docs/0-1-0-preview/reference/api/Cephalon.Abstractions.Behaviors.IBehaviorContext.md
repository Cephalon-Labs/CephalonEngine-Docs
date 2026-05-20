---
title: Interface IBehaviorContext
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorcontext
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Provides ambient context to a behavior during its execution.
The context exposes reply semantics, metadata, and cancellation.

```csharp
public interface IBehaviorContext
```

## Remarks

<p>
When the behavior topology uses the <code>direct</code> pattern, <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContext.ReplyAsync(System.Object%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref>
is not supported and will throw <xref href="System.NotSupportedException" data-throw-if-not-resolved="false"></xref>.
Use the behavior's return value to communicate results in the direct pattern.
</p>

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContext_BehaviorId"></a> BehaviorId

Gets the stable identifier of the behavior being executed.

```csharp
string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContext_CorrelationId"></a> CorrelationId

Gets the correlation identifier for the current execution, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not provided.

```csharp
string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContext_EventStore"></a> EventStore

Gets the event store for the current behavior context, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>
if event sourcing is not configured for this behavior.

```csharp
IEventStore? EventStore { get; }
```

#### Property Value

 [IEventStore](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstore/)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContext_Metadata"></a> Metadata

Gets ambient metadata associated with the current execution (e.g. correlation id, tenant id).

```csharp
IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorContext_ReplyAsync_System_Object_System_Threading_CancellationToken_"></a> ReplyAsync\(object, CancellationToken\)

Sends a reply message back to the caller through the active transport.

```csharp
Task ReplyAsync(object reply, CancellationToken cancellationToken = default)
```

#### Parameters

`reply` [object](https://learn.microsoft.com/dotnet/api/system.object)

The reply object to send.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the reply.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the reply has been dispatched.

#### Exceptions

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

Thrown when the active behavior topology uses the <code>direct</code> pattern,
which does not support fire-and-forget reply semantics.
