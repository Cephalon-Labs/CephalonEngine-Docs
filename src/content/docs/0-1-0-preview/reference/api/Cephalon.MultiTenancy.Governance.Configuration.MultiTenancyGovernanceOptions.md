---
title: Class MultiTenancyGovernanceOptions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-configuration-multitenancygovernanceoptions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.Configuration](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-configuration/)  
Assembly: Cephalon.MultiTenancy.Governance.dll  

Configures the tenant-governance companion package.

```csharp
public sealed class MultiTenancyGovernanceOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MultiTenancyGovernanceOptions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-configuration-multitenancygovernanceoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed the host-owned governance baseline. Installed modules can still contribute
additional memberships, invitations, domain ownership descriptors, and governance actions through
contributor contracts.

## Constructors

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions__ctor"></a> MultiTenancyGovernanceOptions\(\)

Initializes a new instance of the <xref href="Cephalon.MultiTenancy.Governance.Configuration.MultiTenancyGovernanceOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiTenancyGovernanceOptions()
```

## Properties

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_AllowInsecureDomainOwnershipHttpProofCollection"></a> AllowInsecureDomainOwnershipHttpProofCollection

Gets or sets a value indicating whether HTTP proof collection may use non-HTTPS URLs.

```csharp
public bool AllowInsecureDomainOwnershipHttpProofCollection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipDnsTxtProofCollectionMaxResponseBytes"></a> DomainOwnershipDnsTxtProofCollectionMaxResponseBytes

Gets or sets the maximum response body size, in bytes, accepted by DNS TXT proof collection.

```csharp
public int DomainOwnershipDnsTxtProofCollectionMaxResponseBytes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipDnsTxtProofCollectionTimeoutSeconds"></a> DomainOwnershipDnsTxtProofCollectionTimeoutSeconds

Gets or sets the default timeout, in seconds, used by DNS TXT proof collection.

