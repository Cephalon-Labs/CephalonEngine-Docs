---
title: Class HttpInvitationDeliveryPayload
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-services-httpinvitationdeliverypayload
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.HttpDelivery.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-services/)  
Assembly: Cephalon.MultiTenancy.Governance.HttpDelivery.dll  

Describes the JSON payload sent to an HTTP invitation delivery webhook.

```csharp
public sealed class HttpInvitationDeliveryPayload
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpInvitationDeliveryPayload](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-httpdelivery-services-httpinvitationdeliverypayload/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload__ctor"></a> HttpInvitationDeliveryPayload\(\)

Creates an empty HTTP invitation delivery payload for JSON serialization.

```csharp
public HttpInvitationDeliveryPayload()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_Actor"></a> Actor

Gets or sets the actor that requested dispatch.

```csharp
public string? Actor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_Channel"></a> Channel

Gets or sets the requested delivery channel.

```csharp
public string Channel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_CorrelationId"></a> CorrelationId

Gets or sets the optional correlation identifier.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_DispatchedAtUtc"></a> DispatchedAtUtc

Gets or sets the UTC timestamp used for dispatch.

```csharp
public DateTimeOffset DispatchedAtUtc { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_DisplayName"></a> DisplayName

Gets or sets the optional invitation display name.

```csharp
public string? DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_InvitationId"></a> InvitationId

Gets or sets the invitation identifier.

```csharp
public string InvitationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_InvitationMetadata"></a> InvitationMetadata

Gets or sets optional metadata attached to the invitation.

```csharp
public IReadOnlyDictionary<string, string> InvitationMetadata { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_InviteeId"></a> InviteeId

Gets or sets the invitee identifier.

```csharp
public string InviteeId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_InviteeKind"></a> InviteeKind

Gets or sets the invitee kind.

```csharp
public string InviteeKind { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_Metadata"></a> Metadata

Gets or sets optional request metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; set; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_RequestedSenderId"></a> RequestedSenderId

Gets or sets the requested sender identifier.

```csharp
public string? RequestedSenderId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_Roles"></a> Roles

Gets or sets the tenant-local roles proposed by the invitation.

```csharp
public IReadOnlyList<string> Roles { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_Source"></a> Source

Gets or sets the dispatch source.

```csharp
public string? Source { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_HttpDelivery_Services_HttpInvitationDeliveryPayload_TenantId"></a> TenantId

Gets or sets the tenant identifier.

```csharp
public string TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
