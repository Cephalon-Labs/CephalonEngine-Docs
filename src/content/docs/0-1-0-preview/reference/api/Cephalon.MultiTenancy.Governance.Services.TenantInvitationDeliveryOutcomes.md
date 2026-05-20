---
title: Class TenantInvitationDeliveryOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes for tenant invitation delivery dispatch.

```csharp
public static class TenantInvitationDeliveryOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliveryoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_Disabled"></a> Disabled

Invitation delivery dispatch is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_Dispatched"></a> Dispatched

The invitation was dispatched through a configured sender.

```csharp
public const string Dispatched = "dispatched"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_InvitationExpired"></a> InvitationExpired

The requested invitation expired before dispatch.

```csharp
public const string InvitationExpired = "invitation-expired"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_InvitationNotFound"></a> InvitationNotFound

The requested invitation was not found.

```csharp
public const string InvitationNotFound = "invitation-not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_InvitationNotPending"></a> InvitationNotPending

The requested invitation is no longer pending.

```csharp
public const string InvitationNotPending = "invitation-not-pending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_SenderFailed"></a> SenderFailed

The sender failed or returned a failed outcome.

```csharp
public const string SenderFailed = "sender-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_SenderNotConfigured"></a> SenderNotConfigured

No matching delivery sender was registered.

```csharp
public const string SenderNotConfigured = "sender-not-configured"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_StoreFailed"></a> StoreFailed

The dispatch outcome could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryOutcomes_Suppressed"></a> Suppressed

The sender deliberately suppressed delivery.

```csharp
public const string Suppressed = "suppressed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
