---
title: Class ReferenceDocsSurface
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocssurface
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Documentation](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation/)  
Assembly: Cephalon.AspNetCore.dll  

Describes the operator-facing HTTP surface for hosted Cephalon reference documentation.

```csharp
public sealed record ReferenceDocsSurface : IEquatable<ReferenceDocsSurface>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocsSurface](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocssurface/)

#### Implements

[IEquatable<ReferenceDocsSurface\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface__ctor_System_Boolean_System_Boolean_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_"></a> ReferenceDocsSurface\(bool, bool, string, string, string, string, string, string, string, string, string\)

Describes the operator-facing HTTP surface for hosted Cephalon reference documentation.

```csharp
public ReferenceDocsSurface(bool Enabled, bool Available, string RoutePrefix, string DefaultDocument, string DefaultDocumentPath, string ReadmePath, string BrowserPath, string NamespaceIndexPath, string TypeIndexPath, string MemberIndexPath, string ManifestPath)
```

#### Parameters

`Enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether reference-doc hosting is enabled for the current host.

`Available` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the configured documentation directory and default document were found and mapped.

`RoutePrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route prefix where the documentation is served.

`DefaultDocument` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document opened when the route prefix is requested.

`DefaultDocumentPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the configured default document.

`ReadmePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the reference-doc landing page.

`BrowserPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the interactive browser UI.

`NamespaceIndexPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the namespace index.

`TypeIndexPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the type index.

`MemberIndexPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the member index.

`ManifestPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted path to the machine-readable manifest.

## Properties

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_Available"></a> Available

Whether the configured documentation directory and default document were found and mapped.

```csharp
public bool Available { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_BrowserPath"></a> BrowserPath

The hosted path to the interactive browser UI.

```csharp
public string BrowserPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_DefaultDocument"></a> DefaultDocument

The document opened when the route prefix is requested.

```csharp
public string DefaultDocument { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_DefaultDocumentPath"></a> DefaultDocumentPath

The hosted path to the configured default document.

```csharp
public string DefaultDocumentPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_Enabled"></a> Enabled

Whether reference-doc hosting is enabled for the current host.

```csharp
public bool Enabled { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_ManifestPath"></a> ManifestPath

The hosted path to the machine-readable manifest.

```csharp
public string ManifestPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_MemberIndexPath"></a> MemberIndexPath

The hosted path to the member index.

```csharp
public string MemberIndexPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_NamespaceIndexPath"></a> NamespaceIndexPath

The hosted path to the namespace index.

```csharp
public string NamespaceIndexPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_ReadmePath"></a> ReadmePath

The hosted path to the reference-doc landing page.

```csharp
public string ReadmePath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_RoutePrefix"></a> RoutePrefix

The route prefix where the documentation is served.

```csharp
public string RoutePrefix { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsSurface_TypeIndexPath"></a> TypeIndexPath

The hosted path to the type index.

```csharp
public string TypeIndexPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
