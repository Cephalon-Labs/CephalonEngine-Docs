---
title: Class OutboxDispatchPolicyDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the active dispatch-execution policy for one durable outbox surface.

```csharp
public sealed class OutboxDispatchPolicyDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> OutboxDispatchPolicyDescriptor\(string, string, string, string, string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new outbox dispatch-policy descriptor.

```csharp
public OutboxDispatchPolicyDescriptor(string outboxId, string policyId, string displayName, string description, string executionMode, string? runtimeId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier that the policy applies to.

`policyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dispatch-policy identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing dispatch-policy name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable dispatch-policy description.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution ownership mode, such as <code>disabled</code>, <code>consumer-managed</code>, or <code>runtime-managed</code>.

`runtimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional dispatch-runtime identifier that explicitly owns execution for the outbox when the policy is runtime-managed.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the dispatch policy.

## Properties

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_Description"></a> Description

Gets the human-readable dispatch-policy description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing dispatch-policy name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_ExecutionMode"></a> ExecutionMode

Gets the execution ownership mode for the outbox.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the dispatch policy.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_OutboxId"></a> OutboxId

Gets the stable outbox identifier that the policy applies to.

```csharp
public string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_PolicyId"></a> PolicyId

Gets the stable dispatch-policy identifier.

```csharp
public string PolicyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_RuntimeId"></a> RuntimeId

Gets the optional dispatch-runtime identifier that explicitly owns execution for the outbox.

```csharp
public string? RuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_Disabled_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Disabled\(string, IReadOnlyDictionary<string, string\>?\)

Creates the default disabled dispatch policy for an outbox.

```csharp
public static OutboxDispatchPolicyDescriptor Disabled(string outboxId, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the policy.

#### Returns

 [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)

The default disabled dispatch policy descriptor.

### <a id="Cephalon_Abstractions_Data_OutboxDispatchPolicyDescriptor_Unsupported_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Unsupported\(string, string?, IReadOnlyDictionary<string, string\>?\)

Creates an explicit unsupported dispatch policy for an outbox that can stage messages but does not
currently support Cephalon-managed mutable dispatch-state ownership.

```csharp
public static OutboxDispatchPolicyDescriptor Unsupported(string outboxId, string? description = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing description explaining why the current provider intentionally remains
outside the managed-dispatch contract.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the policy.

#### Returns

 [OutboxDispatchPolicyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-outboxdispatchpolicydescriptor/)

The explicit unsupported dispatch policy descriptor.
