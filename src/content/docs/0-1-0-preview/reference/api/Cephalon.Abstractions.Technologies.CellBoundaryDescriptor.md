---
title: Class CellBoundaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned cell boundary visible to the active Cephalon runtime.

```csharp
public sealed class CellBoundaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellBoundaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CellBoundaryDescriptor\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a cell-boundary descriptor.

```csharp
public CellBoundaryDescriptor(string id, string sourceModuleId, string displayName, string description, string blastRadius, string routingStrategy, IReadOnlyList<string>? moduleIds = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable cell identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns this cell boundary.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing cell name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the cell boundary.

`blastRadius` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing blast-radius posture for this cell.

`routingStrategy` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing routing strategy applied to this cell.

`moduleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module identifiers that belong to this cell boundary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_BlastRadius"></a> BlastRadius

Gets the operator-facing blast-radius posture for this cell.

```csharp
public string BlastRadius { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_Description"></a> Description

Gets the human-readable description of the cell boundary.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing cell name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_Id"></a> Id

Gets the stable cell identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata for this cell boundary.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_ModuleIds"></a> ModuleIds

Gets the module identifiers that belong to this cell boundary.

```csharp
public IReadOnlyList<string> ModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_RoutingStrategy"></a> RoutingStrategy

Gets the operator-facing routing strategy for this cell.

```csharp
public string RoutingStrategy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellBoundaryDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns this cell boundary.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
