---
title: Enum StartupFailureBehavior
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-startupfailurebehavior
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes how startup failures are handled.

```csharp
public enum StartupFailureBehavior
```

## Fields

`CaptureOnly = 1` 

Capture the failure in runtime status without rethrowing it to the host.



`FailFast = 0` 

Stop startup immediately and rethrow the failure.
