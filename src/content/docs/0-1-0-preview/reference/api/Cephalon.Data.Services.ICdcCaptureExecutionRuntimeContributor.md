---
title: Interface ICdcCaptureExecutionRuntimeContributor
slug: 0-1-0-preview/reference/api/cephalon-data-services-icdccaptureexecutionruntimecontributor
editUrl: false
---

Namespace: [Cephalon.Data.Services](/0-1-0-preview/reference/api/cephalon-data-services/)  
Assembly: Cephalon.Data.dll  

Contributes one or more operator-facing CDC capture execution runtimes to the active data runtime.

```csharp
public interface ICdcCaptureExecutionRuntimeContributor
```

## Methods

### <a id="Cephalon_Data_Services_ICdcCaptureExecutionRuntimeContributor_RegisterExecutionRuntimes_Cephalon_Data_Services_ICdcCaptureExecutionRuntimeRegistry_"></a> RegisterExecutionRuntimes\(ICdcCaptureExecutionRuntimeRegistry\)

Registers one or more CDC capture execution runtime descriptors owned by the contributor.

```csharp
void RegisterExecutionRuntimes(ICdcCaptureExecutionRuntimeRegistry executionRuntimes)
```

#### Parameters

`executionRuntimes` [ICdcCaptureExecutionRuntimeRegistry](/0-1-0-preview/reference/api/cephalon-data-services-icdccaptureexecutionruntimeregistry/)

The execution-runtime registry receiving contributed descriptors.
