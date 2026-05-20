---
title: Interface ICdcCaptureExecutionRuntimeManagedConnectorExecutionAdapter
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureexecutionruntimemanagedconnectorexecutionadapter
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Translates one shared managed-connector command request into a provider-facing execution shape.

```csharp
public interface ICdcCaptureExecutionRuntimeManagedConnectorExecutionAdapter
```

## Properties

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeManagedConnectorExecutionAdapter_AdapterId"></a> AdapterId

Gets the stable provider execution-adapter identifier exposed on shared runtime surfaces.

```csharp
string AdapterId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeManagedConnectorExecutionAdapter_CanHandle_Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_"></a> CanHandle\(CdcCaptureExecutionRuntimeDescriptor\)

Gets a value indicating whether the adapter can currently handle the supplied execution runtime.

```csharp
bool CanHandle(CdcCaptureExecutionRuntimeDescriptor runtime)
```

#### Parameters

`runtime` [CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)

The execution runtime being evaluated.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the adapter can translate commands for the runtime; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeManagedConnectorExecutionAdapter_ExecuteAsync_Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_System_String_Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest_System_Threading_CancellationToken_"></a> ExecuteAsync\(CdcCaptureExecutionRuntimeDescriptor, string, CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest?, CancellationToken\)

Translates one shared managed-connector command request into a provider-facing command shape.

```csharp
ValueTask<CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult> ExecuteAsync(CdcCaptureExecutionRuntimeDescriptor runtime, string operationId, CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest? request = null, CancellationToken cancellationToken = default)
```

#### Parameters

`runtime` [CdcCaptureExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimedescriptor/)

The execution runtime that owns the managed connector.

`operationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable managed-connector operation identifier to translate.

`request` [CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionrequest/)?

Optional operator intent supplied with the execution request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to observe cancellation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[CdcCaptureExecutionRuntimeManagedConnectorCommandExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimemanagedconnectorcommandexecutionresult/)\>

The typed command-execution result describing how the provider adapter handled the request.
