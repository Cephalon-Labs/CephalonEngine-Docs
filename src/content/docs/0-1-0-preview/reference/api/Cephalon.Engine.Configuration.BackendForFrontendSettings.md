---
title: Class BackendForFrontendSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven backend-for-frontend settings for a Cephalon app.

```csharp
public sealed class BackendForFrontendSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_BackendForFrontendSettings__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_BackendForFrontendClientBindingSettings__"></a> BackendForFrontendSettings\(IReadOnlyList<BackendForFrontendClientBindingSettings\>?\)

Creates backend-for-frontend settings.

```csharp
public BackendForFrontendSettings(IReadOnlyList<BackendForFrontendClientBindingSettings>? bindings = null)
```

#### Parameters

`bindings` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendclientbindingsettings/)\>?

The client-specific transport bindings configured for the app.

## Properties

### <a id="Cephalon_Engine_Configuration_BackendForFrontendSettings_Bindings"></a> Bindings

Gets the client-specific transport bindings configured for the app.

```csharp
public IReadOnlyList<BackendForFrontendClientBindingSettings> Bindings { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BackendForFrontendClientBindingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendclientbindingsettings/)\>

### <a id="Cephalon_Engine_Configuration_BackendForFrontendSettings_Empty"></a> Empty

Gets an empty backend-for-frontend settings instance.

```csharp
public static BackendForFrontendSettings Empty { get; }
```

#### Property Value

 [BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)

### <a id="Cephalon_Engine_Configuration_BackendForFrontendSettings_HasValues"></a> HasValues

Gets a value indicating whether any backend-for-frontend settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="Cephalon_Engine_Configuration_BackendForFrontendSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads backend-for-frontend settings from configuration.

```csharp
public static BackendForFrontendSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)

The parsed backend-for-frontend settings.
