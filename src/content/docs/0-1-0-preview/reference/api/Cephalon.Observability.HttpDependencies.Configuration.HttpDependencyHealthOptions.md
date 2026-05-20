---
title: Class HttpDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.HttpDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration/)  
Assembly: Cephalon.Observability.HttpDependencies.dll  

Configures HTTP and external API dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class HttpDependencyHealthOptions : DependencyHealthOptionsBase<HttpDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<HttpDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[HttpDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<HttpDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<HttpDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyHealthOptions__ctor"></a> HttpDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.HttpDependencies.Configuration.HttpDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HttpDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds HTTP dependency-health options from configuration.

```csharp
public static HttpDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [HttpDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencyhealthoptions/)

The bound dependency-health options.
