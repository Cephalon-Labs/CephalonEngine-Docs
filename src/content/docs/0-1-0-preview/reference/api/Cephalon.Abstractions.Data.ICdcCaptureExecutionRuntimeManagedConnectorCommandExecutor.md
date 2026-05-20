---
title: Interface ICdcCaptureExecutionRuntimeManagedConnectorCommandExecutor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureexecutionruntimemanagedconnectorcommandexecutor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Evaluates one shared managed-connector command request against the active provider execution-adapter set.

```csharp
public interface ICdcCaptureExecutionRuntimeManagedConnectorCommandExecutor
```

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeManagedConnectorCommandExecutor_ExecuteAsync_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest_System_Threading_CancellationToken_"></a> ExecuteAsync\(string, string, CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest?, CancellationToken\)

Evaluates one managed-connector command request for the supplied execution runtime.

```csharp
ValueTask<CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult> ExecuteAsync(string executionRuntimeId, string operationId, CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest? request = null, CancellationToken cancellationToken = default)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier that owns the managed connector.

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector operation identifier to evaluate.

`request` [CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionrequest/)?

Optional operator intent supplied with the execution request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to observe cancellation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult/)\>

The typed command-execution result describing how Cephalon handled the request.
