---
title: Class RestEndpointRuntimeMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimemetadatakeys
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Defines stable metadata keys used by REST endpoint runtime descriptors.

```csharp
public static class RestEndpointRuntimeMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RestEndpointRuntimeMetadataKeys](/0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointruntimemetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These keys appear in <xref href="Cephalon.Abstractions.Transports.RestEndpointRuntimeDescriptor.Metadata" data-throw-if-not-resolved="false"></xref> as additive
operator-facing context. First-class descriptor properties remain authoritative for core
endpoint shape, while metadata clarifies compatibility and ownership details that should stay
inspectable without parsing host-specific endpoint metadata.

## Fields

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_AuthoringStyle"></a> AuthoringStyle

Identifies the normalized authoring style that produced the runtime endpoint.

```csharp
public const string AuthoringStyle = "authoringStyle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_BehaviorType"></a> BehaviorType

Identifies the concrete behavior implementation type behind a behavior-backed REST endpoint.

```csharp
public const string BehaviorType = "behaviorType"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_BindingFallbackMode"></a> BindingFallbackMode

Identifies the stable wire name for a preserved request-binding fallback mode.

```csharp
public const string BindingFallbackMode = "bindingFallbackMode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_Method"></a> Method

Identifies the HTTP method that was resolved for the runtime endpoint.

```csharp
public const string Method = "method"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RelativePattern"></a> RelativePattern

Identifies the route pattern relative to the grouped REST endpoint publication boundary.

```csharp
public const string RelativePattern = "relativePattern"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RequiredCapabilityKey"></a> RequiredCapabilityKey

Identifies the required Cephalon capability key enforced at the REST boundary.

```csharp
public const string RequiredCapabilityKey = "requiredCapabilityKey"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Identifies the comma-separated required Cephalon feature flags enforced at the REST boundary.

```csharp
public const string RequiredFeatureFlagIds = "requiredFeatureFlagIds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RestMaterializationOwnership"></a> RestMaterializationOwnership

Identifies who owns the ASP.NET Core route materialization, runtime catalog, and governance reconciliation path.

```csharp
public const string RestMaterializationOwnership = "restMaterializationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RestProfileMetadataOwnership"></a> RestProfileMetadataOwnership

Identifies who owns behavior-authored REST profile metadata consumed by low-code shorthand.

```csharp
public const string RestProfileMetadataOwnership = "restProfileMetadataOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RestPublicationActivationMode"></a> RestPublicationActivationMode

Identifies how the public REST publication path was explicitly activated.

```csharp
public const string RestPublicationActivationMode = "restPublicationActivationMode"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RestPublicationActivationOwnership"></a> RestPublicationActivationOwnership

Identifies who owns the decision to activate the public REST publication path.

```csharp
public const string RestPublicationActivationOwnership = "restPublicationActivationOwnership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_RouteGroupPrefix"></a> RouteGroupPrefix

Identifies the resolved route-group prefix for grouped REST endpoint publication.

```csharp
public const string RouteGroupPrefix = "routeGroupPrefix"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Transports_RestEndpointRuntimeMetadataKeys_SourceId"></a> SourceId

Identifies the stable source identity behind the runtime endpoint.

```csharp
public const string SourceId = "sourceId"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
