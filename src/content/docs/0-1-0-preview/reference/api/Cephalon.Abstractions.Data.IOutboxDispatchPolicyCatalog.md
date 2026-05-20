---
title: Interface IOutboxDispatchPolicyCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ioutboxdispatchpolicycatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the effective dispatch-execution policies visible to the current runtime for active outbox surfaces.

```csharp
public interface IOutboxDispatchPolicyCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IOutboxDispatchPolicyCatalog_Policies"></a> Policies

Gets the effective dispatch policies visible to the current runtime.

```csharp
IReadOnlyList<OutboxDispatchPolicyDescriptor> Policies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IOutboxDispatchPolicyCatalog_GetByOutboxId_System_String_"></a> GetByOutboxId\(string\)

Gets the effective dispatch policy for one outbox by its stable identifier.

```csharp
OutboxDispatchPolicyDescriptor? GetByOutboxId(string outboxId)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier to resolve.

#### Returns

 [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)?

The matching dispatch policy, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when the outbox is not active.
