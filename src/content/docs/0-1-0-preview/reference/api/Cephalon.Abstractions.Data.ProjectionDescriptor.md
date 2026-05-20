---
title: Class ProjectionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one projection surface contributed to the active runtime.

```csharp
public sealed class ProjectionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ProjectionDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a new projection descriptor.

```csharp
public ProjectionDescriptor(string id, string displayName, string description, string sourceModuleId, string targetStoreId, string mode = "asynchronous", IReadOnlyList<string>? sourceContracts = null, IReadOnlyList<string>? tags = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable projection identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing projection name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable projection description.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier that owns the projection.

`targetStoreId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical target store or read-model identifier populated by the projection.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projection mode such as <code>synchronous</code>, <code>asynchronous</code>, or <code>rebuild</code>.

`sourceContracts` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional source contracts that can feed the projection.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional descriptive tags associated with the projection.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata associated with the projection.

## Properties

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_Description"></a> Description

Gets the human-readable projection description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing projection name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_Id"></a> Id

Gets the stable projection identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata associated with the projection.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_Mode"></a> Mode

Gets the projection mode.

```csharp
public string Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_SourceContracts"></a> SourceContracts

Gets the optional source contracts that can feed the projection.

```csharp
public IReadOnlyList<string> SourceContracts { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that owns the projection.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_Tags"></a> Tags

Gets descriptive tags associated with the projection.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_ProjectionDescriptor_TargetStoreId"></a> TargetStoreId

Gets the logical target store or read-model identifier populated by the projection.

```csharp
public string TargetStoreId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
