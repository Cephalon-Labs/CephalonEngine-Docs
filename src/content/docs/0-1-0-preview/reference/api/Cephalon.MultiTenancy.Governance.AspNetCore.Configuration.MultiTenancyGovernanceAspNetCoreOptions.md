---
title: Class MultiTenancyGovernanceAspNetCoreOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration-multitenancygovernanceaspnetcoreoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Configures ASP.NET Core-specific multi-tenancy governance endpoints.

```csharp
public sealed class MultiTenancyGovernanceAspNetCoreOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyGovernanceAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration-multitenancygovernanceaspnetcoreoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions__ctor"></a> MultiTenancyGovernanceAspNetCoreOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Configuration.MultiTenancyGovernanceAspNetCoreOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiTenancyGovernanceAspNetCoreOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_CacheControlHeader"></a> CacheControlHeader

Gets or sets the cache-control header written for served proof files.

```csharp
public string CacheControlHeader { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableHttpProofPublicationEndpoint"></a> EnableHttpProofPublicationEndpoint

Gets or sets a value indicating whether the HTTP proof publication endpoint should be mapped.

```csharp
public bool EnableHttpProofPublicationEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableTenantAdministrationCommandEndpoint"></a> EnableTenantAdministrationCommandEndpoint

Gets or sets a value indicating whether the tenant-administration command endpoint should be mapped.

```csharp
public bool EnableTenantAdministrationCommandEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableTenantInvitationDeliveryDispatchEndpoint"></a> EnableTenantInvitationDeliveryDispatchEndpoint

Gets or sets a value indicating whether the tenant-invitation delivery dispatch endpoint should be mapped.

```csharp
public bool EnableTenantInvitationDeliveryDispatchEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableTenantInvitationDeliveryStatusCallbackEndpoint"></a> EnableTenantInvitationDeliveryStatusCallbackEndpoint

Gets or sets a value indicating whether the tenant-invitation delivery status callback endpoint should be mapped.

```csharp
public bool EnableTenantInvitationDeliveryStatusCallbackEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableTenantInvitationDeliveryStatusCallbackReplayProtection"></a> EnableTenantInvitationDeliveryStatusCallbackReplayProtection

Gets or sets a value indicating whether signed delivery-status callbacks should be protected against replay inside the current process.

```csharp
public bool EnableTenantInvitationDeliveryStatusCallbackReplayProtection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Replay protection is active only when <xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Configuration.MultiTenancyGovernanceAspNetCoreOptions.TenantInvitationDeliveryStatusCallbackSigningSecret" data-throw-if-not-resolved="false"></xref> is configured and
the request signature verifies successfully. The built-in guard stores bounded signature fingerprints in memory and does not
claim durable inbox storage, cross-node deduplication, or distributed exactly-once delivery.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_EnableTenantInvitationDeliveryStatusObservationEndpoint"></a> EnableTenantInvitationDeliveryStatusObservationEndpoint

Gets or sets a value indicating whether the delivery status observation read endpoint should be mapped.

```csharp
public bool EnableTenantInvitationDeliveryStatusObservationEndpoint { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_ExcludeFromDescription"></a> ExcludeFromDescription

Gets or sets a value indicating whether the proof endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_ExcludeTenantAdministrationEndpointFromDescription"></a> ExcludeTenantAdministrationEndpointFromDescription

Gets or sets a value indicating whether the tenant-administration command endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeTenantAdministrationEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_ExcludeTenantInvitationDeliveryDispatchEndpointFromDescription"></a> ExcludeTenantInvitationDeliveryDispatchEndpointFromDescription

Gets or sets a value indicating whether the tenant-invitation delivery dispatch endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeTenantInvitationDeliveryDispatchEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_ExcludeTenantInvitationDeliveryStatusCallbackEndpointFromDescription"></a> ExcludeTenantInvitationDeliveryStatusCallbackEndpointFromDescription

Gets or sets a value indicating whether the delivery status callback endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeTenantInvitationDeliveryStatusCallbackEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_ExcludeTenantInvitationDeliveryStatusObservationEndpointFromDescription"></a> ExcludeTenantInvitationDeliveryStatusObservationEndpointFromDescription

Gets or sets a value indicating whether the delivery status observation read endpoint should be excluded from OpenAPI descriptions.

```csharp
public bool ExcludeTenantInvitationDeliveryStatusObservationEndpointFromDescription { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RequireTenantAdministrationAuthorization"></a> RequireTenantAdministrationAuthorization

Gets or sets a value indicating whether the tenant-administration command endpoint should require authorization.

```csharp
public bool RequireTenantAdministrationAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint also performs a fail-closed in-handler authorization check so accidental hosts without ASP.NET Core
authorization middleware do not execute tenant-administration commands anonymously.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RequireTenantInvitationDeliveryDispatchAuthorization"></a> RequireTenantInvitationDeliveryDispatchAuthorization

Gets or sets a value indicating whether the tenant-invitation delivery dispatch endpoint should require authorization.

```csharp
public bool RequireTenantInvitationDeliveryDispatchAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint also performs a fail-closed in-handler authorization check so accidental hosts without ASP.NET Core
authorization middleware do not dispatch tenant invitations anonymously.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RequireTenantInvitationDeliveryStatusCallbackAuthorization"></a> RequireTenantInvitationDeliveryStatusCallbackAuthorization

Gets or sets a value indicating whether the delivery status callback endpoint should require authorization.

```csharp
public bool RequireTenantInvitationDeliveryStatusCallbackAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint also performs a fail-closed in-handler authorization check so accidental hosts without ASP.NET Core
authorization middleware do not accept provider or adapter status callbacks anonymously.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RequireTenantInvitationDeliveryStatusCallbackProviderMessageMatch"></a> RequireTenantInvitationDeliveryStatusCallbackProviderMessageMatch

Gets or sets a value indicating whether callback requests must keep provider message matching enabled.

```csharp
public bool RequireTenantInvitationDeliveryStatusCallbackProviderMessageMatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Provider message matching is enforced by default so a generic callback cannot opt out of the host-agnostic
reconciliation safety check unless the host deliberately relaxes this setting.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RequireTenantInvitationDeliveryStatusObservationAuthorization"></a> RequireTenantInvitationDeliveryStatusObservationAuthorization

Gets or sets a value indicating whether the delivery status observation read endpoint should require authorization.

```csharp
public bool RequireTenantInvitationDeliveryStatusObservationAuthorization { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The endpoint also performs a fail-closed in-handler authorization check so accidental hosts without ASP.NET Core
authorization middleware do not expose invitation delivery audit data anonymously.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_RoutePattern"></a> RoutePattern

Gets or sets the endpoint route pattern used for published HTTP proof files.

```csharp
public string RoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default catch-all route is intentionally constrained under <code>/.well-known/cephalon/</code> so it does not
compete with application-owned routes.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantAdministrationAuthorizationPolicy"></a> TenantAdministrationAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the tenant-administration command endpoint.

```csharp
public string? TenantAdministrationAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantAdministrationCommandRoutePattern"></a> TenantAdministrationCommandRoutePattern

Gets or sets the endpoint route pattern used for tenant-administration workflow commands.

```csharp
public string TenantAdministrationCommandRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because the endpoint is an operator/admin surface, not an
application-owned public onboarding API.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryDispatchAuthorizationPolicy"></a> TenantInvitationDeliveryDispatchAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the tenant-invitation delivery dispatch endpoint.

```csharp
public string? TenantInvitationDeliveryDispatchAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryDispatchRoutePattern"></a> TenantInvitationDeliveryDispatchRoutePattern

Gets or sets the endpoint route pattern used for tenant-invitation delivery dispatch requests.

```csharp
public string TenantInvitationDeliveryDispatchRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because the endpoint is an operator/action surface over the
host-agnostic dispatcher, not a product-owned public onboarding API.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackAuthorizationPolicy"></a> TenantInvitationDeliveryStatusCallbackAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the delivery status callback endpoint.

```csharp
public string? TenantInvitationDeliveryStatusCallbackAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackReplayCacheLimit"></a> TenantInvitationDeliveryStatusCallbackReplayCacheLimit

Gets or sets the maximum number of signed callback replay fingerprints retained in the current process.

```csharp
public int TenantInvitationDeliveryStatusCallbackReplayCacheLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

When the bounded cache is full, the oldest fingerprint is evicted before recording a new accepted signed callback.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackReplayRetentionSeconds"></a> TenantInvitationDeliveryStatusCallbackReplayRetentionSeconds

Gets or sets the process-local retention window, in seconds, for signed callback replay fingerprints.

```csharp
public int TenantInvitationDeliveryStatusCallbackReplayRetentionSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The endpoint clamps the effective retention to at least one second. The default matches the signature timestamp tolerance.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackRoutePattern"></a> TenantInvitationDeliveryStatusCallbackRoutePattern

Gets or sets the endpoint route pattern used for normalized tenant-invitation delivery status callbacks.

```csharp
public string TenantInvitationDeliveryStatusCallbackRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because the endpoint is an operator/provider-adapter ingress surface,
not an application-owned public onboarding API.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSignatureHeaderName"></a> TenantInvitationDeliveryStatusCallbackSignatureHeaderName

Gets or sets the request header that carries the callback signature.

```csharp
public string TenantInvitationDeliveryStatusCallbackSignatureHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSignatureKeyIdHeaderName"></a> TenantInvitationDeliveryStatusCallbackSignatureKeyIdHeaderName

Gets or sets the request header that carries the optional callback signing key identifier.

```csharp
public string TenantInvitationDeliveryStatusCallbackSignatureKeyIdHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSignatureTimestampHeaderName"></a> TenantInvitationDeliveryStatusCallbackSignatureTimestampHeaderName

Gets or sets the request header that carries the Unix timestamp included in the callback signature.

```csharp
public string TenantInvitationDeliveryStatusCallbackSignatureTimestampHeaderName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSignatureToleranceSeconds"></a> TenantInvitationDeliveryStatusCallbackSignatureToleranceSeconds

Gets or sets the allowed clock skew, in seconds, for signed delivery-status callback timestamps.

```csharp
public int TenantInvitationDeliveryStatusCallbackSignatureToleranceSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

The endpoint clamps the effective tolerance to at least one second. The default is five minutes.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSigningKeyId"></a> TenantInvitationDeliveryStatusCallbackSigningKeyId

Gets or sets the optional signing key identifier expected on signed delivery-status callback requests.

```csharp
public string? TenantInvitationDeliveryStatusCallbackSigningKeyId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusCallbackSigningSecret"></a> TenantInvitationDeliveryStatusCallbackSigningSecret

Gets or sets the shared secret used to verify normalized delivery-status callback request bodies with HMAC-SHA256.

```csharp
public string? TenantInvitationDeliveryStatusCallbackSigningSecret { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

When a value is configured, every callback request must include a valid Cephalon callback signature before the
request is reconciled. Leave this empty when the host uses ASP.NET Core authorization or a provider-specific
companion to authenticate callback ingress instead.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusObservationAuthorizationPolicy"></a> TenantInvitationDeliveryStatusObservationAuthorizationPolicy

Gets or sets the optional ASP.NET Core authorization policy required by the delivery status observation read endpoint.

```csharp
public string? TenantInvitationDeliveryStatusObservationAuthorizationPolicy { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusObservationDefaultLimit"></a> TenantInvitationDeliveryStatusObservationDefaultLimit

Gets or sets the default number of observations returned when a read request does not specify a limit.

```csharp
public int TenantInvitationDeliveryStatusObservationDefaultLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusObservationMaxLimit"></a> TenantInvitationDeliveryStatusObservationMaxLimit

Gets or sets the maximum number of observations returned by one read request.

```csharp
public int TenantInvitationDeliveryStatusObservationMaxLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_TenantInvitationDeliveryStatusObservationRoutePattern"></a> TenantInvitationDeliveryStatusObservationRoutePattern

Gets or sets the endpoint route pattern used for reading normalized tenant-invitation delivery status observations.

```csharp
public string TenantInvitationDeliveryStatusObservationRoutePattern { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The default route stays under <code>/engine</code> because the endpoint is an operator/audit surface over Cephalon's
normalized observation store, not a provider-specific callback inbox.

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Configuration_MultiTenancyGovernanceAspNetCoreOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads ASP.NET Core governance adapter options from configuration.

```csharp
public static MultiTenancyGovernanceAspNetCoreOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The root configuration that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The engine root section path to read from.

#### Returns

 [MultiTenancyGovernanceAspNetCoreOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-configuration-multitenancygovernanceaspnetcoreoptions/)

The parsed ASP.NET Core governance adapter options.
