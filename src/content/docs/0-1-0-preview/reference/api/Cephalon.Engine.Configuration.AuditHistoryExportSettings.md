---
title: Class AuditHistoryExportSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven audit-history export settings for a Cephalon app.

```csharp
public sealed class AuditHistoryExportSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditHistoryExportSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__"></a> AuditHistoryExportSettings\(bool?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.AuditHistoryExportSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AuditHistoryExportSettings(bool? enabled = null, int? maxEntries = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether audit-history export was explicitly enabled.

`maxEntries` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The configured maximum number of entries that one export may stream.

## Fields

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_DefaultMaxEntries"></a> DefaultMaxEntries

Gets the default maximum number of entries that one audit-history export may stream.

```csharp
public const int DefaultMaxEntries = 1000
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_Empty"></a> Empty

Gets an empty audit-history export-settings instance.

```csharp
public static AuditHistoryExportSettings Empty { get; }
```

#### Property Value

 [AuditHistoryExportSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings/)

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_Enabled"></a> Enabled

Gets a value indicating whether audit-history export was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_HasValues"></a> HasValues

Gets a value indicating whether any audit-history export settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_MaxEntries"></a> MaxEntries

Gets the configured maximum number of entries that one export may stream.

```csharp
public int? MaxEntries { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Methods

### <a id="Cephalon_Engine_Configuration_AuditHistoryExportSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads audit-history export settings from the supplied configuration section.

```csharp
public static AuditHistoryExportSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

The audit-history export configuration section to read.

#### Returns

 [AuditHistoryExportSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistoryexportsettings/)

The parsed audit-history export settings.
