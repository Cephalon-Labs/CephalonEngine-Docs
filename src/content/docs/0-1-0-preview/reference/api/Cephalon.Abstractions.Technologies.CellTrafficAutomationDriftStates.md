---
title: Class CellTrafficAutomationDriftStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdriftstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable drift states for cell traffic automation materialization answers.

```csharp
public static class CellTrafficAutomationDriftStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationDriftStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdriftstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDriftStates_Drifted"></a> Drifted

The selected materializer observed drift between desired and actual control-plane posture.

```csharp
public const string Drifted = "drifted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDriftStates_InSync"></a> InSync

The selected materializer observed the desired and actual control-plane posture in sync.

```csharp
public const string InSync = "in-sync"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDriftStates_Mixed"></a> Mixed

Multiple required materialization dimensions currently disagree about drift posture.

```csharp
public const string Mixed = "mixed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDriftStates_Reconciling"></a> Reconciling

The selected materializer is still reconciling the desired and actual control-plane posture.

```csharp
public const string Reconciling = "reconciling"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDriftStates_Unknown"></a> Unknown

The drift posture could not be determined from the current runtime truth.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
