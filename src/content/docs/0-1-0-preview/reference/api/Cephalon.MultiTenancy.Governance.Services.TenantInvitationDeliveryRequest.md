---
title: Class TenantInvitationDeliveryRequest
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrequest
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes a tenant invitation delivery dispatch request.

```csharp
public sealed class TenantInvitationDeliveryRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRequest](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryRequest\(string, string, string?, string?, string?, string?, DateTimeOffset?, string?, bool, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery dispatch request.

```csharp
public TenantInvitationDeliveryRequest(string tenantId, string invitationId, string? channel = null, string? senderId = null, string? source = null, string? actor = null, DateTimeOffset? atUtc = null, string? correlationId = null, bool recordDelivery = true, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that owns the invitation.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier to deliver.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The requested delivery channel.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The preferred delivery sender identifier.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested delivery dispatch.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested delivery dispatch when known.

`atUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp used for dispatch. The runtime clock is used when omitted.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for delivery dispatch.

`recordDelivery` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether delivery outcome metadata should be recorded on the invitation.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional delivery dispatch metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_Actor"></a> Actor

Gets the actor that requested delivery dispatch when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_AtUtc"></a> AtUtc

Gets the UTC timestamp used for dispatch.

```csharp
public DateTimeOffset? AtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_Channel"></a> Channel

Gets the requested delivery channel.

```csharp
public string Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for delivery dispatch.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_InvitationId"></a> InvitationId

Gets the invitation identifier to deliver.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_Metadata"></a> Metadata

Gets optional delivery dispatch metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_RecordDelivery"></a> RecordDelivery

Gets a value indicating whether delivery outcome metadata should be recorded on the invitation.

```csharp
public bool RecordDelivery { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_SenderId"></a> SenderId

Gets the preferred delivery sender identifier.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_Source"></a> Source

Gets the source that requested delivery dispatch.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRequest_TenantId"></a> TenantId

Gets the tenant identifier that owns the invitation.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
