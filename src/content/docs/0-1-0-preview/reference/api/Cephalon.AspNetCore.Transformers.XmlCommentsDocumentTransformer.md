---
title: Class XmlCommentsDocumentTransformer
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transformers-xmlcommentsdocumenttransformer
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transformers](/0-1-0-preview/reference/api/cephalon-aspnetcore-transformers/)  
Assembly: Cephalon.AspNetCore.dll  

Enriches generated OpenAPI schemas with XML documentation comments discovered from loaded assemblies.

```csharp
public sealed class XmlCommentsDocumentTransformer : IOpenApiDocumentTransformer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[XmlCommentsDocumentTransformer](/0-1-0-preview/reference/api/cephalon-aspnetcore-transformers-xmlcommentsdocumenttransformer/)

#### Implements

[IOpenApiDocumentTransformer](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.openapi.iopenapidocumenttransformer)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This transformer keeps OpenAPI descriptions aligned with the XML comments written on public
contracts, including summaries, remarks, and examples when available.

## Constructors

### <a id="Cephalon_AspNetCore_Transformers_XmlCommentsDocumentTransformer__ctor_System_String___"></a> XmlCommentsDocumentTransformer\(string\[\]?\)

Enriches generated OpenAPI schemas with XML documentation comments discovered from loaded assemblies.

```csharp
public XmlCommentsDocumentTransformer(string[]? xmlFiles = null)
```

#### Parameters

`xmlFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]?

Optional explicit XML documentation files to scan. When omitted, the transformer searches the
current application assemblies and base directory for generated XML documentation files.

#### Remarks

This transformer keeps OpenAPI descriptions aligned with the XML comments written on public
contracts, including summaries, remarks, and examples when available.

## Methods

### <a id="Cephalon_AspNetCore_Transformers_XmlCommentsDocumentTransformer_TransformAsync_Microsoft_OpenApi_OpenApiDocument_Microsoft_AspNetCore_OpenApi_OpenApiDocumentTransformerContext_System_Threading_CancellationToken_"></a> TransformAsync\(OpenApiDocument, OpenApiDocumentTransformerContext, CancellationToken\)

Applies XML comment data to the OpenAPI document schemas produced for the current request.

```csharp
public Task TransformAsync(OpenApiDocument document, OpenApiDocumentTransformerContext context, CancellationToken cancellationToken)
```

#### Parameters

`document` [OpenApiDocument](https://github.com/microsoft/OpenAPI.NET/blob/25ca05e769c50b2dfd9b1681226a986444044cb7/src/Microsoft.OpenApi/Models/OpenApiDocument.cs)

The OpenAPI document being transformed.

`context` [OpenApiDocumentTransformerContext](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.openapi.openapidocumenttransformercontext)

The transformation context for the current document generation.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel document transformation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the transformation has finished.
