---
title: Class CdcCaptureExecutionBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes how a CDC capture binds to an operator-facing execution runtime.

```csharp
public sealed class CdcCaptureExecutionBindingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureExecutionBindingDescriptor\(string, string?, string?, string?, string, string, IReadOnlyDictionary<string, string\>?\)

Creates a new CDC capture execution binding descriptor.

```csharp
[JsonConstructor]
public CdcCaptureExecutionBindingDescriptor(string cdcCaptureId, string? authoredExecutionRuntimeId = null, string? requestedExecutionRuntimeId = null, string? effectiveExecutionRuntimeId = null, string executionOwnership = "not-configured", string resolutionMode = "unbound", IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier.

`authoredExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier authored directly on the CDC capture when one was declared.

`requestedExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier requested for the CDC capture after any additive overrides are applied.

`effectiveExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier that currently owns execution for the CDC capture.

`executionOwnership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing ownership mode for the effective execution runtime, such as <code>host-managed</code> or <code>external-managed</code>.

`resolutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing reason that explains how the effective execution-runtime binding was selected.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata for the resolved binding.

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureExecutionBindingDescriptor\(string, string?, string?, string?, string, string, string, IReadOnlyDictionary<string, string\>?\)

Creates a new CDC capture execution binding descriptor with a first-class topology classification.

```csharp
public CdcCaptureExecutionBindingDescriptor(string cdcCaptureId, string? authoredExecutionRuntimeId, string? requestedExecutionRuntimeId, string? effectiveExecutionRuntimeId, string executionOwnership, string executionTopology, string resolutionMode = "unbound", IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier.

`authoredExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier authored directly on the CDC capture when one was declared.

`requestedExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier requested for the CDC capture after any additive overrides are applied.

`effectiveExecutionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The execution-runtime identifier that currently owns execution for the CDC capture.

`executionOwnership` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing ownership mode for the effective execution runtime, such as <code>host-managed</code> or <code>external-managed</code>.

`executionTopology` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing topology classification for the effective execution runtime, such as <code>shared-in-process-polling</code> or <code>provider-native</code>.

`resolutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing reason that explains how the effective execution-runtime binding was selected.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata for the resolved binding.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_AuthoredExecutionRuntimeId"></a> AuthoredExecutionRuntimeId

Gets the execution-runtime identifier authored directly on the CDC capture when one was declared.

```csharp
public string? AuthoredExecutionRuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_CdcCaptureId"></a> CdcCaptureId

Gets the stable CDC capture identifier.

```csharp
public string CdcCaptureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_EffectiveExecutionRuntimeId"></a> EffectiveExecutionRuntimeId

Gets the execution-runtime identifier that currently owns execution for the CDC capture.

```csharp
public string? EffectiveExecutionRuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_ExecutionOwnership"></a> ExecutionOwnership

Gets the operator-facing ownership mode for the effective execution runtime.

```csharp
public string ExecutionOwnership { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_ExecutionTopology"></a> ExecutionTopology

Gets the operator-facing topology classification for the effective execution runtime.

```csharp
public string ExecutionTopology { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_IsBound"></a> IsBound

Gets a value indicating whether the CDC capture currently resolves to an active execution runtime.

```csharp
public bool IsBound { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_Metadata"></a> Metadata

Gets operator-facing metadata for the resolved binding.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_RequestedExecutionRuntimeId"></a> RequestedExecutionRuntimeId

Gets the execution-runtime identifier requested for the CDC capture after additive overrides are applied.

```csharp
public string? RequestedExecutionRuntimeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_ResolutionMode"></a> ResolutionMode

Gets the operator-facing explanation for how the effective execution-runtime binding was selected.

```csharp
public string ResolutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionBindingDescriptor_Unbound_System_String_"></a> Unbound\(string\)

Creates the default unbound execution-binding descriptor for the requested CDC capture.

```csharp
public static CdcCaptureExecutionBindingDescriptor Unbound(string cdcCaptureId)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The CDC capture identifier to bind.

#### Returns

 [CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

An unbound execution-binding descriptor.