```csharp
public int DomainOwnershipDnsTxtProofCollectionTimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipDnsTxtProofResolverEndpoint"></a> DomainOwnershipDnsTxtProofResolverEndpoint

Gets or sets the optional DNS-over-HTTPS resolver endpoint used by DNS TXT proof collection.

```csharp
public Uri? DomainOwnershipDnsTxtProofResolverEndpoint { get; set; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

#### Remarks

When omitted, callers can still provide a per-request resolver endpoint. Cephalon does not use
a hidden public resolver by default.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipHttpProofCollectionMaxResponseBytes"></a> DomainOwnershipHttpProofCollectionMaxResponseBytes

Gets or sets the maximum response body size, in bytes, accepted by HTTP proof collection.

```csharp
public int DomainOwnershipHttpProofCollectionMaxResponseBytes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipHttpProofCollectionTimeoutSeconds"></a> DomainOwnershipHttpProofCollectionTimeoutSeconds

Gets or sets the default timeout, in seconds, used by HTTP proof collection.

```csharp
public int DomainOwnershipHttpProofCollectionTimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofBackgroundPollingIntervalSeconds"></a> DomainOwnershipProofBackgroundPollingIntervalSeconds

Gets or sets the proof background polling interval, in seconds.

```csharp
public int DomainOwnershipProofBackgroundPollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Values less than one are coerced to the default interval.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofBackgroundPollingRunOnStartup"></a> DomainOwnershipProofBackgroundPollingRunOnStartup

Gets or sets a value indicating whether proof background polling should run once during hosted-service startup.

```csharp
public bool DomainOwnershipProofBackgroundPollingRunOnStartup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofBackgroundPollingSource"></a> DomainOwnershipProofBackgroundPollingSource

Gets or sets the source recorded on proof polling requests created by the background polling hosted service.

```csharp
public string DomainOwnershipProofBackgroundPollingSource { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofChallengeDnsTxtRecordPrefix"></a> DomainOwnershipProofChallengeDnsTxtRecordPrefix

Gets or sets the default DNS TXT record prefix used by proof challenge issuance.

```csharp
public string DomainOwnershipProofChallengeDnsTxtRecordPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofChallengeHttpFilePath"></a> DomainOwnershipProofChallengeHttpFilePath

Gets or sets the default HTTP path used by proof challenge issuance.

```csharp
public string DomainOwnershipProofChallengeHttpFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipProofPollingMaxItems"></a> DomainOwnershipProofPollingMaxItems

Gets or sets the default maximum number of tenant-domain ownership declarations polled in one runner pass.

```csharp
public int DomainOwnershipProofPollingMaxItems { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnershipStoreFilePath"></a> DomainOwnershipStoreFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable tenant-domain ownership state.

```csharp
public string? DomainOwnershipStoreFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_DomainOwnerships"></a> DomainOwnerships

Gets the host-defined tenant-domain ownership descriptors available to the governance runtime.

```csharp
public IList<TenantDomainOwnershipDescriptor> DomainOwnerships { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TenantDomainOwnershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantdomainownershipdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipDnsTxtProofCollection"></a> EnableDomainOwnershipDnsTxtProofCollection

Gets or sets a value indicating whether the built-in tenant-domain ownership DNS TXT proof collector is active.

```csharp
public bool EnableDomainOwnershipDnsTxtProofCollection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipHttpProofCollection"></a> EnableDomainOwnershipHttpProofCollection

Gets or sets a value indicating whether the built-in tenant-domain ownership HTTP proof collector is active.

```csharp
public bool EnableDomainOwnershipHttpProofCollection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipHttpProofPublication"></a> EnableDomainOwnershipHttpProofPublication

Gets or sets a value indicating whether the built-in tenant-domain ownership HTTP proof publisher is active.

```csharp
public bool EnableDomainOwnershipHttpProofPublication { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The governance package materializes and records HTTP proof-file publication state. It does not map an ASP.NET Core
endpoint by itself; HTTP serving stays in the ASP.NET Core adapter so the core package remains host-agnostic.
DNS records and provider control-plane mutations remain outside this option.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofBackgroundPolling"></a> EnableDomainOwnershipProofBackgroundPolling

Gets or sets a value indicating whether the built-in tenant-domain ownership proof polling hosted service is active.

```csharp
public bool EnableDomainOwnershipProofBackgroundPolling { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This option is disabled by default so installing the governance package never starts recurring
HTTP or DNS proof checks without an explicit host decision. When enabled, the hosted service schedules
the bounded proof polling runner; it still does not publish DNS records, host HTTP proof files, or mutate
provider control planes.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofChallengeIssuance"></a> EnableDomainOwnershipProofChallengeIssuance

Gets or sets a value indicating whether the built-in tenant-domain ownership proof challenge issuer is active.

```csharp
public bool EnableDomainOwnershipProofChallengeIssuance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofEvaluation"></a> EnableDomainOwnershipProofEvaluation

Gets or sets a value indicating whether the built-in tenant-domain ownership proof evaluator is active.

```csharp
public bool EnableDomainOwnershipProofEvaluation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofPollingRunner"></a> EnableDomainOwnershipProofPollingRunner

Gets or sets a value indicating whether the built-in bounded tenant-domain ownership proof polling runner is active.

```csharp
public bool EnableDomainOwnershipProofPollingRunner { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The polling runner owns one on-demand scan over pending or rejected declarations and delegates each
attempt to the proof verification runner. It does not schedule background polling or publish DNS/HTTP proof values.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofPublicationPlanning"></a> EnableDomainOwnershipProofPublicationPlanning

Gets or sets a value indicating whether the built-in tenant-domain ownership proof publication planner is active.

```csharp
public bool EnableDomainOwnershipProofPublicationPlanning { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipProofVerificationRunner"></a> EnableDomainOwnershipProofVerificationRunner

Gets or sets a value indicating whether the built-in tenant-domain ownership proof verification runner is active.

```csharp
public bool EnableDomainOwnershipProofVerificationRunner { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipValidation"></a> EnableDomainOwnershipValidation

Gets or sets a value indicating whether the built-in tenant-domain ownership validator is active.

```csharp
public bool EnableDomainOwnershipValidation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableDomainOwnershipVerificationWorkflow"></a> EnableDomainOwnershipVerificationWorkflow

Gets or sets a value indicating whether the built-in tenant-domain ownership verification workflow executor is active.

```csharp
public bool EnableDomainOwnershipVerificationWorkflow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableGovernanceActionDecision"></a> EnableGovernanceActionDecision

Gets or sets a value indicating whether the built-in tenant-governance action decider is active.

```csharp
public bool EnableGovernanceActionDecision { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableGovernanceActionWorkflow"></a> EnableGovernanceActionWorkflow

Gets or sets a value indicating whether the built-in tenant-governance action workflow executor is active.

```csharp
public bool EnableGovernanceActionWorkflow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryDispatch"></a> EnableInvitationDeliveryDispatch

Gets or sets a value indicating whether the built-in invitation delivery dispatcher is active.

```csharp
public bool EnableInvitationDeliveryDispatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The dispatcher owns invitation lookup, pending/expiry checks, runtime reporting, and outcome persistence. It
requires a registered <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliverySender" data-throw-if-not-resolved="false"></xref> before any external delivery can happen.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryRetryBackgroundScheduling"></a> EnableInvitationDeliveryRetryBackgroundScheduling

Gets or sets a value indicating whether the built-in invitation delivery retry hosted service is active.

```csharp
public bool EnableInvitationDeliveryRetryBackgroundScheduling { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This option is disabled by default so installing the governance package never starts recurring delivery attempts
without an explicit host decision. When enabled, the hosted service schedules the bounded retry runner; it still
does not provide distributed queues, cross-node leases, exactly-once delivery, or provider-specific senders.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryRetryExecutionCoordination"></a> EnableInvitationDeliveryRetryExecutionCoordination

Gets or sets a value indicating whether concurrent invitation delivery retry runner passes are coordinated in-process.

```csharp
public bool EnableInvitationDeliveryRetryExecutionCoordination { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Process-local coordination prevents overlapping manual and background retry passes inside the same host process. It does
not provide distributed queues, cross-node leases, or exactly-once delivery across multiple running nodes.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryRetryQueue"></a> EnableInvitationDeliveryRetryQueue

Gets or sets a value indicating whether sender-failed invitation delivery attempts are queued for explicit retry.

```csharp
public bool EnableInvitationDeliveryRetryQueue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This queue is enabled deliberately because it can cause later delivery attempts. It stores retry intent and exposes
a bounded manual runner; it does not start background delivery unless retry background scheduling is explicitly
enabled, provide distributed leases, or guarantee exactly-once delivery.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryStatusObservationStore"></a> EnableInvitationDeliveryStatusObservationStore

Gets or sets a value indicating whether delivery status reconciliation observations are recorded.

```csharp
public bool EnableInvitationDeliveryStatusObservationStore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Observation storage records normalized reconciliation outcomes for audit and operator review. It does not provide
provider-specific callback translation, provider polling, cross-node replay protection, or distributed exactly-once delivery.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationDeliveryStatusReconciliation"></a> EnableInvitationDeliveryStatusReconciliation

Gets or sets a value indicating whether the built-in invitation delivery status reconciler is active.

```csharp
public bool EnableInvitationDeliveryStatusReconciliation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The reconciler owns host-agnostic status matching, metadata normalization, and persistence after a provider or
receiver reports delivery status. It does not map webhooks or poll provider APIs by itself.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableInvitationValidation"></a> EnableInvitationValidation

Gets or sets a value indicating whether the built-in invitation validator is active.

```csharp
public bool EnableInvitationValidation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableMembershipEvaluation"></a> EnableMembershipEvaluation

Gets or sets a value indicating whether the built-in membership evaluator is active.

```csharp
public bool EnableMembershipEvaluation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_EnableTenantAdministrationWorkflow"></a> EnableTenantAdministrationWorkflow

Gets or sets a value indicating whether the built-in tenant-administration workflow executor is active.

```csharp
public bool EnableTenantAdministrationWorkflow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The workflow mutates Cephalon-managed membership and invitation stores through explicit host-driven commands. It does
not provide public onboarding screens, tenant-admin HTTP endpoints, provider-specific delivery senders, or
identity-provider sync.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_GovernanceActionStoreFilePath"></a> GovernanceActionStoreFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable governance-action workflow state.

```csharp
public string? GovernanceActionStoreFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_GovernanceActions"></a> GovernanceActions

Gets the host-defined approval and remediation actions available to the governance runtime.

```csharp
public IList<TenantGovernanceActionDescriptor> GovernanceActions { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TenantGovernanceActionDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantgovernanceactiondescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryBackgroundIntervalSeconds"></a> InvitationDeliveryRetryBackgroundIntervalSeconds

Gets or sets the invitation delivery retry background scheduling interval, in seconds.

```csharp
public int InvitationDeliveryRetryBackgroundIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

Values less than one are coerced to the default interval.

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryBackgroundRunOnStartup"></a> InvitationDeliveryRetryBackgroundRunOnStartup

Gets or sets a value indicating whether invitation delivery retry background scheduling should run once during hosted-service startup.

```csharp
public bool InvitationDeliveryRetryBackgroundRunOnStartup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryBackgroundSource"></a> InvitationDeliveryRetryBackgroundSource

Gets or sets the source recorded on retry requests created by the background retry hosted service.

```csharp
public string InvitationDeliveryRetryBackgroundSource { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryDelaySeconds"></a> InvitationDeliveryRetryDelaySeconds

Gets or sets the delay, in seconds, before a failed retry entry is due again.

```csharp
public int InvitationDeliveryRetryDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryMaxAttempts"></a> InvitationDeliveryRetryMaxAttempts

Gets or sets the maximum dispatch attempts retained for one retry entry, including the original failed attempt.

```csharp
public int InvitationDeliveryRetryMaxAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryMaxItems"></a> InvitationDeliveryRetryMaxItems

Gets or sets the default maximum number of retry entries attempted by one retry runner pass.

```csharp
public int InvitationDeliveryRetryMaxItems { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRetryQueueFilePath"></a> InvitationDeliveryRetryQueueFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable invitation delivery retry entries.

```csharp
public string? InvitationDeliveryRetryQueueFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryRunHistoryLimit"></a> InvitationDeliveryRunHistoryLimit

Gets or sets the maximum number of invitation delivery dispatch attempts retained in the runtime catalog.

```csharp
public int InvitationDeliveryRunHistoryLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryStatusObservationHistoryLimit"></a> InvitationDeliveryStatusObservationHistoryLimit

Gets or sets the maximum number of delivery status observations retained by the built-in observation store.

```csharp
public int InvitationDeliveryStatusObservationHistoryLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationDeliveryStatusObservationStoreFilePath"></a> InvitationDeliveryStatusObservationStoreFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable delivery status observations.

```csharp
public string? InvitationDeliveryStatusObservationStoreFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_InvitationStoreFilePath"></a> InvitationStoreFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable tenant-invitation state.

```csharp
public string? InvitationStoreFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_Invitations"></a> Invitations

Gets the host-defined tenant invitations available to the governance runtime.

```csharp
public IList<TenantInvitationDescriptor> Invitations { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TenantInvitationDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantinvitationdescriptor/)\>

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_MembershipStoreFilePath"></a> MembershipStoreFilePath

Gets or sets the optional JSON file path used for Cephalon-managed durable tenant-membership state.

```csharp
public string? MembershipStoreFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_MultiTenancy_Governance_Configuration_MultiTenancyGovernanceOptions_Memberships"></a> Memberships

Gets the host-defined tenant memberships available to the governance runtime.

```csharp
public IList<TenantMembershipDescriptor> Memberships { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[TenantMembershipDescriptor](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-services-tenantmembershipdescriptor/)\>
