---
title: Interface ICdcCaptureExecutionRuntimeRegistry
slug: 0-1-0-preview/reference/api/cephalon-data-services-icdccaptureexecutionruntimeregistry
editUrl: false
---

Namespace: [Cephalon.Data.Services](/0-1-0-preview/reference/api/cephalon-data-services/)  
Assembly: Cephalon.Data.dll  

Receives operator-facing CDC capture execution runtime descriptors contributed by active data packs.

```csharp
public interface ICdcCaptureExecutionRuntimeRegistry
```

## Methods

### <a id="Cephalon_Data_Services_ICdcCaptureExecutionRuntimeRegistry_Add_Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeDescriptor_"></a> Add\(CdcCaptureExecutionRuntimeDescriptor\)

Adds one CDC capture execution runtime to the current data-runtime composition.

```csharp
void Add(CdcCaptureExecutionRuntimeDescriptor executionRuntime)
```

#### Parameters

`executionRuntime` CdcCaptureExecutionRuntimeDescriptor

The execution runtime to register.
