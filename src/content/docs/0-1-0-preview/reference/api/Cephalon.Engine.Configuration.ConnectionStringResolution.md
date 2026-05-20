---
title: Class ConnectionStringResolution
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-connectionstringresolution
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Resolves a provider connection string from either an inline value or a named entry under
the root <code>ConnectionStrings</code> section.

```csharp
public static class ConnectionStringResolution
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ConnectionStringResolution](/0-1-0-preview/reference/api/cephalon-engine-configuration-connectionstringresolution/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Engine_Configuration_ConnectionStringResolution_Resolve_Microsoft_Extensions_Configuration_IConfiguration_System_String_System_String_System_String_System_String_System_String_"></a> Resolve\(IConfiguration?, string?, string?, string, string, string\)

Resolves the effective connection string for a pack or provider.

```csharp
public static string Resolve(IConfiguration? configuration, string? connectionString, string? connectionStringName, string defaultConnectionString, string sectionPath, string providerDisplayName)
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The application configuration root.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The inline connection string value.

`connectionStringName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The root-level <code>ConnectionStrings</code> key to resolve when an inline value is not used.

`defaultConnectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider default to use when neither an inline value nor a named value is configured.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider options section used for diagnostics.

`providerDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider name used in human-readable error messages.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The resolved connection string.
