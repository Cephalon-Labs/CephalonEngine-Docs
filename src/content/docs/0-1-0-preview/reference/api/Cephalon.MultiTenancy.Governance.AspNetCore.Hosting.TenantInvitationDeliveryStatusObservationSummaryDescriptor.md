---
title: Class TenantInvitationDeliveryStatusObservationSummaryDescriptor
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationsummarydescriptor
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Describes one aggregate bucket in a tenant-invitation delivery status observation read.

```csharp
public sealed class TenantInvitationDeliveryStatusObservationSummaryDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationsummarydescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Observation summaries are derived from the normalized observation store after endpoint filters are applied and
before the response limit is applied. They are operator rollups over recorded observations, not a provider callback
inbox, distributed replay ledger, or exactly-once delivery proof.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor__ctor_System_String_System_String_System_Int32_System_Int32_System_Int32_System_DateTimeOffset_System_DateTimeOffset_"></a> TenantInvitationDeliveryStatusObservationSummaryDescriptor\(string, string, int, int, int, DateTimeOffset, DateTimeOffset\)

Creates a tenant-invitation delivery status observation summary descriptor.

```csharp
public TenantInvitationDeliveryStatusObservationSummaryDescriptor(string dimension, string value, int count, int reconciledCount, int recordedCount, DateTimeOffset latestObservedAtUtc, DateTimeOffset latestRecordedAtUtc)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

The summarized observation dimension, such as <code>status</code> or <code>source</code>.

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized bucket value for the dimension.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of observations in the bucket.

`reconciledCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of reconciled observations in the bucket.

`recordedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of observations that recorded invitation delivery metadata in the bucket.

`latestObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The latest provider observation timestamp in the bucket.

`latestRecordedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The latest Cephalon record timestamp in the bucket.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_Count"></a> Count

Gets the number of observations in the bucket.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_Dimension"></a> Dimension

Gets the summarized observation dimension, such as <code>status</code>, <code>attention</code>, <code>remediation</code>,
<code>outcome</code>, <code>source</code>, <code>providerMessageId</code>, <code>channel</code>, <code>sender</code>, or <code>tenant</code>.

```csharp
public string Dimension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_LatestObservedAtUtc"></a> LatestObservedAtUtc

Gets the latest provider observation timestamp in the bucket.

```csharp
public DateTimeOffset LatestObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_LatestRecordedAtUtc"></a> LatestRecordedAtUtc

Gets the latest Cephalon record timestamp in the bucket.

```csharp
public DateTimeOffset LatestRecordedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_ReconciledCount"></a> ReconciledCount

Gets the number of reconciled observations in the bucket.

```csharp
public int ReconciledCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_RecordedCount"></a> RecordedCount

Gets the number of observations that recorded invitation delivery metadata in the bucket.

```csharp
public int RecordedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationSummaryDescriptor_Value"></a> Value

Gets the normalized bucket value for the dimension.

```csharp
public string Value { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
