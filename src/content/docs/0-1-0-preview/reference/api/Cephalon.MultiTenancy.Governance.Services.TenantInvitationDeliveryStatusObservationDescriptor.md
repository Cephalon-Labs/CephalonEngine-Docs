---
title: Class TenantInvitationDeliveryStatusObservationDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusobservationdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes one recorded tenant invitation delivery status observation.

```csharp
public sealed class TenantInvitationDeliveryStatusObservationDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusobservationdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_DateTimeOffset_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryStatusObservationDescriptor\(string, string, string, string, string, bool, bool, DateTimeOffset, DateTimeOffset, string?, string?, string?, string?, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery status observation descriptor.

```csharp
public TenantInvitationDeliveryStatusObservationDescriptor(string observationId, string tenantId, string invitationId, string status, string outcome, bool reconciled, bool recorded, DateTimeOffset observedAtUtc, DateTimeOffset recordedAtUtc, string? providerMessageId = null, string? senderId = null, string? channel = null, string? source = null, string? actor = null, string? correlationId = null, string? reason = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`observationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable observation identifier.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the invitation.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier associated with the observation.

`status` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized provider or receiver delivery status.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reconciliation outcome produced for the observation.

`reconciled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the observation was accepted for the invitation.

`recorded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether invitation delivery status metadata was recorded.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the status was observed.

`recordedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when Cephalon recorded the observation.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier associated with the observation.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery sender identifier associated with the observation.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery channel associated with the observation.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that reported the observation.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that reported the observation when known.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the observation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider or receiver status reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional safe observation metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Actor"></a> Actor

Gets the actor that reported the observation when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Channel"></a> Channel

Gets the delivery channel associated with the observation.

```csharp
public string? Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the observation.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_InvitationId"></a> InvitationId

Gets the invitation identifier associated with the observation.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Metadata"></a> Metadata

Gets optional safe observation metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_ObservationId"></a> ObservationId

Gets the stable observation identifier.

```csharp
public string ObservationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the status was observed.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Outcome"></a> Outcome

Gets the reconciliation outcome produced for the observation.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier associated with the observation.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Reason"></a> Reason

Gets the provider or receiver status reason.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Reconciled"></a> Reconciled

Gets a value indicating whether the observation was accepted for the invitation.

```csharp
public bool Reconciled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Recorded"></a> Recorded

Gets a value indicating whether invitation delivery status metadata was recorded.

```csharp
public bool Recorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_RecordedAtUtc"></a> RecordedAtUtc

Gets the UTC timestamp when Cephalon recorded the observation.

```csharp
public DateTimeOffset RecordedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_SenderId"></a> SenderId

Gets the delivery sender identifier associated with the observation.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Source"></a> Source

Gets the source that reported the observation.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_Status"></a> Status

Gets the normalized provider or receiver delivery status.

```csharp
public string Status { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusObservationDescriptor_TenantId"></a> TenantId

Gets the tenant identifier that owns the invitation.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
