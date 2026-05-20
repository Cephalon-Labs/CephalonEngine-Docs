---
title: Class ReferenceDocsHostingOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocshostingoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Documentation](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation/)  
Assembly: Cephalon.AspNetCore.dll  

Configures how an ASP.NET Core host serves generated Cephalon reference documentation.

```csharp
public sealed class ReferenceDocsHostingOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocsHostingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocshostingoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options belong to the host layer rather than the engine core because they describe
how already-generated static documentation should be exposed over HTTP.

## Constructors

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions__ctor"></a> ReferenceDocsHostingOptions\(\)

Creates reference-doc hosting options with the default hosted-doc route settings.

```csharp
public ReferenceDocsHostingOptions()
```

## Fields

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_SectionName"></a> SectionName

Gets the default configuration section used for reference-doc hosting.

```csharp
public const string SectionName = "ReferenceDocs"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_DefaultDocument"></a> DefaultDocument

Gets or sets the document that should open when a user requests the route prefix itself.

```csharp
public string DefaultDocument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_DirectoryPath"></a> DirectoryPath

Gets or sets the directory that contains the generated reference-doc output.

```csharp
public string? DirectoryPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Relative paths are resolved against the ASP.NET Core content root.

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether hosted reference docs should be exposed.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_RoutePrefix"></a> RoutePrefix

Gets or sets the route prefix where the documentation should be served.

```csharp
public string RoutePrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The value may be supplied with or without a leading slash. The host normalizes it into a
rooted path such as <code>/reference</code>.

## Methods

### <a id="Cephalon_AspNetCore_Documentation_ReferenceDocsHostingOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_System_String_"></a> FromConfiguration\(IConfiguration, string, string?\)

Binds reference-doc hosting options from configuration.

```csharp
public static ReferenceDocsHostingOptions FromConfiguration(IConfiguration configuration, string sectionPath = "ReferenceDocs", string? contentRootPath = null)
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The section path that contains the hosting settings.

`contentRootPath` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The application content root used to normalize relative documentation paths.

#### Returns

 [ReferenceDocsHostingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-documentation-referencedocshostingoptions/)

The bound and normalized hosting options.
