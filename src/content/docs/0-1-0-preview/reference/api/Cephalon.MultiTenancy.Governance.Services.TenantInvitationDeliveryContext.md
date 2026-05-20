---
title: Class TenantInvitationDeliveryContext
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverycontext
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the tenant invitation payload passed to an invitation delivery sender.

```csharp
public sealed class TenantInvitationDeliveryContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryContext](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverycontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext__ctor_Cephalon_MultiTenancy_Governance_Services_TenantInvitationDescriptor_System_String_System_String_System_String_System_String_System_DateTimeOffset_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantInvitationDeliveryContext\(TenantInvitationDescriptor, string, string?, string?, string?, DateTimeOffset, string?, IReadOnlyDictionary<string, string\>?\)

Creates a tenant invitation delivery context.

```csharp
public TenantInvitationDeliveryContext(TenantInvitationDescriptor invitation, string channel, string? requestedSenderId, string? source, string? actor, DateTimeOffset dispatchedAtUtc, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`invitation` [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)

The invitation being delivered.

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The requested delivery channel.

`requestedSenderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The requested sender identifier when one was specified.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The source that requested delivery dispatch.

`actor` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor that requested delivery dispatch when known.

`dispatchedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp used for dispatch.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for delivery dispatch.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request metadata for the sender.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Actor"></a> Actor

Gets the actor that requested delivery dispatch when known.

```csharp
public string? Actor { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Channel"></a> Channel

Gets the requested delivery channel.

```csharp
public string Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for delivery dispatch.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_DispatchedAtUtc"></a> DispatchedAtUtc

Gets the UTC timestamp used for dispatch.

```csharp
public DateTimeOffset DispatchedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_DisplayName"></a> DisplayName

Gets the optional operator-facing invitation name.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Invitation"></a> Invitation

Gets the invitation being delivered.

```csharp
public TenantInvitationDescriptor Invitation { get; }
```

#### Property Value

 [TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_InvitationId"></a> InvitationId

Gets the invitation identifier.

```csharp
public string InvitationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_InviteeId"></a> InviteeId

Gets the invitee identifier.

```csharp
public string InviteeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_InviteeKind"></a> InviteeKind

Gets the invitee kind, such as user, group, service, or organization.

```csharp
public string InviteeKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Metadata"></a> Metadata

Gets optional request metadata for the sender.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_RequestedSenderId"></a> RequestedSenderId

Gets the requested sender identifier when one was specified.

```csharp
public string? RequestedSenderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Roles"></a> Roles

Gets the tenant-local roles proposed by the invitation.

```csharp
public IReadOnlyList<string> Roles { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_Source"></a> Source

Gets the source that requested delivery dispatch.

```csharp
public string? Source { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryContext_TenantId"></a> TenantId

Gets the tenant identifier.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
