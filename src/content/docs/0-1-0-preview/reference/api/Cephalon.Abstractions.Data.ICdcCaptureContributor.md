---
title: Interface ICdcCaptureContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccapturecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more CDC capture descriptors to the active runtime.

```csharp
public interface ICdcCaptureContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureContributor_RegisterCdcCaptures_Cephalon_Abstractions_Data_ICdcCaptureRegistry_"></a> RegisterCdcCaptures\(ICdcCaptureRegistry\)

Registers one or more CDC capture descriptors with the supplied registry.

```csharp
void RegisterCdcCaptures(ICdcCaptureRegistry cdcCaptures)
```

#### Parameters

`cdcCaptures` [ICdcCaptureRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureregistry/)

The registry that collects contributed CDC capture descriptors.
