---
title: Class TenantDomainOwnershipProofEvaluationResult
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Services](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Describes the result of one tenant-domain ownership proof evaluation.

```csharp
public sealed class TenantDomainOwnershipProofEvaluationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantDomainOwnershipProofEvaluationResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipproofevaluationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult__ctor_System_String_System_String_System_String_System_String_System_Boolean_System_Boolean_System_DateTimeOffset_System_String_System_String_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipDescriptor_Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipVerificationWorkflowResult_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TenantDomainOwnershipProofEvaluationResult\(string, string, string?, string, bool, bool, DateTimeOffset, string?, string?, TenantDomainOwnershipDescriptor?, TenantDomainOwnershipVerificationWorkflowResult?, string, IReadOnlyDictionary<string, string\>?\)

Creates a tenant-domain ownership proof evaluation result.

```csharp
public TenantDomainOwnershipProofEvaluationResult(string tenantId, string domainName, string? verificationMethod, string outcome, bool matched, bool applied, DateTimeOffset evaluatedAtUtc, string? observedProofFingerprint, string? expectedProofFingerprint, TenantDomainOwnershipDescriptor? domainOwnership, TenantDomainOwnershipVerificationWorkflowResult? workflowResult, string reason, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tenant identifier that was evaluated.

`domainName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical domain name that was evaluated.

`verificationMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The verification method used for evaluation.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable proof evaluation outcome.

`matched` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the observed proof matched the expected proof.

`applied` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

A value indicating whether the verification workflow transition was applied.

`evaluatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when proof evaluation executed.

`observedProofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the observed proof value when present.

`expectedProofFingerprint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The SHA-256 fingerprint of the expected proof value when present.

`domainOwnership` [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

The matching or resulting domain ownership descriptor when one exists.

`workflowResult` [TenantDomainOwnershipVerificationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowresult/)?

The underlying workflow transition result when proof evaluation reached workflow mutation.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing proof evaluation reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional result metadata.

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Applied"></a> Applied

Gets a value indicating whether the verification workflow transition was applied.

```csharp
public bool Applied { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_DomainName"></a> DomainName

Gets the canonical domain name that was evaluated.

```csharp
public string DomainName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_DomainOwnership"></a> DomainOwnership

Gets the matching or resulting domain ownership descriptor when one exists.

```csharp
public TenantDomainOwnershipDescriptor? DomainOwnership { get; }
```

#### Property Value

 [TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_EvaluatedAtUtc"></a> EvaluatedAtUtc

Gets the UTC timestamp when proof evaluation executed.

```csharp
public DateTimeOffset EvaluatedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_ExpectedProofFingerprint"></a> ExpectedProofFingerprint

Gets the SHA-256 fingerprint of the expected proof value when present.

```csharp
public string? ExpectedProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Matched"></a> Matched

Gets a value indicating whether the observed proof matched the expected proof.

```csharp
public bool Matched { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Metadata"></a> Metadata

Gets optional result metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_ObservedProofFingerprint"></a> ObservedProofFingerprint

Gets the SHA-256 fingerprint of the observed proof value when present.

```csharp
public string? ObservedProofFingerprint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Outcome"></a> Outcome

Gets the stable proof evaluation outcome.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_Reason"></a> Reason

Gets the operator-facing proof evaluation reason.

```csharp
public string Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_TenantId"></a> TenantId

Gets the tenant identifier that was evaluated.

```csharp
public string TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_VerificationMethod"></a> VerificationMethod

Gets the verification method used for evaluation.

```csharp
public string? VerificationMethod { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Services_TenantDomainOwnershipProofEvaluationResult_WorkflowResult"></a> WorkflowResult

Gets the underlying workflow transition result when proof evaluation reached workflow mutation.

```csharp
public TenantDomainOwnershipVerificationWorkflowResult? WorkflowResult { get; }
```

#### Property Value

 [TenantDomainOwnershipVerificationWorkflowResult](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipverificationworkflowresult/)?
