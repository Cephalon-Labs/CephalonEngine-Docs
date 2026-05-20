---
title: Class CellTrafficAutomationLifecycleActions
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationlifecycleactions
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Defines the stable lifecycle actions for cell traffic automation materialization answers.

```csharp
public static class CellTrafficAutomationLifecycleActions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationLifecycleActions](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationlifecycleactions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Create"></a> Create

The selected materializer created a new owned control-plane resource.

```csharp
public const string Create = "create"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Delete"></a> Delete

The selected materializer deleted an owned control-plane resource.

```csharp
public const string Delete = "delete"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Observe"></a> Observe

The selected materializer is observing control-plane truth without writing changes.

```csharp
public const string Observe = "observe"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Project"></a> Project

The selected materializer is projecting desired intent without applying it yet.

```csharp
public const string Project = "project"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Prune"></a> Prune

The selected materializer pruned a no-longer-desired owned control-plane resource.

```csharp
public const string Prune = "prune"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Reconcile"></a> Reconcile

The selected materializer is reconciling the desired and actual control-plane posture.

```csharp
public const string Reconcile = "reconcile"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Replace"></a> Replace

The selected materializer replaced or updated an existing owned control-plane resource.

```csharp
public const string Replace = "replace"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationLifecycleActions_Transfer"></a> Transfer

The selected materializer transferred ownership to another reconciler.

```csharp
public const string Transfer = "transfer"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
