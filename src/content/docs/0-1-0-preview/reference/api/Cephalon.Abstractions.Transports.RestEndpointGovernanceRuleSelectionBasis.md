---
title: Enum RestEndpointGovernanceRuleSelectionBasis
slug: 0-1-0-preview/reference/api/cephalon-abstractions-transports-restendpointgovernanceruleselectionbasis
editUrl: false
---

Namespace: [Cephalon.Abstractions.Transports](/0-1-0-preview/reference/api/cephalon-abstractions-transports/)  
Assembly: Cephalon.Abstractions.dll  

Describes the earliest decisive specificity rule that selected one matching REST governance rule
over another.

```csharp
[JsonConverter(typeof(JsonStringEnumConverter<RestEndpointGovernanceRuleSelectionBasis>))]
public enum RestEndpointGovernanceRuleSelectionBasis
```

#### Extension Methods

[RestEndpointGovernanceRuleSelectionBasisExtensions.GetWireName\(RestEndpointGovernanceRuleSelectionBasis\)](Cephalon.Abstractions.Transports.RestEndpointGovernanceRuleSelectionBasisExtensions.md\#Cephalon\_Abstractions\_Transports\_RestEndpointGovernanceRuleSelectionBasisExtensions\_GetWireName\_Cephalon\_Abstractions\_Transports\_RestEndpointGovernanceRuleSelectionBasis\_)

## Fields

`BehaviorTargeting = 5` 

A rule that explicitly targeted behaviors won over a broader module-level rule.



`CandidateTargeting = 2` 

A rule that targeted explicit candidate ids won over a broader rule that did not.



`FewerTargetValues = 7` 

A rule with fewer total selector values won over an otherwise equally ranked broader rule.



`MoreTargetDimensions = 4` 

A rule that constrained more selector dimensions won over a less specific rule.



`NarrowerAuthoringStyleScope = 6` 

A rule that constrained fewer authoring styles won over a broader authoring-style scope.



`NarrowerBehaviorScope = 9` 

A rule that targeted a narrower behavior-id scope won over a broader behavior-targeted rule.



`NarrowerCandidateSet = 3` 

A rule that targeted a smaller candidate-id set won over a broader candidate-targeted rule.



`SingleMatch = 1` 

Only one governance rule matched the candidate, so no tie-breaker was required.



`StableRuleId = 8` 

The winning rule was selected by the final stable rule-id tie-breaker.



`Unspecified = 0` 

The selection basis was not classified.
