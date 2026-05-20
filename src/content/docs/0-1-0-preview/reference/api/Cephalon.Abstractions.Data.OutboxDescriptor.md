---
title: Class OutboxDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one outbox surface contributed to the active runtime.

```csharp
public sealed class OutboxDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_"></a> OutboxDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, OutboxDispatchPolicyDescriptor?\)

Creates a new outbox descriptor.

```csharp
public OutboxDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string mode = "transactional-store", IReadOnlyList<string>? channelIds = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null, OutboxDispatchPolicyDescriptor? dispatchPolicy = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing outbox name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable outbox description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the outbox surface.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that backs the outbox.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox mode such as <code>transactional-table</code> or <code>append-only-log</code>.

`channelIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional channel identifiers that this outbox is explicitly scoped to.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the outbox.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the outbox.

`dispatchPolicy` [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)?

The optional effective dispatch-execution policy. When omitted, Cephalon defaults the outbox to a disabled dispatch policy.

## Properties

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_ChannelIds"></a> ChannelIds

Gets the optional channel identifiers that this outbox is explicitly scoped to.

```csharp
public IReadOnlyList<string> ChannelIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Description"></a> Description

Gets the human-readable outbox description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_DispatchPolicy"></a> DispatchPolicy

Gets the effective dispatch-execution policy for the outbox.

```csharp
public OutboxDispatchPolicyDescriptor DispatchPolicy { get; }
```

#### Property Value

 [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing outbox name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Id"></a> Id

Gets the stable outbox identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the outbox.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Mode"></a> Mode

Gets the outbox mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Provider"></a> Provider

Gets the logical provider identifier that backs the outbox.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the outbox surface.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the outbox.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Abstractions_Data_OutboxDescriptor_WithDispatchPolicy_Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_"></a> WithDispatchPolicy\(OutboxDispatchPolicyDescriptor\)

Creates a copy of the outbox descriptor with a different dispatch policy.

```csharp
public OutboxDescriptor WithDispatchPolicy(OutboxDispatchPolicyDescriptor dispatchPolicy)
```

#### Parameters

`dispatchPolicy` [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)

The effective dispatch policy to apply.

#### Returns

 [OutboxDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdescriptor/)

A new outbox descriptor with the requested dispatch policy.
