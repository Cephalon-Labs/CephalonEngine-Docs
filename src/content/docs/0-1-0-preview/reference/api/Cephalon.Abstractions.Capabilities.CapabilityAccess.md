---
title: Enum CapabilityAccess
slug: 0-1-0-preview/reference/api/cephalon-abstractions-capabilities-capabilityaccess
editUrl: false
---

Namespace: [Cephalon.Abstractions.Capabilities](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities/)  
Assembly: Cephalon.Abstractions.dll  

Describes how a capability may be consumed under the active trust policy.

```csharp
public enum CapabilityAccess
```

## Fields

`Allowed = 0` 

Indicates the capability can be used without additional trust requirements.



`Denied = 2` 

Indicates the capability is denied.



`TrustedOnly = 1` 

Indicates the capability can be used only by trusted modules or packages.
