---
title: Interface IBehaviorAdvisory
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehavioradvisory
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a runtime advisory that describes a recommendation or observation about behavior topology.
Advisories are informational — they do not block dispatch.

```csharp
public interface IBehaviorAdvisory
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisory_BehaviorId"></a> BehaviorId

Gets the behavior identifier this advisory applies to, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if global.

```csharp
string? BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisory_Description"></a> Description

Gets the advisory description.

```csharp
string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisory_DisplayName"></a> DisplayName

Gets the display name shown in runtime surfaces.

```csharp
string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisory_Id"></a> Id

Gets the stable advisory identifier.

```csharp
string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorAdvisory_Severity"></a> Severity

Gets the severity of this advisory.

```csharp
BehaviorAdvisorySeverity Severity { get; }
```

#### Property Value

 [BehaviorAdvisorySeverity](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behavioradvisoryseverity/)
