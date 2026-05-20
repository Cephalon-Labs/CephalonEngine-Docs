---
title: Class ScaffoldRequest
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldrequest
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Describes the user input required to turn an app profile into a concrete scaffold.

```csharp
public sealed class ScaffoldRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScaffoldRequest](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_"></a> ScaffoldRequest\(string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, string, string\)

Creates a new scaffold request.

```csharp
public ScaffoldRequest(string appName, IReadOnlyList<string>? modules = null, IReadOnlyList<string>? features = null, string targetFramework = "net10.0", string cephalonPackageVersion = "0.1.0-preview")
```

#### Parameters

`appName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The application name to scaffold.

`modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The module names to materialize in the scaffold.

`features` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The feature or slice names to materialize in the scaffold.

`targetFramework` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target framework for generated projects.

`cephalonPackageVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon package version to write into the scaffold.

## Properties

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_AppName"></a> AppName

Gets the application name to scaffold.

```csharp
public string AppName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_CephalonPackageVersion"></a> CephalonPackageVersion

Gets the Cephalon package version written into the scaffold.

```csharp
public string CephalonPackageVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_Features"></a> Features

Gets the feature or slice names to materialize in the scaffold.

```csharp
public IReadOnlyList<string> Features { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_Modules"></a> Modules

Gets the module names to materialize in the scaffold.

```csharp
public IReadOnlyList<string> Modules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_RootNamespace"></a> RootNamespace

Gets the root namespace derived from <xref href="Cephalon.Scaffolding.Generation.ScaffoldRequest.AppName" data-throw-if-not-resolved="false"></xref>.

```csharp
public string RootNamespace { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_ScaffoldRequest_TargetFramework"></a> TargetFramework

Gets the target framework for generated projects.

```csharp
public string TargetFramework { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
