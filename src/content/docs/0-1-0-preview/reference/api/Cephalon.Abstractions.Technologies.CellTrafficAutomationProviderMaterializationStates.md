---
title: Class CellTrafficAutomationProviderMaterializationStates
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationstates
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable provider-materialization states for cell traffic automation runtime answers.

```csharp
public static class CellTrafficAutomationProviderMaterializationStates
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationProviderMaterializationStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationstates/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationStates_Applied"></a> Applied

The automation was reconciled successfully by the selected provider materializer.

```csharp
public const string Applied = "applied"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationStates_Failed"></a> Failed

The selected provider materializer last reported a failure while reconciling the automation.

```csharp
public const string Failed = "failed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationStates_Pending"></a> Pending

The automation targets a provider and an active materializer is expected to reconcile it.

```csharp
public const string Pending = "pending"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationStates_Unavailable"></a> Unavailable

The automation targets a provider but no active materializer can apply it.

```csharp
public const string Unavailable = "unavailable"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
