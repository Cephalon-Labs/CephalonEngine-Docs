---
title: Class CellTrafficAutomationDependencyStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdependencystates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable dependency states for cell traffic automation materialization answers.

```csharp
public static class CellTrafficAutomationDependencyStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationDependencyStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdependencystates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDependencyStates_Missing"></a> Missing

The selected materializer depends on control-plane resources that are currently missing.

```csharp
public const string Missing = "dependency-missing"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDependencyStates_Mixed"></a> Mixed

Multiple required materialization dimensions currently disagree about dependency posture.

```csharp
public const string Mixed = "mixed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDependencyStates_Satisfied"></a> Satisfied

The selected materializer depends on control-plane resources that are currently available.

```csharp
public const string Satisfied = "satisfied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationDependencyStates_Unknown"></a> Unknown

The dependency posture could not be determined from the current runtime truth.

```csharp
public const string Unknown = "unknown"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
