---
title: Class TenantInvitationDeliveryStatusObservationRemediationHintDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationremediationhintdescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Describes deterministic operator remediation guidance for matched delivery status observations.

```csharp
public sealed class TenantInvitationDeliveryStatusObservationRemediationHintDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationRemediationHintDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationremediationhintdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The descriptor is an aggregate hint over normalized observations that already matched the read filters. It is
guidance for an operator or host workflow, not an executed remediation, provider polling result, distributed inbox,
or exactly-once delivery guarantee.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor__ctor_System_String_System_String_System_String_System_String_System_Int32_System_DateTimeOffset_System_DateTimeOffset_System_String_"></a> TenantInvitationDeliveryStatusObservationRemediationHintDescriptor\(string, string, string, string, int, DateTimeOffset, DateTimeOffset, string\)

Creates a tenant-invitation delivery status observation remediation hint descriptor.

```csharp
public TenantInvitationDeliveryStatusObservationRemediationHintDescriptor(string attentionCategory, string action, string displayName, string description, int count, DateTimeOffset latestObservedAtUtc, DateTimeOffset latestRecordedAtUtc, string filter)
```

#### Parameters

`attentionCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The attention category that produced this hint.

`action` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable remediation action label.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The short operator-facing display name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The remediation guidance for this attention category.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of matched observations in this hint bucket.

`latestObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The latest observed timestamp in the hint bucket.

`latestRecordedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The latest recorded timestamp in the hint bucket.

`filter` [string](https://learn.microsoft.com/dotnet/api/system.string)

A query-string filter that drills into the relevant observations.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_Action"></a> Action

Gets the stable remediation action label.

```csharp
public string Action { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_AttentionCategory"></a> AttentionCategory

Gets the attention category that produced this hint.

```csharp
public string AttentionCategory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_Count"></a> Count

Gets the number of matched observations in this hint bucket.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_Description"></a> Description

Gets the remediation guidance for this attention category.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_DisplayName"></a> DisplayName

Gets the short operator-facing display name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_Filter"></a> Filter

Gets a query-string filter that drills into the relevant observations.

```csharp
public string Filter { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_LatestObservedAtUtc"></a> LatestObservedAtUtc

Gets the latest observed timestamp in the hint bucket.

```csharp
public DateTimeOffset LatestObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationRemediationHintDescriptor_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the latest recorded timestamp in the hint bucket.

```csharp
public DateTimeOffset LatestRecordedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)
