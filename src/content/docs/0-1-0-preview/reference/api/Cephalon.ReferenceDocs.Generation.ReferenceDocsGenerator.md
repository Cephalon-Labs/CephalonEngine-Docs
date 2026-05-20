---
title: Class ReferenceDocsGenerator
slug: 0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsgenerator
editUrl: false
---

Namespace: [Cephalon.ReferenceDocs.Generation](/0-1-0-preview/reference/api/cephalon-referencedocs-generation/)  
Assembly: Cephalon.ReferenceDocs.dll  

Generates markdown reference documentation from Cephalon public assemblies and their XML docs.

```csharp
public static class ReferenceDocsGenerator
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocsGenerator](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsgenerator/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocsGenerator_Generate_Cephalon_ReferenceDocs_Generation_ReferenceDocsRequest_"></a> Generate\(ReferenceDocsRequest\)

Generates rendered markdown reference docs for the supplied request.

```csharp
public static RenderedReferenceDocs Generate(ReferenceDocsRequest request)
```

#### Parameters

`request` [ReferenceDocsRequest](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocsrequest/)

The generation request.

#### Returns

 [RenderedReferenceDocs](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-renderedreferencedocs/)

The rendered markdown files.
