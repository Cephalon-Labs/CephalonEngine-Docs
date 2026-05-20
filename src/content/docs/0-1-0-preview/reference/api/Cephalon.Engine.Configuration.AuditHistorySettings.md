---
title: Class AuditHistorySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven durable audit-history settings for a Cephalon app.

```csharp
public sealed class AuditHistorySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistorySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings__ctor_System_Nullable_System_Boolean__System_String_System_String_Cephalon_Engine_Configuration_AuditHistoryExportSettings_Cephalon_Engine_Configuration_AuditHistoryRetentionSettings_"></a> AuditHistorySettings\(bool?, string?, string?, AuditHistoryExportSettings?, AuditHistoryRetentionSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.AuditHistorySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AuditHistorySettings(bool? enabled = null, string? provider = null, string? databaseRole = null, AuditHistoryExportSettings? export = null, AuditHistoryRetentionSettings? retention = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether durable audit history was explicitly enabled.

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected durable history provider identifier.

`databaseRole` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The selected logical database role for durable history.

`export` [AuditHistoryExportSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings/)?

The configured export settings for durable history.

`retention` [AuditHistoryRetentionSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings/)?

The selected retention settings for durable history.

## Fields

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_DefaultDatabaseRole"></a> DefaultDatabaseRole

Gets the default logical database role used by the durable audit-history path.

```csharp
public const string DefaultDatabaseRole = "history"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_DatabaseRole"></a> DatabaseRole

Gets the selected logical database role used by durable history.

```csharp
public string? DatabaseRole { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_Empty"></a> Empty

Gets an empty audit-history settings instance.

```csharp
public static AuditHistorySettings Empty { get; }
```

#### Property Value

 [AuditHistorySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings/)

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_Enabled"></a> Enabled

Gets a value indicating whether durable audit history was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_Export"></a> Export

Gets the configured export settings for durable history.

```csharp
public AuditHistoryExportSettings Export { get; }
```

#### Property Value

 [AuditHistoryExportSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings/)

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_HasValues"></a> HasValues

Gets a value indicating whether any durable audit-history settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_Provider"></a> Provider

Gets the selected durable history provider identifier.

```csharp
public string? Provider { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_Retention"></a> Retention

Gets the configured retention settings for durable history.

```csharp
public AuditHistoryRetentionSettings Retention { get; }
```

#### Property Value

 [AuditHistoryRetentionSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryretentionsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_AuditHistorySettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads durable audit-history settings from the supplied configuration section.

```csharp
public static AuditHistorySettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

The audit-history configuration section to read.

#### Returns

 [AuditHistorySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings/)

The parsed durable audit-history settings.
