---
title: Class TenancySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven multi-tenancy settings for a Cephalon app.

```csharp
public sealed class TenancySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenancySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_TenancySettings__ctor_System_Nullable_System_Boolean__System_String_"></a> TenancySettings\(bool?, string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.TenancySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TenancySettings(bool? enabled = null, string? mode = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether multi-tenancy was explicitly enabled.

`mode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected tenancy mode.

## Properties

### <a id="Cephalon_Engine_Configuration_TenancySettings_Empty"></a> Empty

Gets an empty tenancy-settings instance.

```csharp
public static TenancySettings Empty { get; }
```

#### Property Value

 [TenancySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings/)

### <a id="Cephalon_Engine_Configuration_TenancySettings_Enabled"></a> Enabled

Gets a value indicating whether multi-tenancy was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_TenancySettings_HasValues"></a> HasValues

Gets a value indicating whether any tenancy settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_TenancySettings_Mode"></a> Mode

Gets the selected tenancy mode.

```csharp
public string? Mode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Engine_Configuration_TenancySettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads tenancy settings from configuration.

```csharp
public static TenancySettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [TenancySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings/)

The parsed tenancy settings.
