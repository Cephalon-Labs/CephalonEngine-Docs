---
title: Interface IBehaviorAdvisoryCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisorycatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Provides read access to all active behavior advisories.

```csharp
public interface IBehaviorAdvisoryCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisoryCatalog_All"></a> All

Gets all active advisories.

```csharp
IReadOnlyList<IBehaviorAdvisory> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBehaviorAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory/)\>

## Methods

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisoryCatalog_GetByBehavior_System_String_"></a> GetByBehavior\(string\)

Gets advisories for a specific behavior identifier.

```csharp
IReadOnlyList<IBehaviorAdvisory> GetByBehavior(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBehaviorAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory/)\>

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisoryCatalog_GetBySeverity_Cephalon_Abstractions_Behaviors_BehaviorAdvisorySeverity_"></a> GetBySeverity\(BehaviorAdvisorySeverity\)

Gets advisories at or above the specified severity.

```csharp
IReadOnlyList<IBehaviorAdvisory> GetBySeverity(BehaviorAdvisorySeverity minimumSeverity)
```

#### Parameters

`minimumSeverity` [BehaviorAdvisorySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioradvisoryseverity/)

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[IBehaviorAdvisory](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory/)\>
