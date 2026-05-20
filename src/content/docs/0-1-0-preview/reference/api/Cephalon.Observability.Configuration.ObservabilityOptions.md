---
title: Class ObservabilityOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-configuration-observabilityoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Configuration](/0-1-0-preview/reference/api/cephalon-observability-configuration/)  
Assembly: Cephalon.Observability.dll  

Configures the built-in Cephalon observability package.

```csharp
public sealed class ObservabilityOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservabilityOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-observabilityoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions__ctor"></a> ObservabilityOptions\(\)

Creates observability options with the default startup diagnostics behavior.

```csharp
public ObservabilityOptions()
```

## Properties

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions_LogCapabilitySummary"></a> LogCapabilitySummary

Gets or sets a value indicating whether a capability summary should be written at host startup.

```csharp
public bool LogCapabilitySummary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions_LogManifestSummary"></a> LogManifestSummary

Gets or sets a value indicating whether a manifest summary should be written at host startup.

```csharp
public bool LogManifestSummary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions_LogModuleSummary"></a> LogModuleSummary

Gets or sets a value indicating whether a module summary should be written at host startup.

```csharp
public bool LogModuleSummary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions_Telemetry"></a> Telemetry

Gets or sets the telemetry export guidance associated with the host.

```csharp
public TelemetryExportOptions Telemetry { get; set; }
```

#### Property Value

 [TelemetryExportOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-telemetryexportoptions/)

## Methods

### <a id="Cephalon_Observability_Configuration_ObservabilityOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds observability options from configuration.

```csharp
public static ObservabilityOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [ObservabilityOptions](/0-1-0-preview/reference/api/cephalon-observability-configuration-observabilityoptions/)

The bound observability options.
