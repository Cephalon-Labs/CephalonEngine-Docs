---
title: Class TenantInvitationDeliveryResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of tenant invitation delivery dispatch.

```csharp
public sealed class TenantInvitationDeliveryResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult__ctor_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_String_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryResult\(string, string, string, bool, bool, DateTimeOffset, string?, string?, string?, TenantInvitationDescriptor?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery dispatch result.

```csharp
public TenantInvitationDeliveryResult(string tenantId, string invitationId, string outcome, bool dispatched, bool recorded, DateTimeOffset dispatchedAtUtc, string? channel, string? senderId, string? providerMessageId, TenantInvitationDescriptor? invitation, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`invitationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The invitation identifier that was evaluated.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable delivery dispatch outcome.

`dispatched` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether a sender accepted the dispatch.

`recorded` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether delivery outcome metadata was recorded.

`dispatchedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp used for dispatch.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery channel used by the dispatch attempt.

`senderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The delivery sender identifier used by the dispatch attempt.

`providerMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The provider message identifier returned by the sender.

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

The resulting invitation descriptor when one exists.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing delivery dispatch reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Channel"></a> Channel

Gets the delivery channel used by the dispatch attempt.

```csharp
public string? Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Dispatched"></a> Dispatched

Gets a value indicating whether a sender accepted the dispatch.

```csharp
public bool Dispatched { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_DispatchedAtUtc"></a> DispatchedAtUtc

Gets the UTC timestamp used for dispatch.

```csharp
public DateTimeOffset DispatchedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Invitation"></a> Invitation

Gets the resulting invitation descriptor when one exists.

```csharp
public TenantInvitationDescriptor? Invitation { get; }
```

#### Property Value

 [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_InvitationId"></a> InvitationId

Gets the invitation identifier that was evaluated.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Outcome"></a> Outcome

Gets the stable delivery dispatch outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_ProviderMessageId"></a> ProviderMessageId

Gets the provider message identifier returned by the sender.

```csharp
public string? ProviderMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Reason"></a> Reason

Gets the operator-facing delivery dispatch reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_Recorded"></a> Recorded

Gets a value indicating whether delivery outcome metadata was recorded.

```csharp
public bool Recorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_SenderId"></a> SenderId

Gets the delivery sender identifier used by the dispatch attempt.

```csharp
public string? SenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
