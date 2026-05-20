---
title: Interface IDiagnosticsConventionContributor
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-idiagnosticsconventioncontributor
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Contributes a diagnostics convention to the runtime-facing diagnostics catalog.

```csharp
public interface IDiagnosticsConventionContributor
```

## Methods

### <a id="Cephalon_Engine_Diagnostics_IDiagnosticsConventionContributor_DescribeDiagnosticsConvention"></a> DescribeDiagnosticsConvention\(\)

Describes the diagnostics convention owned by the contributor.

```csharp
DiagnosticsConvention DescribeDiagnosticsConvention()
```

#### Returns

 [DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)

The diagnostics convention published by the contributor.
