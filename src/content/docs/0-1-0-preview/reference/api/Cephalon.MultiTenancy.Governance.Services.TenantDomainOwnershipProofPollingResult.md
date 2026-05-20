---
title: Class TenantDomainOwnershipProofPollingResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the aggregate result of one tenant-domain ownership proof polling pass.

```csharp
public sealed class TenantDomainOwnershipProofPollingResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofPollingResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofpollingresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult__ctor_System_String_System_Boolean_System_DateTimeOffset_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Collections_Generic_IReadOnlyList_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofVerificationResult__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofPollingResult\(string, bool, DateTimeOffset, int, int, int, int, int, int, int, IReadOnlyList<TenantDomainOwnershipProofVerificationResult\>, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof polling result.

```csharp
public TenantDomainOwnershipProofPollingResult(string outcome, bool polled, DateTimeOffset ranAtUtc, int candidateCount, int verificationCount, int skippedCount, int verifiedCount, int rejectedCount, int failedCount, int batchLimit, IReadOnlyList<TenantDomainOwnershipProofVerificationResult> verificationResults, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable proof polling outcome.

`polled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether at least one verification attempt ran.

`ranAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when polling ran.

`candidateCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of declarations that matched request filters before batch limiting.

`verificationCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of verification attempts run.

`skippedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of declarations skipped by filters, missing expected proof policy, or batch limits.

`verifiedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of declarations verified by the polling pass.

`rejectedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of declarations rejected by the polling pass.

`failedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of attempts that did not reach an accepted terminal outcome.

`batchLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The effective maximum number of declarations this pass could poll.

`verificationResults` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipProofVerificationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationresult/)\>

The nested proof verification results.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing proof polling reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_BatchLimit"></a> BatchLimit

Gets the effective maximum number of declarations this pass could poll.

```csharp
public int BatchLimit { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_CandidateCount"></a> CandidateCount

Gets the number of declarations that matched request filters before batch limiting.

```csharp
public int CandidateCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_FailedCount"></a> FailedCount

Gets the number of attempts that did not reach an accepted terminal outcome.

```csharp
public int FailedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_Outcome"></a> Outcome

Gets the stable proof polling outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_Polled"></a> Polled

Gets a value indicating whether at least one verification attempt ran.

```csharp
public bool Polled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_RanAtUtc"></a> RanAtUtc

Gets the UTC timestamp when polling ran.

```csharp
public DateTimeOffset RanAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_Reason"></a> Reason

Gets the operator-facing proof polling reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_RejectedCount"></a> RejectedCount

Gets the number of declarations rejected by the polling pass.

```csharp
public int RejectedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_SkippedCount"></a> SkippedCount

Gets the number of declarations skipped by filters, missing expected proof policy, or batch limits.

```csharp
public int SkippedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_VerificationCount"></a> VerificationCount

Gets the number of verification attempts run.

```csharp
public int VerificationCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_VerificationResults"></a> VerificationResults

Gets the nested proof verification results.

```csharp
public IReadOnlyList<TenantDomainOwnershipProofVerificationResult> VerificationResults { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TenantDomainOwnershipProofVerificationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofverificationresult/)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofPollingResult_VerifiedCount"></a> VerifiedCount

Gets the number of declarations verified by the polling pass.

```csharp
public int VerifiedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
