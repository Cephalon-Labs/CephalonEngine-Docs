---
title: Class CdcCaptureExecutionRuntimeRemediationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimeremediationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current operator-facing remediation posture for one CDC execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeRemediationStatus : IEquatable<CdcCaptureExecutionRuntimeRemediationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeRemediationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimeremediationstatus/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeRemediationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus__ctor_System_String_System_String_"></a> CdcCaptureExecutionRuntimeRemediationStatus\(string, string?\)

Creates a new execution-runtime remediation answer.

```csharp
public CdcCaptureExecutionRuntimeRemediationStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable remediation state, such as <code>ready</code>, <code>attention</code>, or <code>blocked</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing remediation summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_AffectedCaptureCount"></a> AffectedCaptureCount

Gets the number of CDC captures currently affected by active remediation work.

```csharp
public int AffectedCaptureCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_AffectedCdcCaptureIds"></a> AffectedCdcCaptureIds

Gets the CDC capture identifiers currently affected by active remediation work.

```csharp
public IReadOnlyList<string> AffectedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_CategoryCount"></a> CategoryCount

Gets the number of active remediation categories currently visible for the execution runtime.

```csharp
public int CategoryCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_CategoryIds"></a> CategoryIds

Gets the stable remediation categories currently active for the execution runtime.

```csharp
public IReadOnlyList<string> CategoryIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_Description"></a> Description

Gets an optional operator-facing remediation summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_FailedCdcCaptureIds"></a> FailedCdcCaptureIds

Gets the CDC capture identifiers whose latest reported runtime outcome is failed.

```csharp
public IReadOnlyList<string> FailedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_IsBlocked"></a> IsBlocked

Gets a value indicating whether the execution runtime is currently blocked by failed CDC captures.

```csharp
public bool IsBlocked { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_ReporterCoordinationIssueCdcCaptureIds"></a> ReporterCoordinationIssueCdcCaptureIds

Gets the CDC capture identifiers whose latest runtime story reports degraded reporter coordination.

```csharp
public IReadOnlyList<string> ReporterCoordinationIssueCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_RequiresRemediation"></a> RequiresRemediation

Gets a value indicating whether the execution runtime currently requires operator remediation.

```csharp
public bool RequiresRemediation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_StaleCdcCaptureIds"></a> StaleCdcCaptureIds

Gets the CDC capture identifiers whose latest reported runtime observation is stale.

```csharp
public IReadOnlyList<string> StaleCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_State"></a> State

Gets the stable remediation state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeRemediationStatus_UnreportedCdcCaptureIds"></a> UnreportedCdcCaptureIds

Gets the declared CDC capture identifiers that have not reported runtime state yet.

```csharp
public IReadOnlyList<string> UnreportedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
