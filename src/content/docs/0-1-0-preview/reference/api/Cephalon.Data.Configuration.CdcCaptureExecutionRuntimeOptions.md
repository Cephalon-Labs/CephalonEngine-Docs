---
title: Class CdcCaptureExecutionRuntimeOptions
slug: 0-1-0-preview/reference/api/cephalon-data-configuration-cdccaptureexecutionruntimeoptions
editUrl: false
---

Namespace: [Cephalon.Data.Configuration](/0-1-0-preview/reference/api/cephalon-data-configuration/)  
Assembly: Cephalon.Data.dll  

Configures one host-owned CDC execution runtime declaration for the runtime-neutral data pack.

```csharp
public sealed class CdcCaptureExecutionRuntimeOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeOptions](/0-1-0-preview/reference/api/cephalon-data-configuration-cdccaptureexecutionruntimeoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed additional operator-facing execution-runtime surfaces. Installed modules and
companion packs can still contribute runtimes through
<xref href="Cephalon.Data.Services.ICdcCaptureExecutionRuntimeContributor" data-throw-if-not-resolved="false"></xref>.

## Constructors

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions__ctor"></a> CdcCaptureExecutionRuntimeOptions\(\)

Creates CDC execution runtime options with empty identity fields and a declared-runtime topology.

```csharp
public CdcCaptureExecutionRuntimeOptions()
```

## Properties

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_AcknowledgementMode"></a> AcknowledgementMode

Gets or sets the operator-facing acknowledgement mode when the runtime reports one.

```csharp
public string? AcknowledgementMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_CdcCaptureIds"></a> CdcCaptureIds

Gets the CDC capture identifiers explicitly owned by the runtime when ownership is bounded to a known capture set.

```csharp
public IList<string> CdcCaptureIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_Description"></a> Description

Gets or sets the human-readable execution-runtime description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing execution-runtime name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_EdgeNodeIds"></a> EdgeNodeIds

Gets the declared edge-node identifiers that can originate observations for the runtime.

```csharp
public IList<string> EdgeNodeIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_ExecutionGraphId"></a> ExecutionGraphId

Gets or sets the execution-graph identifier when the runtime maps to a Cephalon execution graph.

```csharp
public string? ExecutionGraphId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_ExecutionOwnership"></a> ExecutionOwnership

Gets or sets the operator-facing ownership mode for the runtime.

```csharp
public string ExecutionOwnership { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_ExecutionTopology"></a> ExecutionTopology

Gets or sets the operator-facing topology classification for the runtime.

```csharp
public string ExecutionTopology { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_HostedExecutionId"></a> HostedExecutionId

Gets or sets the hosted-execution identifier when the runtime maps to a Cephalon hosted execution.

```csharp
public string? HostedExecutionId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_Id"></a> Id

Gets or sets the stable execution-runtime identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the runtime declaration.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_ObservationStaleAfterSeconds"></a> ObservationStaleAfterSeconds

Gets or sets the report-freshness window, in seconds, used to mark external runtime observations stale.

```csharp
public int? ObservationStaleAfterSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_RejectConflictingReporterIds"></a> RejectConflictingReporterIds

Gets or sets a value indicating whether the runtime should reject reports from conflicting reporter identities while an active lease still exists.

```csharp
public bool RejectConflictingReporterIds { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_RejectOutOfOrderReports"></a> RejectOutOfOrderReports

Gets or sets a value indicating whether the runtime should reject out-of-order external reports.

```csharp
public bool RejectOutOfOrderReports { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Configuration_CdcCaptureExecutionRuntimeOptions_ReporterLeaseSeconds"></a> ReporterLeaseSeconds

Gets or sets the reporter-lease window, in seconds, used to keep one external reporter authoritative for the runtime.

```csharp
public int? ReporterLeaseSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
