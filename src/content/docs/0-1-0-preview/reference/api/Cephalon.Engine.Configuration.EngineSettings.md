---
title: Class EngineSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-enginesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Represents the configuration-driven app-model and runtime policy settings for Cephalon.

```csharp
public sealed class EngineSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EngineSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-enginesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_EngineSettings__ctor_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__Cephalon_Engine_Configuration_EngineOptions_Cephalon_Engine_Configuration_ModuleDiscoverySettings_Cephalon_Engine_Configuration_LocalizationSettings_Cephalon_Engine_Configuration_FailurePolicy_Cephalon_Engine_Configuration_TrustPolicy_Cephalon_Engine_Configuration_PackagePolicy_Cephalon_Engine_Configuration_DataSettings_Cephalon_Engine_Configuration_DatabaseTopologySettings_Cephalon_Engine_Configuration_IdentitySettings_Cephalon_Engine_Configuration_TenancySettings_Cephalon_Engine_Configuration_AuditSettings_Cephalon_Engine_Configuration_MessagingSettings_Cephalon_Engine_Configuration_ResilienceSettings_Cephalon_Engine_Configuration_MigrationSettings_Cephalon_Engine_Configuration_BackendForFrontendSettings_Cephalon_Engine_Configuration_FeatureSettings_Cephalon_Engine_Configuration_CellSettings_"></a> EngineSettings\(string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, EngineOptions?, ModuleDiscoverySettings?, LocalizationSettings?, FailurePolicy?, TrustPolicy?, PackagePolicy?, DataSettings?, DatabaseTopologySettings?, IdentitySettings?, TenancySettings?, AuditSettings?, MessagingSettings?, ResilienceSettings?, MigrationSettings?, BackendForFrontendSettings?, FeatureSettings?, CellSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.EngineSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EngineSettings(string? blueprint = null, IReadOnlyList<string>? patterns = null, IReadOnlyList<string>? transports = null, IReadOnlyList<string>? technologies = null, EngineOptions? options = null, ModuleDiscoverySettings? discovery = null, LocalizationSettings? localization = null, FailurePolicy? failurePolicy = null, TrustPolicy? trustPolicy = null, PackagePolicy? packagePolicy = null, DataSettings? data = null, DatabaseTopologySettings? databases = null, IdentitySettings? identity = null, TenancySettings? tenancy = null, AuditSettings? audit = null, MessagingSettings? messaging = null, ResilienceSettings? resilience = null, MigrationSettings? migration = null, BackendForFrontendSettings? backendForFrontend = null, FeatureSettings? features = null, CellSettings? cells = null)
```

#### Parameters

`blueprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected blueprint identifier, if any.

`patterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The selected pattern identifiers.

`transports` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The selected transport identifiers.

`technologies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The selected technology identifiers.

`options` [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)?

Module and capability option overrides.

`discovery` [ModuleDiscoverySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings/)?

Module discovery inputs.

`localization` [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)?

Localization configuration values.

`failurePolicy` [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)?

Runtime failure policy values.

`trustPolicy` [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)?

Capability and package trust policy values.

`packagePolicy` [PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)?

Package metadata and integrity policy values.

`data` [DataSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings/)?

Configuration-driven data settings.

`databases` [DatabaseTopologySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings/)?

Configuration-driven database topology settings.

`identity` [IdentitySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings/)?

Configuration-driven identity and authorization settings.

`tenancy` [TenancySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings/)?

Configuration-driven multi-tenancy settings.

`audit` [AuditSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings/)?

Configuration-driven audit settings.

`messaging` [MessagingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings/)?

Configuration-driven messaging settings.

`resilience` [ResilienceSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings/)?

Configuration-driven resilience settings.

`migration` [MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)?

Configuration-driven migration settings.

`backendForFrontend` [BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)?

Configuration-driven backend-for-frontend settings.

`features` [FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)?

Configuration-driven feature-flag settings.

`cells` [CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)?

Configuration-driven cell-based architecture settings.

## Fields

### <a id="Cephalon_Engine_Configuration_EngineSettings_SectionName"></a> SectionName

Gets the default root configuration section name for engine settings.

```csharp
public const string SectionName = "Engine"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Engine_Configuration_EngineSettings_Audit"></a> Audit

