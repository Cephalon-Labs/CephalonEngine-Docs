---
title: Class OpenApiTagMetadata
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-openapitagmetadata
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Documentation](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation/)  
Assembly: Cephalon.AspNetCore.dll  

Describes OpenAPI tag metadata projected from ASP.NET Core route groups or endpoints.

```csharp
public sealed record OpenApiTagMetadata : IEquatable<OpenApiTagMetadata>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenApiTagMetadata](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-openapitagmetadata/)

#### Implements

[IEquatable<OpenApiTagMetadata\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Documentation_OpenApiTagMetadata__ctor_System_String_System_String_"></a> OpenApiTagMetadata\(string, string?\)

Describes OpenAPI tag metadata projected from ASP.NET Core route groups or endpoints.

```csharp
public OpenApiTagMetadata(string Name, string? Description)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The public tag name shown in OpenAPI and Scalar.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional tag description shown in OpenAPI and Scalar.

## Properties

### <a id="Cephalon_AspNetCore_Documentation_OpenApiTagMetadata_Description"></a> Description

The optional tag description shown in OpenAPI and Scalar.

```csharp
public string? Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Documentation_OpenApiTagMetadata_Name"></a> Name

The public tag name shown in OpenAPI and Scalar.

```csharp
public string Name { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
