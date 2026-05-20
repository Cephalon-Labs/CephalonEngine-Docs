---
title: Class TenantInvitationDeliveryStatusReconciliationOutcomes
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationoutcomes
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Defines stable outcomes for tenant invitation delivery status reconciliation.

```csharp
public static class TenantInvitationDeliveryStatusReconciliationOutcomes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusReconciliationOutcomes](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdeliverystatusreconciliationoutcomes/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_Disabled"></a> Disabled

Delivery status reconciliation is disabled.

```csharp
public const string Disabled = "disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_InvitationNotFound"></a> InvitationNotFound

The requested invitation was not found.

```csharp
public const string InvitationNotFound = "invitation-not-found"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_ProviderMessageMismatch"></a> ProviderMessageMismatch

The supplied provider message identifier does not match the identifier recorded during dispatch.

```csharp
public const string ProviderMessageMismatch = "provider-message-mismatch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_ProviderMessageMissing"></a> ProviderMessageMissing

The invitation has a recorded provider message identifier, but the reconciliation request did not provide one.

```csharp
public const string ProviderMessageMissing = "provider-message-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_Reconciled"></a> Reconciled

The delivery status observation was reconciled into invitation metadata.

```csharp
public const string Reconciled = "reconciled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantInvitationDeliveryStatusReconciliationOutcomes_StoreFailed"></a> StoreFailed

The delivery status observation could not be persisted.

```csharp
public const string StoreFailed = "store-failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
