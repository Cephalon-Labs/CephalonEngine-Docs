---
title: Class RenderedReferenceDocs
slug: 0-1-0-preview/reference/api/cephalon-referencedocs-generation-renderedreferencedocs
editUrl: false
---

Namespace: [Cephalon.ReferenceDocs.Generation](/0-1-0-preview/reference/api/cephalon-referencedocs-generation/)  
Assembly: Cephalon.ReferenceDocs.dll  

Represents the full rendered output of a reference documentation generation request.

```csharp
public sealed class RenderedReferenceDocs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RenderedReferenceDocs](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-renderedreferencedocs/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_ReferenceDocs_Generation_RenderedReferenceDocs__ctor_Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_System_Collections_Generic_IReadOnlyList_Cephalon_ReferenceDocs_Generation_ReferenceDocFile__"></a> RenderedReferenceDocs\(ReferenceDocsRequest, IReadOnlyList<ReferenceDocFile\>\)

Creates a new rendered reference docs result.

```csharp
public RenderedReferenceDocs(ReferenceDocsRequest request, IReadOnlyList<ReferenceDocFile> files)
```

#### Parameters

`request` [ReferenceDocsRequest](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsrequest/)

The original generation request.

`files` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ReferenceDocFile](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocfile/)\>

The generated markdown files.

## Properties

### <a id="Cephalon_ReferenceDocs_Generation_RenderedReferenceDocs_Files"></a> Files

Gets the generated markdown files.

```csharp
public IReadOnlyList<ReferenceDocFile> Files { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ReferenceDocFile](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocfile/)\>

### <a id="Cephalon_ReferenceDocs_Generation_RenderedReferenceDocs_Request"></a> Request

Gets the original generation request.

```csharp
public ReferenceDocsRequest Request { get; }
```

#### Property Value

 [ReferenceDocsRequest](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsrequest/)
