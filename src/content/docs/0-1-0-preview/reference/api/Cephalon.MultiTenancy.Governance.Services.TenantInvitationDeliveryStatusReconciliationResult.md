---
title: Class TenantInvitationDeliveryStatusReconciliationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of tenant invitation delivery status reconciliation.

```csharp
public sealed class TenantInvitationDeliveryStatusReconciliationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusReconciliationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_String_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryStatusReconciliationResult\(string, string, string, string, bool, bool, DateTimeOffset, string?, string?, string?, TenantInvitationDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery status reconciliation result.

```csharp
public TenantInvitationDeliveryStatusReconciliationResult(string tenantId, string invitationId, string status, string outcome, bool reconciled, bool recorded, DateTimeOffset observedAtUtc, string? providerMessageId, string? senderId, string? channel, TenantInvitationDescriptor? invitation, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier that was evaluated.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider or receiver delivery status.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable delivery status reconciliation outcome.

`reconciled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the status observation was accepted for the invitation.

`recorded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether delivery status metadata was recorded.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the status was observed.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier associated with the status observation.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery sender identifier associated with the status observation.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery channel associated with the status observation.

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

The resulting invitation descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing delivery status reconciliation reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Channel"></a> Channel

Gets the delivery channel associated with the status observation.

```csharp
public string? Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Invitation"></a> Invitation

Gets the resulting invitation descriptor when one exists.

```csharp
public TenantInvitationDescriptor? Invitation { get; }
```

#### Property Value

 [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_InvitationId"></a> InvitationId

Gets the invitation identifier that was evaluated.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the status was observed.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Outcome"></a> Outcome

Gets the stable delivery status reconciliation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier associated with the status observation.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Reason"></a> Reason

Gets the operator-facing delivery status reconciliation reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Reconciled"></a> Reconciled

Gets a value indicating whether the status observation was accepted for the invitation.

```csharp
public bool Reconciled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Recorded"></a> Recorded

Gets a value indicating whether delivery status metadata was recorded.

```csharp
public bool Recorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_SenderId"></a> SenderId

Gets the delivery sender identifier associated with the status observation.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_Status"></a> Status

Gets the provider or receiver delivery status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
