---
title: Class AuditSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven audit settings for a Cephalon app.

```csharp
public sealed class AuditSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_AuditSettings__ctor_System_Nullable_System_Boolean__Cephalon_Engine_Configuration_AuditHistorySettings_"></a> AuditSettings\(bool?, AuditHistorySettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.AuditSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AuditSettings(bool? enabled = null, AuditHistorySettings? history = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether audit support was explicitly enabled.

`history` [AuditHistorySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings/)?

The durable audit-history settings resolved for the app.

## Properties

### <a id="Cephalon_Engine_Configuration_AuditSettings_Empty"></a> Empty

Gets an empty audit-settings instance.

```csharp
public static AuditSettings Empty { get; }
```

#### Property Value

 [AuditSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings/)

### <a id="Cephalon_Engine_Configuration_AuditSettings_Enabled"></a> Enabled

Gets a value indicating whether audit support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_AuditSettings_HasValues"></a> HasValues

Gets a value indicating whether any audit settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_AuditSettings_History"></a> History

Gets the durable audit-history settings resolved for the app.

```csharp
public AuditHistorySettings History { get; }
```

#### Property Value

 [AuditHistorySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-audithistorysettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_AuditSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads audit settings from configuration.

```csharp
public static AuditSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [AuditSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-auditsettings/)

The parsed audit settings.
