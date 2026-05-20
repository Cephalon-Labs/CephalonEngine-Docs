---
title: Class CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the immediate result of one managed-connector command-execution request evaluated by Cephalon.

```csharp
public sealed record CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult : IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult\(string, string?\)

Creates a new managed-connector command-execution result.

```csharp
public CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable command-execution state, such as <code>unrecorded</code>, <code>blocked</code>, <code>operator-only</code>, <code>unavailable</code>, <code>no-op</code>, <code>adapted</code>, <code>failed</code>, or <code>not-applicable</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing command-execution summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_AdapterFingerprint"></a> AdapterFingerprint

Gets the deterministic execution-adapter fingerprint already associated with the current managed connector.

```csharp
public string AdapterFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_AdapterId"></a> AdapterId

Gets the current provider execution-adapter identifier that handled the request when one was available.

```csharp
public string AdapterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ApprovalApplied"></a> ApprovalApplied

Gets a value indicating whether the recorded attempt included an explicit approval from the caller.

```csharp
public bool ApprovalApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_AttemptId"></a> AttemptId

Gets the stable recorded command-execution attempt identifier when Cephalon has persisted one outcome.

```csharp
public string AttemptId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_CommandEnvelopeState"></a> CommandEnvelopeState

Gets the current command-envelope state that informed the request result.

```csharp
public string CommandEnvelopeState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_CommandFingerprint"></a> CommandFingerprint

Gets the deterministic command fingerprint already associated with the current managed connector.

```csharp
public string CommandFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_CommandIssuanceState"></a> CommandIssuanceState

Gets the current command-issuance state that informed the request result.

```csharp
public string CommandIssuanceState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ConnectClusterId"></a> ConnectClusterId

Gets the connector-cluster identifier targeted by the provider command when one was available.

```csharp
public string? ConnectClusterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ConnectorClass"></a> ConnectorClass

Gets the provider-facing connector-class identifier targeted by the provider command when one was available.

```csharp
public string? ConnectorClass { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ConnectorId"></a> ConnectorId

Gets the provider-facing connector identifier targeted by the provider command when one was available.

```csharp
public string? ConnectorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_Description"></a> Description

Gets an optional operator-facing command-execution summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_DestructiveAllowanceApplied"></a> DestructiveAllowanceApplied

Gets a value indicating whether the recorded attempt included an explicit destructive-operation allowance from the caller.

```csharp
public bool DestructiveAllowanceApplied { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ExecutionAdapterState"></a> ExecutionAdapterState

Gets the current execution-adapter state that informed the request result.

```csharp
public string ExecutionAdapterState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ExecutionFingerprint"></a> ExecutionFingerprint

Gets the deterministic command-execution fingerprint Cephalon currently derives for the request result.

```csharp
public string ExecutionFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ExecutionRuntimeId"></a> ExecutionRuntimeId

Gets the stable execution-runtime identifier currently associated with the request.

```csharp
public string ExecutionRuntimeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_HasProviderCommand"></a> HasProviderCommand

Gets a value indicating whether the request currently carries one translated provider command.

```csharp
public bool HasProviderCommand { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_HasRecordedOutcome"></a> HasRecordedOutcome

Gets a value indicating whether Cephalon has recorded one concrete command-execution outcome.

```csharp
public bool HasRecordedOutcome { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_HttpMethod"></a> HttpMethod

Gets the outbound HTTP method that would be used by the provider execution adapter when one was resolved.

```csharp
public string? HttpMethod { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_InvocationSourceId"></a> InvocationSourceId

Gets the stable invocation-source identifier that originated the command-execution request.

```csharp
public string InvocationSourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsAdapted"></a> IsAdapted

Gets a value indicating whether the request was translated into one provider-facing command shape.

```csharp
public bool IsAdapted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsAutomaticRetryInvocation"></a> IsAutomaticRetryInvocation

Gets a value indicating whether the request was recorded from the shared automatic background retry lane.

```csharp
public bool IsAutomaticRetryInvocation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsBlocked"></a> IsBlocked

Gets a value indicating whether the request is currently blocked.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsDestructiveOperation"></a> IsDestructiveOperation

Gets a value indicating whether the request targets a destructive connector operation.

```csharp
public bool IsDestructiveOperation { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsFailed"></a> IsFailed

Gets a value indicating whether the request failed while Cephalon was translating it.

```csharp
public bool IsFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsNoOp"></a> IsNoOp

Gets a value indicating whether the request currently resolves to no provider work.

```csharp
public bool IsNoOp { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsOperatorOnly"></a> IsOperatorOnly

Gets a value indicating whether the request currently remains operator-owned.

```csharp
public bool IsOperatorOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsOperatorRequestInvocation"></a> IsOperatorRequestInvocation

Gets a value indicating whether the request was recorded from an explicit operator-initiated request.

```csharp
public bool IsOperatorRequestInvocation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsUnavailable"></a> IsUnavailable

Gets a value indicating whether no provider execution adapter is currently available for the request.

```csharp
public bool IsUnavailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IsUnrecorded"></a> IsUnrecorded

Gets a value indicating whether Cephalon has not yet recorded any command-execution outcome for the runtime.

```csharp
public bool IsUnrecorded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_IssuanceFingerprint"></a> IssuanceFingerprint

Gets the deterministic issuance fingerprint already associated with the current managed connector.

```csharp
public string IssuanceFingerprint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ManagementMode"></a> ManagementMode

Gets the declared managed-connector management mode when one is known.

```csharp
public string? ManagementMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ProviderId"></a> ProviderId

Gets the provider identifier associated with the command when one was available.

```csharp
public string? ProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_RecordedAtUtc"></a> RecordedAtUtc

Gets the timestamp when Cephalon recorded this command-execution outcome.

```csharp
public DateTimeOffset? RecordedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_RelativePath"></a> RelativePath

Gets the outbound relative request path that would be used by the provider execution adapter when one was resolved.

```csharp
public string? RelativePath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_RequestedOperationId"></a> RequestedOperationId

Gets the operation identifier originally requested by the caller.

```csharp
public string RequestedOperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_RequiresExplicitApproval"></a> RequiresExplicitApproval

Gets a value indicating whether the request still requires explicit approval.

```csharp
public bool RequiresExplicitApproval { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_ResolvedOperationId"></a> ResolvedOperationId

Gets the operation identifier Cephalon resolved for the provider command.

```csharp
public string ResolvedOperationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_SourceId"></a> SourceId

Gets the primary source identifier Cephalon used to derive the request result.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_SourceProviderId"></a> SourceProviderId

Gets the provider-facing source-provider identifier targeted by the provider command when one was available.

```csharp
public string? SourceProviderId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_State"></a> State

Gets the stable managed-connector command-execution state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_TransportKind"></a> TransportKind

Gets the transport kind used by the provider execution adapter when one was resolved.

```csharp
public string? TransportKind { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult_WouldApplyChanges"></a> WouldApplyChanges

Gets a value indicating whether the request would still apply one or more shared write-path changes.

```csharp
public bool WouldApplyChanges { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
