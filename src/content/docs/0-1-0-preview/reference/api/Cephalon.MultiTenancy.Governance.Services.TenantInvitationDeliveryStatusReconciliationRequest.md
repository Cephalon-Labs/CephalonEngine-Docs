---
title: Class TenantInvitationDeliveryStatusReconciliationRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant invitation delivery status reconciliation request.

```csharp
public sealed class TenantInvitationDeliveryStatusReconciliationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusReconciliationRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_String_System_Boolean_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryStatusReconciliationRequest\(string, string, string, string?, string?, string?, string?, DateTimeOffset?, string?, string?, string?, bool, bool, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery status reconciliation request.

```csharp
public TenantInvitationDeliveryStatusReconciliationRequest(string tenantId, string invitationId, string status, string? providerMessageId = null, string? senderId = null, string? channel = null, string? reason = null, DateTimeOffset? observedAtUtc = null, string? source = null, string? actor = null, string? correlationId = null, bool recordStatus = true, bool requireProviderMessageMatch = true, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the invitation.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to reconcile.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider or receiver delivery status.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier associated with the status observation.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery sender identifier associated with the status observation.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery channel associated with the status observation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider or receiver status reason.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the status was observed. The runtime clock is used when omitted.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that reported the status observation.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that reported the status observation when known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the status observation.

`recordStatus` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether reconciled status metadata should be recorded on the invitation.

`requireProviderMessageMatch` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether an existing dispatch provider message identifier must match the request.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional delivery status metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Actor"></a> Actor

Gets the actor that reported the status observation when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Channel"></a> Channel

Gets the delivery channel associated with the status observation.

```csharp
public string? Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the status observation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_InvitationId"></a> InvitationId

Gets the invitation identifier to reconcile.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Metadata"></a> Metadata

Gets optional delivery status metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the status was observed.

```csharp
public DateTimeOffset? ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier associated with the status observation.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Reason"></a> Reason

Gets the provider or receiver status reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_RecordStatus"></a> RecordStatus

Gets a value indicating whether reconciled status metadata should be recorded on the invitation.

```csharp
public bool RecordStatus { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_RequireProviderMessageMatch"></a> RequireProviderMessageMatch

Gets a value indicating whether an existing dispatch provider message identifier must match the request.

```csharp
public bool RequireProviderMessageMatch { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_SenderId"></a> SenderId

Gets the delivery sender identifier associated with the status observation.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Source"></a> Source

Gets the source that reported the status observation.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_Status"></a> Status

Gets the provider or receiver delivery status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the invitation.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