Gets configuration-driven audit settings.

```csharp
public AuditSettings Audit { get; }
```

#### Property Value

 [AuditSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_BackendForFrontend"></a> BackendForFrontend

Gets configuration-driven backend-for-frontend settings.

```csharp
public BackendForFrontendSettings BackendForFrontend { get; }
```

#### Property Value

 [BackendForFrontendSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-backendforfrontendsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Blueprint"></a> Blueprint

Gets the selected blueprint identifier.

```csharp
public string? Blueprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_EngineSettings_Cells"></a> Cells

Gets configuration-driven cell-based architecture settings.

```csharp
public CellSettings Cells { get; }
```

#### Property Value

 [CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Data"></a> Data

Gets configuration-driven data settings.

```csharp
public DataSettings Data { get; }
```

#### Property Value

 [DataSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-datasettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Databases"></a> Databases

Gets configuration-driven database topology settings.

```csharp
public DatabaseTopologySettings Databases { get; }
```

#### Property Value

 [DatabaseTopologySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-databasetopologysettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Discovery"></a> Discovery

Gets module discovery inputs.

```csharp
public ModuleDiscoverySettings Discovery { get; }
```

#### Property Value

 [ModuleDiscoverySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_FailurePolicy"></a> FailurePolicy

Gets runtime failure policy values.

```csharp
public FailurePolicy FailurePolicy { get; }
```

#### Property Value

 [FailurePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-failurepolicy/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Features"></a> Features

Gets configuration-driven feature-flag settings.

```csharp
public FeatureSettings Features { get; }
```

#### Property Value

 [FeatureSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-featuresettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_HasValues"></a> HasValues

Gets a value indicating whether any engine settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Identity"></a> Identity

Gets configuration-driven identity and authorization settings.

```csharp
public IdentitySettings Identity { get; }
```

#### Property Value

 [IdentitySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-identitysettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Localization"></a> Localization

Gets localization configuration values.

```csharp
public LocalizationSettings Localization { get; }
```

#### Property Value

 [LocalizationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-localizationsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Messaging"></a> Messaging

Gets configuration-driven messaging settings.

```csharp
public MessagingSettings Messaging { get; }
```

#### Property Value

 [MessagingSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-messagingsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Migration"></a> Migration

Gets configuration-driven migration settings.

```csharp
public MigrationSettings Migration { get; }
```

#### Property Value

 [MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Options"></a> Options

Gets module and capability option overrides.

```csharp
public EngineOptions Options { get; }
```

#### Property Value

 [EngineOptions](/0-1-0-preview/reference/api/cephalon-engine-configuration-engineoptions/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_PackagePolicy"></a> PackagePolicy

Gets package metadata and integrity policy values.

```csharp
public PackagePolicy PackagePolicy { get; }
```

#### Property Value

 [PackagePolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-packagepolicy/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Patterns"></a> Patterns

Gets the selected pattern identifiers.

```csharp
public IReadOnlyList<string> Patterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_EngineSettings_Resilience"></a> Resilience

Gets configuration-driven resilience settings.

```csharp
public ResilienceSettings Resilience { get; }
```

#### Property Value

 [ResilienceSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-resiliencesettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Technologies"></a> Technologies

Gets the selected technology identifiers.

```csharp
public IReadOnlyList<string> Technologies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_EngineSettings_Tenancy"></a> Tenancy

Gets configuration-driven multi-tenancy settings.

```csharp
public TenancySettings Tenancy { get; }
```

#### Property Value

 [TenancySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-tenancysettings/)

### <a id="Cephalon_Engine_Configuration_EngineSettings_Transports"></a> Transports

Gets the selected transport identifiers.

```csharp
public IReadOnlyList<string> Transports { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_EngineSettings_TrustPolicy"></a> TrustPolicy

Gets capability and package trust policy values.

```csharp
public TrustPolicy TrustPolicy { get; }
```

#### Property Value

 [TrustPolicy](/0-1-0-preview/reference/api/cephalon-engine-configuration-trustpolicy/)

## Methods

### <a id="Cephalon_Engine_Configuration_EngineSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads engine settings from configuration.

```csharp
public static EngineSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [EngineSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-enginesettings/)

The parsed engine settings.
