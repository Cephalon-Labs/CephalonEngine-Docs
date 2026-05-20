---
title: Class DependencyHealthReport
slug: 0-1-0-preview/reference/api/cephalon-abstractions-health-dependencyhealthreport
editUrl: false
---

Namespace: [Cephalon.Abstractions.Health](/0-1-0-preview/reference/api/cephalon-abstractions-health/)  
Assembly: Cephalon.Abstractions.dll  

Describes the health state of one dependency surfaced by the runtime.

```csharp
public sealed record DependencyHealthReport : IEquatable<DependencyHealthReport>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthReport](/0-1-0-preview/reference/api/cephalon-abstractions-health-dependencyhealthreport/)

#### Implements

[IEquatable<DependencyHealthReport\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport__ctor_System_String_System_String_Cephalon_Abstractions_Health_HealthState_System_String_System_Boolean_System_String_"></a> DependencyHealthReport\(string, string, HealthState, string, bool, string\)

Describes the health state of one dependency surfaced by the runtime.

```csharp
public DependencyHealthReport(string Id, string DisplayName, HealthState State, string Description, bool Required, string Source)
```

#### Parameters

`Id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable dependency identifier.

`DisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable dependency name.

`State` [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)

The current health state.

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing health description.

`Required` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the dependency is required for readiness.

`Source` [string](https://learn.microsoft.com/dotnet/api/system.string)

The contributor or subsystem that reported the dependency.

## Properties

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_Description"></a> Description

The operator-facing health description.

```csharp
public string Description { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_DisplayName"></a> DisplayName

The human-readable dependency name.

```csharp
public string DisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_Id"></a> Id

The stable dependency identifier.

```csharp
public string Id { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_Required"></a> Required

Whether the dependency is required for readiness.

```csharp
public bool Required { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_Source"></a> Source

The contributor or subsystem that reported the dependency.

```csharp
public string Source { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Health_DependencyHealthReport_State"></a> State

The current health state.

```csharp
public HealthState State { get; init; }
```

#### Property Value

 [HealthState](/0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate/)
