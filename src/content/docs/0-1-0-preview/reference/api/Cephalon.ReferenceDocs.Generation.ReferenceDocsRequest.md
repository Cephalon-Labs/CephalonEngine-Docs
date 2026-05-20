---
title: Class ReferenceDocsRequest
slug: 0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsrequest
editUrl: false
---

Namespace: [Cephalon.ReferenceDocs.Generation](/0-1-0-preview/reference/api/cephalon-referencedocs-generation/)  
Assembly: Cephalon.ReferenceDocs.dll  

Describes the input required to generate Cephalon reference documentation.

```csharp
public sealed class ReferenceDocsRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocsRequest](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> ReferenceDocsRequest\(string, string, string, string, IReadOnlyList<string\>?\)

Creates a new reference docs request.

```csharp
public ReferenceDocsRequest(string rootPath, string outputPath, string configuration = "Debug", string targetFramework = "net10.0", IReadOnlyList<string>? assemblies = null)
```

#### Parameters

`rootPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The repository root path.

`outputPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The output directory where reference docs should be written.

`configuration` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build configuration to read from.

`targetFramework` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target framework to read from.

`assemblies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The assemblies to document. When omitted, the generator uses its curated defaults.

## Properties

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_Assemblies"></a> Assemblies

Gets the assemblies to document. When empty, the generator uses its curated defaults.

```csharp
public IReadOnlyList<string> Assemblies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_Configuration"></a> Configuration

Gets the build configuration to read from.

```csharp
public string Configuration { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_OutputPath"></a> OutputPath

Gets the output directory where reference docs should be written.

```csharp
public string OutputPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_RootPath"></a> RootPath

Gets the repository root path.

```csharp
public string RootPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_TargetFramework"></a> TargetFramework

Gets the target framework to read from.

```csharp
public string TargetFramework { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
