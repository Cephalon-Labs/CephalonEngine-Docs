---
title: Class SuiteScaffoldService
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldservice
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel.Scaffolding](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding/)  
Assembly: Cephalon.Abstractions.dll  

Describes one service slot inside a suite-level scaffold plan.

```csharp
public sealed class SuiteScaffoldService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SuiteScaffoldService](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldservice/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SuiteScaffoldService\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a suite-scaffold service description.

```csharp
[JsonConstructor]
public SuiteScaffoldService(string id, string displayName, string description, string blueprintId, string nameTemplate, string pathTemplate, IReadOnlyList<string>? dependsOn = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable service-slot identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable service-slot name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The service-slot description.

`blueprintId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The app blueprint identifier used for the service.

`nameTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The generated app-name template for the service.

`pathTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The generated root-path template for the service.

`dependsOn` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The service or shared-project identifiers this service depends on.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional service metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_BlueprintId"></a> BlueprintId

Gets the app blueprint identifier used for the service.

```csharp
public string BlueprintId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_DependsOn"></a> DependsOn

Gets the service or shared-project identifiers this service depends on.

```csharp
public IReadOnlyList<string> DependsOn { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_Description"></a> Description

Gets the service-slot description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_DisplayName"></a> DisplayName

Gets the human-readable service-slot name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_Id"></a> Id

Gets the stable service-slot identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_Metadata"></a> Metadata

Gets optional service metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_NameTemplate"></a> NameTemplate

Gets the generated app-name template for the service.

```csharp
public string NameTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldService_PathTemplate"></a> PathTemplate

Gets the generated root-path template for the service.

```csharp
public string PathTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
