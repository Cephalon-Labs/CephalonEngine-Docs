---
title: Class SuiteScaffoldPlan
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldplan
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel.Scaffolding](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding/)  
Assembly: Cephalon.Abstractions.dll  

Describes a suite-level scaffold plan for coordinated multi-service Cephalon solutions.

```csharp
public sealed class SuiteScaffoldPlan
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SuiteScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldplan/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SuiteScaffoldPlan\(string, string, string, IReadOnlyList<SuiteScaffoldService\>, IReadOnlyList<ScaffoldProject\>?, IReadOnlyList<ScaffoldFolder\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a suite-level scaffold plan.

```csharp
[JsonConstructor]
public SuiteScaffoldPlan(string id, string displayName, string description, IReadOnlyList<SuiteScaffoldService> services, IReadOnlyList<ScaffoldProject>? sharedProjects = null, IReadOnlyList<ScaffoldFolder>? sharedFolders = null, IReadOnlyList<string>? conventions = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable suite-scaffold identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable suite-scaffold name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suite-scaffold description.

`services` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SuiteScaffoldService](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldservice/)\>

The service slots emitted by the suite scaffold.

`sharedProjects` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldProject](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject/)\>?

The shared projects emitted outside individual services.

`sharedFolders` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldFolder](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder/)\>?

The shared folders emitted outside individual services.

`conventions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The conventions implied by the suite scaffold.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional suite-scaffold metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_Conventions"></a> Conventions

Gets the conventions implied by the suite scaffold.

```csharp
public IReadOnlyList<string> Conventions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_Description"></a> Description

Gets the suite-scaffold description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_DisplayName"></a> DisplayName

Gets the human-readable suite-scaffold name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_Id"></a> Id

Gets the stable suite-scaffold identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_Metadata"></a> Metadata

Gets optional suite-scaffold metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_Services"></a> Services

Gets the service slots emitted by the suite scaffold.

```csharp
public IReadOnlyList<SuiteScaffoldService> Services { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SuiteScaffoldService](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldservice/)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_SharedFolders"></a> SharedFolders

Gets the shared folders emitted outside individual services.

```csharp
public IReadOnlyList<ScaffoldFolder> SharedFolders { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldFolder](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder/)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_SharedProjects"></a> SharedProjects

Gets the shared projects emitted outside individual services.

```csharp
public IReadOnlyList<ScaffoldProject> SharedProjects { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldProject](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject/)\>
