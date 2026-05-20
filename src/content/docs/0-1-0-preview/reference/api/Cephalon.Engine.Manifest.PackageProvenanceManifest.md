---
title: Class PackageProvenanceManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-packageprovenancemanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes provenance metadata declared for an independently shipped package.

```csharp
public sealed class PackageProvenanceManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageProvenanceManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packageprovenancemanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_PackageProvenanceManifest__ctor_System_String_System_String_System_String_System_String_"></a> PackageProvenanceManifest\(string?, string?, string?, string?\)

Creates a package provenance manifest entry.

```csharp
public PackageProvenanceManifest(string? sourceRepository, string? sourceRevision, string? buildUri, string? statementUri)
```

#### Parameters

`sourceRepository` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source repository URI declared by the package manifest, when available.

`sourceRevision` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source revision, tag, or commit identifier declared by the package manifest, when available.

`buildUri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The build or pipeline URI declared by the package manifest, when available.

`statementUri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provenance statement or attestation URI declared by the package manifest, when available.

## Properties

### <a id="Cephalon_Engine_Manifest_PackageProvenanceManifest_BuildUri"></a> BuildUri

Gets the declared build or pipeline URI, when available.

```csharp
public string? BuildUri { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageProvenanceManifest_SourceRepository"></a> SourceRepository

Gets the declared source repository URI, when available.

```csharp
public string? SourceRepository { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageProvenanceManifest_SourceRevision"></a> SourceRevision

Gets the declared source revision, tag, or commit identifier, when available.

```csharp
public string? SourceRevision { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageProvenanceManifest_StatementUri"></a> StatementUri

Gets the declared provenance statement or attestation URI, when available.

```csharp
public string? StatementUri { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
