---
title: Enum RestEndpointOverrideActionKind
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointoverrideactionkind
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes one configured or materially applied REST override action dimension.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointOverrideActionKind>))]
public enum RestEndpointOverrideActionKind
```

#### Extension Methods

[RestEndpointOverrideActionKindExtensions.GetWireName\(RestEndpointOverrideActionKind\)](Cephalon.Abstractions.Transports.RestEndpointOverrideActionKindExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointOverrideActionKindExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointOverrideActionKind\_)

## Fields

`ApiVersionMajor = 1` 

The rule changes the effective public API major version.



`ClearBindings = 18` 

The rule clears the explicit request-binding plan and returns to the implicit baseline.



`ClearDescription = 12` 

The rule clears any previously declared endpoint description.



`ClearEndpointName = 10` 

The rule clears any previously declared endpoint name.



`ClearRequiredCapability = 14` 

The rule clears any previously declared required Cephalon capability key.



`ClearRequiredFeatureFlags = 21` 

The rule clears any previously declared required Cephalon feature-flag identifiers.



`ClearSummary = 11` 

The rule clears any previously declared endpoint summary.



`Description = 9` 

The rule changes the effective endpoint description.



`EndpointName = 7` 

The rule changes the effective endpoint name.



`MergeBindings = 16` 

The rule merges changes into the explicit request-binding plan.



`Method = 2` 

The rule changes the effective HTTP method.



`OpenApiDocumentName = 5` 

The rule changes the effective OpenAPI document name.



`Pattern = 3` 

The rule changes the effective relative route pattern.



`PreserveImplicitQueryFallback = 19` 

The rule opts the matched explicit-binding shorthand candidate into preserved implicit-query fallback.



`RemoveBindingProperties = 17` 

The rule removes explicit request-binding properties from the source plan.



`ReplaceBindings = 15` 

The rule replaces the explicit request-binding plan.



`RequiredCapabilityKey = 13` 

The rule changes the required Cephalon capability key.



`RequiredFeatureFlagIds = 20` 

The rule changes the required Cephalon feature-flag identifiers.



`RouteGroupPrefix = 4` 

The rule changes the effective published route-group prefix.



`Summary = 8` 

The rule changes the effective endpoint summary.



`TagName = 6` 

The rule changes the effective primary OpenAPI tag name.



`Unspecified = 0` 

The action kind was not classified.
