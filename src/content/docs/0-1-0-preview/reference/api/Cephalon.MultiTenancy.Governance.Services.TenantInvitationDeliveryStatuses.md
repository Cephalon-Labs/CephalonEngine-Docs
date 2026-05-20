---
title: Class TenantInvitationDeliveryStatuses
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatuses
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable status values reported by tenant invitation delivery providers or receivers.

```csharp
public static class TenantInvitationDeliveryStatuses
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatuses](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatuses/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Accepted"></a> Accepted

The delivery provider accepted the message for processing.

```csharp
public const string Accepted = "accepted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Bounced"></a> Bounced

The invitation bounced at the provider or receiver boundary.

```csharp
public const string Bounced = "bounced"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Deferred"></a> Deferred

The invitation delivery was deferred by the provider or receiver boundary.

```csharp
public const string Deferred = "deferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Delivered"></a> Delivered

The invitation was delivered to the provider-recognized recipient endpoint.

```csharp
public const string Delivered = "delivered"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Failed"></a> Failed

The invitation delivery failed.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Suppressed"></a> Suppressed

The invitation delivery was suppressed by provider or policy rules.

```csharp
public const string Suppressed = "suppressed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatuses_Unknown"></a> Unknown

The delivery provider reported a status that could not be classified.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
