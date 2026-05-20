---
title: Class AzureMonitorExportOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-azuremonitor-configuration-azuremonitorexportoptions
editUrl: false
---

Namespace: [Cephalon.Observability.AzureMonitor.Configuration](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-configuration/)  
Assembly: Cephalon.Observability.AzureMonitor.dll  

Configures Azure Monitor exporter wiring on top of the shared Cephalon telemetry contract.

```csharp
public sealed class AzureMonitorExportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AzureMonitorExportOptions](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-configuration-azuremonitorexportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions__ctor"></a> AzureMonitorExportOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.AzureMonitor.Configuration.AzureMonitorExportOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AzureMonitorExportOptions()
```

## Properties

### <a id="Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions_ConnectionString"></a> ConnectionString

Gets or sets the Azure Monitor / Application Insights connection string used by the exporter.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions_HostedPlatform"></a> HostedPlatform

Gets or sets the hosted Azure platform whose default resource attributes should be applied.

```csharp
public string? HostedPlatform { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Supported values are <code>appservice</code>, <code>functions</code>, <code>aks</code>, <code>containerapps</code>, and <code>vm</code>.
The package maps them to the current OpenTelemetry <code>cloud.platform</code> attribute values.

### <a id="Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions_UseDefaultAzureCredential"></a> UseDefaultAzureCredential

Gets or sets a value indicating whether the exporter should authenticate with <code>DefaultAzureCredential</code>.

```csharp
public bool UseDefaultAzureCredential { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The connection string still determines the Azure Monitor resource endpoint. This flag only adds
Azure Active Directory authentication on top of that endpoint selection.

## Methods

### <a id="Cephalon_Observability_AzureMonitor_Configuration_AzureMonitorExportOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Azure Monitor export options from configuration.

```csharp
public static AzureMonitorExportOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [AzureMonitorExportOptions](/0-1-0-preview/reference/api/cephalon-observability-azuremonitor-configuration-azuremonitorexportoptions/)

The bound Azure Monitor export options.
