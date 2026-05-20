---
title: Class BehaviorFault
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a structured fault from a behavior execution.

```csharp
public sealed class BehaviorFault
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault__ctor"></a> BehaviorFault\(\)

Initializes a new instance of <xref href="Cephalon.Abstractions.Behaviors.BehaviorFault" data-throw-if-not-resolved="false"></xref>.

```csharp
public BehaviorFault()
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault_Code"></a> Code

Gets or sets the fault code.

```csharp
public string Code { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault_Details"></a> Details

Gets or sets additional fault details.

```csharp
public string? Details { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault_InnerFaults"></a> InnerFaults

Gets or sets nested faults.

```csharp
public IReadOnlyList<BehaviorFault> InnerFaults { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)\>

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault_Message"></a> Message

Gets or sets the fault message.

```csharp
public string Message { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_BehaviorFault_Severity"></a> Severity

Gets or sets the fault severity.

```csharp
public BehaviorFaultSeverity Severity { get; init; }
```

#### Property Value

 [BehaviorFaultSeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfaultseverity/)
