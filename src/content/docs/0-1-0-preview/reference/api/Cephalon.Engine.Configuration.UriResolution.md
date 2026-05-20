---
title: Class UriResolution
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-uriresolution
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Resolves a provider URI from either an inline value or a named entry under
the root <code>Uris</code> section.

```csharp
public static class UriResolution
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UriResolution](/0-1-0-preview/reference/api/cephalon-engine-configuration-uriresolution/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Engine_Configuration_UriResolution_Resolve_Microsoft_Extensions_Configuration_IConfiguration_System_String_System_String_System_String_System_String_System_String_"></a> Resolve\(IConfiguration?, string?, string?, string, string, string\)

Resolves the effective provider URI for a pack or provider.

```csharp
public static string Resolve(IConfiguration? configuration, string? uri, string? uriName, string defaultUri, string sectionPath, string providerDisplayName)
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The application configuration root.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The inline URI value.

`uriName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The root-level <code>Uris</code> key to resolve when an inline value is not used.

`defaultUri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider default to use when neither an inline value nor a named value is configured.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider options section used for diagnostics.

`providerDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider name used in human-readable error messages.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved URI string.
