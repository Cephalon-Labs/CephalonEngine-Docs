---
title: Interface ICdcCaptureRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Receives CDC capture descriptors contributed by active modules or packages.

```csharp
public interface ICdcCaptureRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureRegistry_Add_Cephalon_Abstractions_Data_CdcCaptureDescriptor_"></a> Add\(CdcCaptureDescriptor\)

Adds a CDC capture to the current runtime composition.

```csharp
void Add(CdcCaptureDescriptor cdcCapture)
```

#### Parameters

`cdcCapture` [CdcCaptureDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturedescriptor/)

The CDC capture descriptor to register.
