---
title: Class CellTrafficAutomationMaterializationConditionCategories
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditioncategories
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable category identifiers used by typed cell traffic automation materialization conditions.

```csharp
public static class CellTrafficAutomationMaterializationConditionCategories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationMaterializationConditionCategories](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditioncategories/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Dependency"></a> Dependency

A condition that describes traffic dependency posture such as missing gateways, middleware, or backend services.

```csharp
public const string Dependency = "dependency"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Drift"></a> Drift

A condition that describes drift posture between authored Cephalon intent and the observed control-plane state.

```csharp
public const string Drift = "drift"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Lifecycle"></a> Lifecycle

A condition that describes the active lifecycle or reconciliation action for the materialized resource.

```csharp
public const string Lifecycle = "lifecycle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Observation"></a> Observation

A condition that describes observation posture such as stale, unavailable, or error-driven reportability.

```csharp
public const string Observation = "observation"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Ownership"></a> Ownership

A condition that describes ownership posture for a materialized resource.

```csharp
public const string Ownership = "ownership"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionCategories_Readiness"></a> Readiness

A condition that describes whether the materialized control-plane or edge object is ready to serve traffic.

```csharp
public const string Readiness = "readiness"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
