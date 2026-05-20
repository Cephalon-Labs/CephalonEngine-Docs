---
title: Class CellHealthIsolationDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned cell health-isolation answer visible to the active runtime.

```csharp
public sealed class CellHealthIsolationDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CellHealthIsolationDescriptor\(string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a cell health-isolation descriptor.

```csharp
public CellHealthIsolationDescriptor(string id, string sourceModuleId, string cellId, string displayName, string description, string failureIsolationMode, string readinessScope, string restartScope, IReadOnlyList<string>? dependencyIds = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable health-isolation identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns this health-isolation answer.

`cellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cell identifier governed by this health-isolation answer.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing health-isolation name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the health-isolation posture.

`failureIsolationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing failure-isolation mode for this cell.

`readinessScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing readiness scope used for this cell.

`restartScope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing restart scope used for this cell.

`dependencyIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional dependency identifiers associated with this health-isolation answer.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_CellId"></a> CellId

Gets the cell identifier governed by this health-isolation answer.

```csharp
public string CellId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_DependencyIds"></a> DependencyIds

Gets the normalized dependency identifiers associated with this health-isolation answer.

```csharp
public IReadOnlyList<string> DependencyIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_Description"></a> Description

Gets the human-readable description of the health-isolation posture.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing health-isolation name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_FailureIsolationMode"></a> FailureIsolationMode

Gets the operator-facing failure-isolation mode for this cell.

```csharp
public string FailureIsolationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_Id"></a> Id

Gets the stable health-isolation identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata for this health-isolation answer.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_ReadinessScope"></a> ReadinessScope

Gets the operator-facing readiness scope for this cell.

```csharp
public string ReadinessScope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_RestartScope"></a> RestartScope

Gets the operator-facing restart scope for this cell.

```csharp
public string RestartScope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns this health-isolation answer.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
