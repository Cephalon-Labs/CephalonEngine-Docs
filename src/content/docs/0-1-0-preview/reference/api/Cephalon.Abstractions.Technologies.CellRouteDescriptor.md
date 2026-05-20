---
title: Class CellRouteDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one module-owned cell-to-cell routing and governance answer visible to the active runtime.

```csharp
public sealed class CellRouteDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CellRouteDescriptor\(string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a cell-route descriptor.

```csharp
public CellRouteDescriptor(string id, string sourceModuleId, string sourceCellId, string targetCellId, string displayName, string description, string routingStrategy, string governanceMode, IReadOnlyList<string>? transportIds = null, string? requiredCapabilityKey = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable cell-route identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns this cell route.

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source cell identifier.

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target cell identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing route name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the cell route.

`routingStrategy` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing routing strategy used for this route.

`governanceMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing governance posture applied to this route.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transport identifiers associated with this route.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional capability key required to use this route.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_Description"></a> Description

Gets the human-readable description of the cell route.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing route name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_GovernanceMode"></a> GovernanceMode

Gets the operator-facing governance posture applied to this route.

```csharp
public string GovernanceMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_Id"></a> Id

Gets the stable cell-route identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_Metadata"></a> Metadata

Gets optional operator-facing metadata for this route.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_RequiredCapabilityKey"></a> RequiredCapabilityKey

Gets the optional capability key required to use this route.

```csharp
public string? RequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_RoutingStrategy"></a> RoutingStrategy

Gets the operator-facing routing strategy used for this route.

```csharp
public string RoutingStrategy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_SourceCellId"></a> SourceCellId

Gets the source cell identifier.

```csharp
public string SourceCellId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns this cell route.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_TargetCellId"></a> TargetCellId

Gets the target cell identifier.

```csharp
public string TargetCellId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellRouteDescriptor_TransportIds"></a> TransportIds

Gets the normalized transport identifiers associated with this route.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
