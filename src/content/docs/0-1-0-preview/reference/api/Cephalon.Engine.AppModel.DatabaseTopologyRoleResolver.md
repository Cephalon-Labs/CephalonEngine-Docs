---
title: Class DatabaseTopologyRoleResolver
slug: 0-1-0-preview/reference/api/cephalon-engine-appmodel-databasetopologyroleresolver
editUrl: false
---

Namespace: [Cephalon.Engine.AppModel](/0-1-0-preview/reference/api/cephalon-engine-appmodel/)  
Assembly: Cephalon.Engine.dll  

Resolves <code>Engine:Databases</code> role selections into direct or role-referenced effective targets.

```csharp
public static class DatabaseTopologyRoleResolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DatabaseTopologyRoleResolver](/0-1-0-preview/reference/api/cephalon-engine-appmodel-databasetopologyroleresolver/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Engine_AppModel_DatabaseTopologyRoleResolver_Resolve_Cephalon_Abstractions_AppModel_DatabaseTopologySelection_System_String_"></a> Resolve\(DatabaseTopologySelection, string\)

Resolves the effective target for the supplied logical database role.

```csharp
public static DatabaseTopologyRoleResolution Resolve(DatabaseTopologySelection databases, string requestedRoleId)
```

#### Parameters

`databases` DatabaseTopologySelection

The active database-topology selection.

`requestedRoleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical role to resolve.

#### Returns

 [DatabaseTopologyRoleResolution](/0-1-0-preview/reference/api/cephalon-engine-appmodel-databasetopologyroleresolution/)

The resolved role selection.
