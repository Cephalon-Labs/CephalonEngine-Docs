---
title: Class BehaviorAdvisoryCatalog
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-behavioradvisorycatalog
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Aggregates advisories from all registered <xref href="Cephalon.Abstractions.Behaviors.IBehaviorAdvisoryContributor" data-throw-if-not-resolved="false"></xref> implementations.

```csharp
public sealed class BehaviorAdvisoryCatalog : IBehaviorAdvisoryCatalog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BehaviorAdvisoryCatalog](/0-1-0-preview/reference/api/cephalon-behaviors-services-behavioradvisorycatalog/)

#### Implements

IBehaviorAdvisoryCatalog

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Services_BehaviorAdvisoryCatalog__ctor_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Behaviors_IBehaviorAdvisoryContributor__"></a> BehaviorAdvisoryCatalog\(IEnumerable<IBehaviorAdvisoryContributor\>\)

Initializes the catalog from the provided contributors.

```csharp
public BehaviorAdvisoryCatalog(IEnumerable<IBehaviorAdvisoryContributor> contributors)
```

#### Parameters

`contributors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IBehaviorAdvisoryContributor\>

## Properties

### <a id="Cephalon_Behaviors_Services_BehaviorAdvisoryCatalog_All"></a> All

Gets all active advisories.

```csharp
public IReadOnlyList<IBehaviorAdvisory> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IBehaviorAdvisory\>

## Methods

### <a id="Cephalon_Behaviors_Services_BehaviorAdvisoryCatalog_GetByBehavior_System_String_"></a> GetByBehavior\(string\)

Gets advisories for a specific behavior identifier.

```csharp
public IReadOnlyList<IBehaviorAdvisory> GetByBehavior(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IBehaviorAdvisory\>

### <a id="Cephalon_Behaviors_Services_BehaviorAdvisoryCatalog_GetBySeverity_Cephalon_Abstractions_Behaviors_BehaviorAdvisorySeverity_"></a> GetBySeverity\(BehaviorAdvisorySeverity\)

Gets advisories at or above the specified severity.

```csharp
public IReadOnlyList<IBehaviorAdvisory> GetBySeverity(BehaviorAdvisorySeverity minimumSeverity)
```

#### Parameters

`minimumSeverity` BehaviorAdvisorySeverity

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IBehaviorAdvisory\>
