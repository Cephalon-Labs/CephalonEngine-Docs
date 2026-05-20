---
title: Class CellTrafficAutomationMaterializationConditionSeverities
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditionseverities
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable severity identifiers used by typed cell traffic automation materialization conditions.

```csharp
public static class CellTrafficAutomationMaterializationConditionSeverities
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationMaterializationConditionSeverities](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditionseverities/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionSeverities_Error"></a> Error

The condition signals an error that blocks or invalidates the current materialization answer.

```csharp
public const string Error = "error"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionSeverities_Info"></a> Info

The condition is informational and does not currently signal an operator-facing problem.

```csharp
public const string Info = "info"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionSeverities_Warning"></a> Warning

The condition signals a warning that still needs operator attention.

```csharp
public const string Warning = "warning"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
