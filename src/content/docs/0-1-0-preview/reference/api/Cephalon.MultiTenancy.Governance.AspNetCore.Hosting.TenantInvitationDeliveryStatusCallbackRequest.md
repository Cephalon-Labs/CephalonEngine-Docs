---
title: Class TenantInvitationDeliveryStatusCallbackRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatuscallbackrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Describes a normalized ASP.NET Core tenant-invitation delivery status callback request.

```csharp
public sealed class TenantInvitationDeliveryStatusCallbackRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusCallbackRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatuscallbackrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Provider-specific webhook payloads should be translated into this provider-neutral shape by the host or a future
provider companion before the request is reconciled by Cephalon governance.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest__ctor"></a> TenantInvitationDeliveryStatusCallbackRequest\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Hosting.TenantInvitationDeliveryStatusCallbackRequest" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TenantInvitationDeliveryStatusCallbackRequest()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Actor"></a> Actor

Gets or sets the actor that reported the status observation when known.

```csharp
public string? Actor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Channel"></a> Channel

Gets or sets the delivery channel associated with the status observation.

```csharp
public string? Channel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_CorrelationId"></a> CorrelationId

Gets or sets the optional correlation identifier for the status observation.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_InvitationId"></a> InvitationId

Gets or sets the invitation identifier to reconcile.

```csharp
public string? InvitationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Metadata"></a> Metadata

Gets or sets optional delivery status metadata.

```csharp
public IDictionary<string, string>? Metadata { get; set; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_ObservedAtUtc"></a> ObservedAtUtc

Gets or sets the UTC timestamp when the status was observed. The runtime clock is used when omitted.

```csharp
public DateTimeOffset? ObservedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_ProviderMessageId"></a> ProviderMessageId

Gets or sets the provider message identifier associated with the status observation.

```csharp
public string? ProviderMessageId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Reason"></a> Reason

Gets or sets the provider or receiver status reason.

```csharp
public string? Reason { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_RecordStatus"></a> RecordStatus

Gets or sets a value indicating whether reconciled status metadata should be recorded on the invitation.

```csharp
public bool RecordStatus { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_RequireProviderMessageMatch"></a> RequireProviderMessageMatch

Gets or sets a value indicating whether an existing dispatch provider message identifier must match the request.

```csharp
public bool RequireProviderMessageMatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Hosts can also enforce matching through
<xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Configuration.MultiTenancyGovernanceAspNetCoreOptions.RequireTenantInvitationDeliveryStatusCallbackProviderMessageMatch" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_SenderId"></a> SenderId

Gets or sets the delivery sender identifier associated with the status observation.

```csharp
public string? SenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Source"></a> Source

Gets or sets the source that reported the status observation.

```csharp
public string? Source { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_Status"></a> Status

Gets or sets the provider or receiver delivery status.

```csharp
public string? Status { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackRequest_TenantId"></a> TenantId

Gets or sets the tenant identifier that owns the invitation.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
