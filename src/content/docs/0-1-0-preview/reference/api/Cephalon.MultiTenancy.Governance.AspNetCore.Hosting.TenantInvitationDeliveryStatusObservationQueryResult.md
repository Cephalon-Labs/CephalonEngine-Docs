---
title: Class TenantInvitationDeliveryStatusObservationQueryResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationqueryresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Describes a bounded read of normalized tenant-invitation delivery status observations.

```csharp
public sealed class TenantInvitationDeliveryStatusObservationQueryResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationQueryResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationqueryresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The result is an operator/audit view over <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusObservationStore" data-throw-if-not-resolved="false"></xref>. It does
not represent a provider-specific callback inbox, provider polling state, or distributed replay ledger.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult__ctor"></a> TenantInvitationDeliveryStatusObservationQueryResult\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.AspNetCore.Hosting.TenantInvitationDeliveryStatusObservationQueryResult" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TenantInvitationDeliveryStatusObservationQueryResult()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_Filters"></a> Filters

Gets the normalized filters applied to this read.

```csharp
public IReadOnlyDictionary<string, string> Filters { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_IsDurable"></a> IsDurable

Gets a value indicating whether the underlying observation store survives process restarts.

```csharp
public bool IsDurable { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_Limit"></a> Limit

Gets the effective response limit used for this read.

```csharp
public int Limit { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_MatchedCount"></a> MatchedCount

Gets the number of observations that matched the supplied endpoint filters before the response limit was applied.

```csharp
public int MatchedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_Observations"></a> Observations

Gets the normalized delivery status observations returned by this read.

```csharp
public IReadOnlyList<TenantInvitationDeliveryStatusObservationDescriptor> Observations { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TenantInvitationDeliveryStatusObservationDescriptor\>

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_Ownership"></a> Ownership

Gets the ownership mode reported by the underlying observation store.

```csharp
public string Ownership { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_RemediationHintCount"></a> RemediationHintCount

Gets the number of operator remediation hints derived from the filtered observations.

```csharp
public int RemediationHintCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_RemediationHints"></a> RemediationHints

Gets deterministic remediation guidance derived from the filtered observations before the response limit is applied.

```csharp
public IReadOnlyList<TenantInvitationDeliveryStatusObservationRemediationHintDescriptor> RemediationHints { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryStatusObservationRemediationHintDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationremediationhintdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_ReturnedCount"></a> ReturnedCount

Gets the number of observations included in this response after filtering and limiting.

```csharp
public int ReturnedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_StoreKind"></a> StoreKind

Gets the observation store kind, such as <code>in-memory</code> or <code>file</code>.

```csharp
public string StoreKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_Summaries"></a> Summaries

Gets aggregate operator summaries derived from the filtered observations before the response limit is applied.

```csharp
public IReadOnlyList<TenantInvitationDeliveryStatusObservationSummaryDescriptor> Summaries { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantInvitationDeliveryStatusObservationSummaryDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationsummarydescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_SummaryCount"></a> SummaryCount

Gets the number of aggregate summary buckets derived from the filtered observations.

```csharp
public int SummaryCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationQueryResult_TotalCount"></a> TotalCount

Gets the number of observations in the store before endpoint filters are applied.

```csharp
public int TotalCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
