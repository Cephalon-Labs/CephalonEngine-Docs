---
title: Enum FeatureFlagSourceKind
slug: 0-1-0-preview/reference/api/cephalon-abstractions-features-featureflagsourcekind
editUrl: false
---

Namespace: [Cephalon.Abstractions.Features](/0-1-0-preview/reference/api/cephalon-abstractions-features/)  
Assembly: Cephalon.Abstractions.dll  

Identifies who owns a feature flag visible to the active runtime.

```csharp
public enum FeatureFlagSourceKind
```

## Fields

`Host = 0` 

Indicates the feature flag is host-owned and was configured directly by the app.



`Module = 1` 

Indicates the feature flag is module-owned and was contributed by a Cephalon module.
