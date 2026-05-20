---
title: Enum BehaviorResultStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a transport-neutral behavior outcome.

```csharp
public enum BehaviorResultStatus
```

## Fields

`Accepted = 2` 

The behavior accepted the request for asynchronous work.



`Conflict = 14` 

The request conflicts with the current state of the target resource.



`Created = 1` 

The behavior created a new resource or record.



`Forbidden = 12` 

The caller is authenticated but not allowed to perform the requested action.



`Invalid = 10` 

The request was invalid for the target behavior.



`NoContent = 3` 

The behavior completed successfully without a response payload.



`NotFound = 13` 

The requested resource or target was not found.



`Ok = 0` 

The behavior completed successfully and returned a value.



`Unauthorized = 11` 

The caller is not authenticated for the requested behavior.
