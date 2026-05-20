---
title: Class RestApiGovernanceOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restapigovernanceoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Configures host-level governance for public REST endpoint publication in Cephalon ASP.NET Core hosts.

```csharp
public sealed class RestApiGovernanceOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestApiGovernanceOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restapigovernanceoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These settings describe host-level publication governance for module-owned REST shorthand paths.
They intentionally stay out of the engine core because they govern the ASP.NET Core public REST surface.

## Constructors

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Transports_RestEndpointPublicationGroupAuthoringPolicyDescriptor__System_Collections_Generic_IReadOnlyList_Cephalon_AspNetCore_Hosting_RestEndpointSuppressionOptions__System_Collections_Generic_IReadOnlyList_Cephalon_AspNetCore_Hosting_RestEndpointOverrideOptions__"></a> RestApiGovernanceOptions\(IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicyDescriptor\>?, IReadOnlyList<RestEndpointSuppressionOptions\>?, IReadOnlyList<RestEndpointOverrideOptions\>?\)

Initializes a new instance of the <xref href="Cephalon.AspNetCore.Hosting.RestApiGovernanceOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RestApiGovernanceOptions(IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicyDescriptor>? authoringPolicies = null, IReadOnlyList<RestEndpointSuppressionOptions>? suppressions = null, IReadOnlyList<RestEndpointOverrideOptions>? overrides = null)
```

#### Parameters

`authoringPolicies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointPublicationGroupAuthoringPolicyDescriptor\>?

The configured behavior-level authoring policies for REST publication groups.

`suppressions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointSuppressionOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointsuppressionoptions/)\>?

The configured suppression rules for shorthand REST candidates.

`overrides` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointoverrideoptions/)\>?

The configured override rules for shorthand REST candidates.

## Fields

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_SectionName"></a> SectionName

Gets the root configuration section used for REST API governance settings.

```csharp
public const string SectionName = "RestApi"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_AuthoringPolicies"></a> AuthoringPolicies

Gets the configured behavior-level authoring policies for REST publication groups.

```csharp
public IReadOnlyList<RestEndpointPublicationGroupAuthoringPolicyDescriptor> AuthoringPolicies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<RestEndpointPublicationGroupAuthoringPolicyDescriptor\>

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_HasValues"></a> HasValues

Gets a value indicating whether any REST governance values were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_Overrides"></a> Overrides

Gets the configured override rules for descriptor-backed REST shorthand candidates.

```csharp
public IReadOnlyList<RestEndpointOverrideOptions> Overrides { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointOverrideOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointoverrideoptions/)\>

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_Suppressions"></a> Suppressions

Gets the configured suppression rules for descriptor-backed REST shorthand candidates.

```csharp
public IReadOnlyList<RestEndpointSuppressionOptions> Suppressions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RestEndpointSuppressionOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointsuppressionoptions/)\>

## Methods

### <a id="Cephalon_AspNetCore_Hosting_RestApiGovernanceOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds and normalizes REST governance settings from configuration.

```csharp
public static RestApiGovernanceOptions FromConfiguration(IConfiguration configuration, string sectionPath = "RestApi")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path to bind.

#### Returns

 [RestApiGovernanceOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restapigovernanceoptions/)

The normalized REST governance settings.
