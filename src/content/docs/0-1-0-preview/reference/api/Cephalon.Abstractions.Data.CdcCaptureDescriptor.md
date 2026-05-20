---
title: Class CdcCaptureDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one change-data-capture surface contributed to the active runtime.

```csharp
public sealed class CdcCaptureDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureDescriptor\(string, string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new CDC capture descriptor.

```csharp
[JsonConstructor]
public CdcCaptureDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string sourceId, string outboxId, string mode = "log-based", string eventFormat = "debezium-envelope", IReadOnlyList<string>? resourceIds = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing CDC capture name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable CDC capture description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the CDC capture.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that supplies the change feed.

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical source stream, database, or feed identifier.

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier that receives captured publications.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capture mode such as <code>wal</code>, <code>change-stream</code>, or <code>table-tail</code>.

`eventFormat` [string](https://learn.microsoft.com/dotnet/api/system.string)

The emitted change-event format such as <code>debezium-envelope</code>.

`resourceIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional resource identifiers such as tables, collections, or topics observed by the capture.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the CDC capture.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the CDC capture.

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureDescriptor\(string, string, string, string, string, string, string, CdcCaptureExecutionBindingDescriptor, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new CDC capture descriptor.

```csharp
public CdcCaptureDescriptor(string id, string displayName, string description, string sourceModuleId, string provider, string sourceId, string outboxId, CdcCaptureExecutionBindingDescriptor executionBinding, string mode = "log-based", string eventFormat = "debezium-envelope", IReadOnlyList<string>? resourceIds = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing CDC capture name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable CDC capture description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the CDC capture.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that supplies the change feed.

`sourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical source stream, database, or feed identifier.

`outboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier that receives captured publications.

`executionBinding` [CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

The authored or effective execution-binding answer for the CDC capture. When omitted, the capture starts unbound.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capture mode such as <code>wal</code>, <code>change-stream</code>, or <code>table-tail</code>.

`eventFormat` [string](https://learn.microsoft.com/dotnet/api/system.string)

The emitted change-event format such as <code>debezium-envelope</code>.

`resourceIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional resource identifiers such as tables, collections, or topics observed by the capture.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the CDC capture.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the CDC capture.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Description"></a> Description

Gets the human-readable CDC capture description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_EventFormat"></a> EventFormat

Gets the emitted change-event format.

```csharp
public string EventFormat { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_ExecutionBinding"></a> ExecutionBinding

Gets the authored or effective execution-binding answer for the CDC capture.

```csharp
public CdcCaptureExecutionBindingDescriptor ExecutionBinding { get; init; }
```

#### Property Value

 [CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Id"></a> Id

Gets the stable CDC capture identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the CDC capture.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Mode"></a> Mode

Gets the capture mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_OutboxId"></a> OutboxId

Gets the outbox identifier that receives captured publications.

```csharp
public string OutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Provider"></a> Provider

Gets the logical provider identifier that supplies the change feed.

```csharp
public string Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IReadOnlyList<string> ResourceIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_SourceId"></a> SourceId

Gets the logical source stream, database, or feed identifier.

```csharp
public string SourceId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the CDC capture.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the CDC capture.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="Cephalon_Abstractions_Data_CdcCaptureDescriptor_WithExecutionBinding_Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_"></a> WithExecutionBinding\(CdcCaptureExecutionBindingDescriptor\)

Creates a copy of the CDC capture descriptor with a different execution-binding answer.

```csharp
public CdcCaptureDescriptor WithExecutionBinding(CdcCaptureExecutionBindingDescriptor executionBinding)
```

#### Parameters

`executionBinding` [CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

The execution-binding answer to apply.

#### Returns

 [CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)

A new CDC capture descriptor with the requested execution binding.
