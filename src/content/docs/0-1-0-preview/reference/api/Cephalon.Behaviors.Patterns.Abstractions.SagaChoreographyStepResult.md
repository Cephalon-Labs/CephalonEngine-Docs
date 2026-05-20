---
title: Class SagaChoreographyStepResult
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographystepresult
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Carries the local output and event publications produced by one choreography-based saga step.

```csharp
public sealed class SagaChoreographyStepResult : ISagaChoreographyStepResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SagaChoreographyStepResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographystepresult/)

#### Implements

[ISagaChoreographyStepResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographystepresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyStepResult__ctor_System_Object_System_Collections_Generic_IReadOnlyList_Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyPublication__"></a> SagaChoreographyStepResult\(object?, IReadOnlyList<SagaChoreographyPublication\>?\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Abstractions.SagaChoreographyStepResult" data-throw-if-not-resolved="false"></xref>.

```csharp
public SagaChoreographyStepResult(object? output = null, IReadOnlyList<SagaChoreographyPublication>? publications = null)
```

#### Parameters

`output` [object](https://learn.microsoft.com/dotnet/api/system.object)?

The optional local output returned to the caller.

`publications` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)\>?

The publications that continue or compensate the saga.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyStepResult_Output"></a> Output

Gets the optional local output returned to the caller.

```csharp
public object? Output { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_SagaChoreographyStepResult_Publications"></a> Publications

Gets the publications that continue or compensate the saga.

```csharp
public IReadOnlyList<SagaChoreographyPublication> Publications { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)\>
