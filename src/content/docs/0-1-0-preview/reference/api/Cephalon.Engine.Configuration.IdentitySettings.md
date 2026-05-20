---
title: Class IdentitySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven identity and authorization settings for a Cephalon app.

```csharp
public sealed class IdentitySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdentitySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_IdentitySettings__ctor_System_Nullable_System_Boolean__System_Collections_Generic_IReadOnlyList_System_String__"></a> IdentitySettings\(bool?, IReadOnlyList<string\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.IdentitySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public IdentitySettings(bool? enabled = null, IReadOnlyList<string>? authorizationModes = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether identity and authorization support was explicitly enabled.

`authorizationModes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The selected authorization modes.

## Properties

### <a id="Cephalon_Engine_Configuration_IdentitySettings_AuthorizationModes"></a> AuthorizationModes

Gets the selected authorization modes.

```csharp
public IReadOnlyList<string> AuthorizationModes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_IdentitySettings_Empty"></a> Empty

Gets an empty identity-settings instance.

```csharp
public static IdentitySettings Empty { get; }
```

#### Property Value

 [IdentitySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings/)

### <a id="Cephalon_Engine_Configuration_IdentitySettings_Enabled"></a> Enabled

Gets a value indicating whether identity and authorization support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_IdentitySettings_HasValues"></a> HasValues

Gets a value indicating whether any identity settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Engine_Configuration_IdentitySettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads identity settings from configuration.

```csharp
public static IdentitySettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [IdentitySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings/)

The parsed identity settings.
