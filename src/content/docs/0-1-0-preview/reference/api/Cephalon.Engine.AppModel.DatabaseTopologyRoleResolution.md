---
title: Class DatabaseTopologyRoleResolution
slug: 0-1-0-preview/reference/api/cephalon-engine-appmodel-databasetopologyroleresolution
editUrl: false
---

Namespace: [Cephalon.Engine.AppModel](/0-1-0-preview/reference/api/cephalon-engine-appmodel/)  
Assembly: Cephalon.Engine.dll  

Describes one resolved <code>Engine:Databases</code> role selection, including any explicit role reference.

```csharp
public sealed class DatabaseTopologyRoleResolution
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyRoleResolution](/0-1-0-preview/reference/api/cephalon-engine-appmodel-databasetopologyroleresolution/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution__ctor_System_String_System_String_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_Cephalon_Abstractions_AppModel_DatabaseTargetSelection_System_String_"></a> DatabaseTopologyRoleResolution\(string, string, DatabaseTargetSelection, DatabaseTargetSelection, string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.AppModel.DatabaseTopologyRoleResolution" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DatabaseTopologyRoleResolution(string requestedRoleId, string resolvedRoleId, DatabaseTargetSelection requestedTarget, DatabaseTargetSelection effectiveTarget, string? useRole = null)
```

#### Parameters

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical role requested by the caller.

`resolvedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete role that supplied the physical database target.

`requestedTarget` DatabaseTargetSelection

The target declared for the requested role.

`effectiveTarget` DatabaseTargetSelection

The effective target after applying any role reference.

`useRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The referenced concrete role declared by the requested target, when present.

## Properties

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_EffectiveTarget"></a> EffectiveTarget

Gets the effective target after applying any role reference.

```csharp
public DatabaseTargetSelection EffectiveTarget { get; }
```

#### Property Value

 DatabaseTargetSelection

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_RequestedRoleId"></a> RequestedRoleId

Gets the logical role requested by the caller.

```csharp
public string RequestedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_RequestedTarget"></a> RequestedTarget

Gets the target declared for the requested role.

```csharp
public DatabaseTargetSelection RequestedTarget { get; }
```

#### Property Value

 DatabaseTargetSelection

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_ResolutionMode"></a> ResolutionMode

Gets the stable resolution mode used by runtime introspection surfaces.

```csharp
public string ResolutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_ResolvedRoleId"></a> ResolvedRoleId

Gets the concrete role that supplied the effective provider and connection settings.

```csharp
public string ResolvedRoleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_UseRole"></a> UseRole

Gets the referenced concrete role declared by the requested target, when present.

```csharp
public string? UseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolution_UsesRoleReference"></a> UsesRoleReference

Gets a value indicating whether the requested role resolved through an explicit role reference.

```csharp
public bool UsesRoleReference { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
