---
title: Class TenantInvitationDeliveryRetryStatuses
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrystatuses
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable statuses for tenant invitation delivery retry queue entries.

```csharp
public static class TenantInvitationDeliveryRetryStatuses
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryRetryStatuses](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryretrystatuses/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryStatuses_Dispatched"></a> Dispatched

The retry entry was dispatched and removed from the active retry queue.

```csharp
public const string Dispatched = "dispatched"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryStatuses_Exhausted"></a> Exhausted

The retry entry exhausted its configured retry budget.

```csharp
public const string Exhausted = "exhausted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryStatuses_Pending"></a> Pending

The retry entry is waiting for another attempt.

```csharp
public const string Pending = "pending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryRetryStatuses_Terminal"></a> Terminal

The retry entry hit a terminal invitation state that should not be retried.

```csharp
public const string Terminal = "terminal"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
