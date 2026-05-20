---
title: Class CellTrafficAutomationOwnershipStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationownershipstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable ownership states for cell traffic automation materialization answers.

```csharp
public static class CellTrafficAutomationOwnershipStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationOwnershipStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationownershipstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Mixed"></a> Mixed

Multiple required materialization dimensions currently disagree about ownership posture.

```csharp
public const string Mixed = "mixed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Orphaned"></a> Orphaned

The selected materializer observed resources that no longer have an active desired owner.

```csharp
public const string Orphaned = "orphaned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Owned"></a> Owned

The selected materializer currently owns the reconciled control-plane resources.

```csharp
public const string Owned = "owned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_OwnershipConflict"></a> OwnershipConflict

The selected materializer observed a conflicting owner for the target resources.

```csharp
public const string OwnershipConflict = "ownership-conflict"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Pruned"></a> Pruned

The selected materializer pruned previously owned resources.

```csharp
public const string Pruned = "pruned"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Requested"></a> Requested

The automation is requested for reconciliation, but ownership has not been observed yet.

```csharp
public const string Requested = "requested"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Transferred"></a> Transferred

The selected materializer transferred ownership to another reconciler.

```csharp
public const string Transferred = "transferred"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationOwnershipStates_Unknown"></a> Unknown

The ownership posture could not be determined from the current runtime truth.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
