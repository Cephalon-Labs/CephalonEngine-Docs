---
title: Class BackendForFrontendRestDocumentRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one backend-for-frontend REST documentation surface materialized for one scope and
one published OpenAPI document.

```csharp
public sealed class BackendForFrontendRestDocumentRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendRestDocumentRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-transports-backendforfrontendrestdocumentruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These runtime descriptors keep client-aware REST documentation surfaces introspectable without
turning OpenAPI JSON or Scalar page routes into a second source of truth outside the shared
backend-for-frontend and REST runtime catalogs.

## Constructors

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__"></a> BackendForFrontendRestDocumentRuntimeDescriptor\(string, string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?\)

Creates a backend-for-frontend REST documentation runtime descriptor.

```csharp
public BackendForFrontendRestDocumentRuntimeDescriptor(string id, string kind, string scopeId, string clientId, string documentName, string openApiPath, string scalarPath, IReadOnlyList<string>? bindingIds = null, IReadOnlyList<string>? sourceModuleIds = null, IReadOnlyList<string>? runtimeEndpointIds = null, IReadOnlyList<string>? restEndpointIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable documentation-surface identifier.

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scope kind. Supported values are <xref href="Cephalon.Abstractions.Transports.BackendForFrontendRestDocumentRuntimeDescriptor.BindingKind" data-throw-if-not-resolved="false"></xref> and
<xref href="Cephalon.Abstractions.Transports.BackendForFrontendRestDocumentRuntimeDescriptor.ClientKind" data-throw-if-not-resolved="false"></xref>.

`scopeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scope identifier. For binding-scoped surfaces this is the binding identifier,
while client-scoped surfaces use the client identifier.

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable client identifier served by the materialized document.

`documentName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved OpenAPI document name.

`openApiPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rooted OpenAPI JSON path for the filtered document.

`scalarPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rooted Scalar page path for the filtered document.

`bindingIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The backend-for-frontend binding identifiers that contribute to the materialized document.
Binding-scoped surfaces contain one value, while client-scoped surfaces can aggregate more
than one binding.

`sourceModuleIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published-endpoint source-module identifiers represented in the materialized document.

`runtimeEndpointIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The client-aware runtime endpoint identifiers included in the materialized document.

`restEndpointIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The published REST endpoint identifiers included in the materialized document.

## Fields

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_BindingKind"></a> BindingKind

The stable kind identifier used when the documentation surface is scoped to one binding.

```csharp
public const string BindingKind = "binding"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_ClientKind"></a> ClientKind

The stable kind identifier used when the documentation surface is scoped to one client.

```csharp
public const string ClientKind = "client"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_BindingId"></a> BindingId

Gets the binding identifier when the surface is scoped to one binding.

```csharp
public string? BindingId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_BindingIds"></a> BindingIds

Gets the contributing backend-for-frontend binding identifiers.

```csharp
public IReadOnlyList<string> BindingIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_ClientId"></a> ClientId

Gets the stable client identifier represented by the materialized document.

```csharp
public string ClientId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_DocumentName"></a> DocumentName

Gets the resolved OpenAPI document name.

```csharp
public string DocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_Id"></a> Id

Gets the stable documentation-surface identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_Kind"></a> Kind

Gets the stable scope kind.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_OpenApiPath"></a> OpenApiPath

Gets the rooted OpenAPI JSON path for the filtered document.

```csharp
public string OpenApiPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_RestEndpointIds"></a> RestEndpointIds

Gets the included published REST endpoint identifiers.

```csharp
public IReadOnlyList<string> RestEndpointIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_RuntimeEndpointIds"></a> RuntimeEndpointIds

Gets the included client-aware runtime endpoint identifiers.

```csharp
public IReadOnlyList<string> RuntimeEndpointIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_ScalarPath"></a> ScalarPath

Gets the rooted Scalar page path for the filtered document.

```csharp
public string ScalarPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_ScopeId"></a> ScopeId

Gets the stable scope identifier.

```csharp
public string ScopeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_BackendForFrontendRestDocumentRuntimeDescriptor_SourceModuleIds"></a> SourceModuleIds

Gets the published-endpoint source-module identifiers represented in the materialized document.

```csharp
public IReadOnlyList<string> SourceModuleIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
