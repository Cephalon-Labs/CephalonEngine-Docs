---
title: Class CellTrafficAutomationRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes the effective runtime traffic-automation answer for one governed cell route.

```csharp
public sealed class CellTrafficAutomationRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__"></a> CellTrafficAutomationRuntimeDescriptor\(string, string, string, string, string, string, string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor\>?\)

Creates a cell traffic-automation runtime descriptor.

```csharp
public CellTrafficAutomationRuntimeDescriptor(string id, string routeId, string sourceModuleId, string sourceCellId, string targetCellId, string displayName, string description, string routingStrategy, string governanceMode, string automationMode, string triggerMode, string actionMode, string materializationMode, string policySource, IReadOnlyList<string>? transportIds = null, string? requiredCapabilityKey = null, IReadOnlyList<string>? sourceHealthIsolationIds = null, IReadOnlyList<string>? targetHealthIsolationIds = null, IReadOnlyList<string>? dependencyIds = null, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyDictionary<string, string>? runtimeMetadata = null, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor>? materializationConditions = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable traffic-automation identifier.

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governed cell-route identifier that this automation answer applies to.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the governed route.

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source cell identifier.

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target cell identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing traffic-automation name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the traffic-automation posture.

`routingStrategy` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing routing strategy inherited from the governed route.

`governanceMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing governance posture inherited from the governed route.

`automationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized automation posture, such as <code>advisory</code> or <code>automatic</code>.

`triggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized trigger posture, such as <code>source-health</code> or <code>source-or-target-health</code>.

`actionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized action posture, such as <code>quarantine-route</code> or <code>shed-load</code>.

`materializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized materialization posture, such as <code>runtime-catalog-only</code> or <code>provider-managed</code>.

`policySource` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source of the effective automation policy, such as <code>cell-default</code> or <code>cell-route</code>.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transport identifiers inherited from the governed route.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional capability key inherited from the governed route.

`sourceHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the source cell.

`targetHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the target cell.

`dependencyIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized dependency identifiers observed across the related health-isolation answers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original authored route metadata.

`runtimeMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional runtime-only metadata such as policy notes or overlay provenance.

`materializationConditions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>?

Optional typed provider-managed or edge-managed materialization conditions.

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> CellTrafficAutomationRuntimeDescriptor\(string, string, string, string, string, string, string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor\>?, string?, IReadOnlyList<string\>?\)

Creates a cell traffic-automation runtime descriptor with provider and edge targeting.

```csharp
public CellTrafficAutomationRuntimeDescriptor(string id, string routeId, string sourceModuleId, string sourceCellId, string targetCellId, string displayName, string description, string routingStrategy, string governanceMode, string automationMode, string triggerMode, string actionMode, string materializationMode, string policySource, IReadOnlyList<string>? transportIds, string? requiredCapabilityKey, IReadOnlyList<string>? sourceHealthIsolationIds, IReadOnlyList<string>? targetHealthIsolationIds, IReadOnlyList<string>? dependencyIds, IReadOnlyDictionary<string, string>? metadata, IReadOnlyDictionary<string, string>? runtimeMetadata, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor>? materializationConditions, string? providerId, IReadOnlyList<string>? edgeNodeIds = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable traffic-automation identifier.

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governed cell-route identifier that this automation answer applies to.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the governed route.

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source cell identifier.

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target cell identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing traffic-automation name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the traffic-automation posture.

`routingStrategy` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing routing strategy inherited from the governed route.

`governanceMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing governance posture inherited from the governed route.

`automationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized automation posture, such as <code>advisory</code> or <code>automatic</code>.

`triggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized trigger posture, such as <code>source-health</code> or <code>source-or-target-health</code>.

`actionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized action posture, such as <code>quarantine-route</code> or <code>shed-load</code>.

`materializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized materialization posture, such as <code>runtime-catalog-only</code>, <code>provider-managed</code>, or <code>edge-managed</code>.

`policySource` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source of the effective automation policy, such as <code>cell-default</code> or <code>cell-route</code>.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transport identifiers inherited from the governed route.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional capability key inherited from the governed route.

`sourceHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the source cell.

`targetHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the target cell.

`dependencyIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized dependency identifiers observed across the related health-isolation answers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original authored route metadata.

`runtimeMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional runtime-only metadata such as policy notes or overlay provenance.

`materializationConditions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>?

Optional typed provider-managed or edge-managed materialization conditions.

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional external provider or control-plane identifier that materializes this automation.

`edgeNodeIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional edge-node identifiers associated with this automation answer.

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_"></a> CellTrafficAutomationRuntimeDescriptor\(string, string, string, string, string, string, string, string, string, string, string, string, string, string, IReadOnlyList<string\>?, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor\>?, string?, IReadOnlyList<string\>?, string?, string?, DateTimeOffset?, string?, string?, string?, DateTimeOffset?, string?, string?, DateTimeOffset?, string?\)

Creates a cell traffic-automation runtime descriptor with provider, edge, and materialization state.

```csharp
[JsonConstructor]
public CellTrafficAutomationRuntimeDescriptor(string id, string routeId, string sourceModuleId, string sourceCellId, string targetCellId, string displayName, string description, string routingStrategy, string governanceMode, string automationMode, string triggerMode, string actionMode, string materializationMode, string policySource, IReadOnlyList<string>? transportIds, string? requiredCapabilityKey, IReadOnlyList<string>? sourceHealthIsolationIds, IReadOnlyList<string>? targetHealthIsolationIds, IReadOnlyList<string>? dependencyIds, IReadOnlyDictionary<string, string>? metadata, IReadOnlyDictionary<string, string>? runtimeMetadata, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor>? materializationConditions, string? providerId, IReadOnlyList<string>? edgeNodeIds, string? edgeMaterializerId, string? edgeMaterializationState, DateTimeOffset? edgeMaterializationObservedAtUtc, string? edgeMaterializationError, string? providerMaterializerId, string? providerMaterializationState, DateTimeOffset? providerMaterializationObservedAtUtc, string? providerMaterializationError, string? materializationState, DateTimeOffset? materializationObservedAtUtc, string? materializationError)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable traffic-automation identifier.

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governed cell-route identifier that this automation answer applies to.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the governed route.

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source cell identifier.

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target cell identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing traffic-automation name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the traffic-automation posture.

`routingStrategy` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing routing strategy inherited from the governed route.

`governanceMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing governance posture inherited from the governed route.

`automationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized automation posture, such as <code>advisory</code> or <code>automatic</code>.

`triggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized trigger posture, such as <code>source-health</code> or <code>source-or-target-health</code>.

`actionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized action posture, such as <code>quarantine-route</code> or <code>shed-load</code>.

`materializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized materialization posture, such as <code>runtime-catalog-only</code>, <code>provider-managed</code>, or <code>edge-managed</code>.

`policySource` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source of the effective automation policy, such as <code>cell-default</code> or <code>cell-route</code>.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional transport identifiers inherited from the governed route.

`requiredCapabilityKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional capability key inherited from the governed route.

`sourceHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the source cell.

`targetHealthIsolationIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized health-isolation identifiers attached to the target cell.

`dependencyIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The normalized dependency identifiers observed across the related health-isolation answers.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original authored route metadata.

`runtimeMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional runtime-only metadata such as policy notes or overlay provenance.

`materializationConditions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>?

Optional typed provider-managed or edge-managed materialization conditions.

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional external provider or control-plane identifier that materializes this automation.

`edgeNodeIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional edge-node identifiers associated with this automation answer.

`edgeMaterializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional selected edge materializer identifier.

`edgeMaterializationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional edge-materialization state for this automation.

`edgeMaterializationObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the edge-materialization state was last observed.

`edgeMaterializationError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing edge-materialization error summary.

`providerMaterializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional selected provider materializer identifier.

`providerMaterializationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional provider-materialization state for this automation.

`providerMaterializationObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the provider-materialization state was last observed.

`providerMaterializationError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing provider-materialization error summary.

`materializationState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional overall materialization state derived from the selected provider and edge reconciliation posture.

`materializationObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when the overall materialization state was last observed.

`materializationError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing overall materialization error summary.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ActionMode"></a> ActionMode

Gets the normalized action posture.

```csharp
public string ActionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_AutomationMode"></a> AutomationMode

Gets the normalized automation posture.

```csharp
public string AutomationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_DependencyIds"></a> DependencyIds

Gets the normalized dependency identifiers observed across the related health-isolation answers.

```csharp
public IReadOnlyList<string> DependencyIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_Description"></a> Description

Gets the human-readable description of the traffic-automation posture.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing traffic-automation name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_EdgeMaterializationError"></a> EdgeMaterializationError

Gets the optional operator-facing edge-materialization error summary.

```csharp
public string? EdgeMaterializationError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_EdgeMaterializationObservedAtUtc"></a> EdgeMaterializationObservedAtUtc

Gets the optional UTC timestamp when the edge-materialization state was last observed.

```csharp
public DateTimeOffset? EdgeMaterializationObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_EdgeMaterializationState"></a> EdgeMaterializationState

Gets the optional edge-materialization state for this automation.

```csharp
public string? EdgeMaterializationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_EdgeMaterializerId"></a> EdgeMaterializerId

Gets the optional selected edge materializer identifier.

```csharp
public string? EdgeMaterializerId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_EdgeNodeIds"></a> EdgeNodeIds

Gets the optional edge-node identifiers associated with this automation answer.

```csharp
public IReadOnlyList<string> EdgeNodeIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_GovernanceMode"></a> GovernanceMode

Gets the governance posture inherited from the governed route.

```csharp
public string GovernanceMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_Id"></a> Id

Gets the stable traffic-automation identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_MaterializationConditions"></a> MaterializationConditions

Gets optional typed provider-managed or edge-managed materialization conditions captured for this automation.

```csharp
public IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor> MaterializationConditions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_MaterializationError"></a> MaterializationError

Gets the optional operator-facing overall materialization error summary.

```csharp
public string? MaterializationError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_MaterializationMode"></a> MaterializationMode

Gets the normalized materialization posture.

```csharp
public string MaterializationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_MaterializationObservedAtUtc"></a> MaterializationObservedAtUtc

Gets the optional UTC timestamp when the overall materialization state was last observed.

```csharp
public DateTimeOffset? MaterializationObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_MaterializationState"></a> MaterializationState

Gets the optional overall materialization state derived from the selected provider and edge reconciliation posture.

```csharp
public string? MaterializationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_Metadata"></a> Metadata

Gets the original authored route metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_PolicySource"></a> PolicySource

Gets the source of the effective automation policy.

```csharp
public string PolicySource { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ProviderId"></a> ProviderId

Gets the optional external provider or control-plane identifier that materializes this automation.

```csharp
public string? ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ProviderMaterializationError"></a> ProviderMaterializationError

Gets the optional operator-facing provider-materialization error summary.

```csharp
public string? ProviderMaterializationError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ProviderMaterializationObservedAtUtc"></a> ProviderMaterializationObservedAtUtc

Gets the optional UTC timestamp when the provider-materialization state was last observed.

```csharp
public DateTimeOffset? ProviderMaterializationObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ProviderMaterializationState"></a> ProviderMaterializationState

Gets the optional provider-materialization state for this automation.

```csharp
public string? ProviderMaterializationState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_ProviderMaterializerId"></a> ProviderMaterializerId

Gets the optional selected provider materializer identifier.

```csharp
public string? ProviderMaterializerId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_RequiredCapabilityKey"></a> RequiredCapabilityKey

Gets the optional capability key inherited from the governed route.

```csharp
public string? RequiredCapabilityKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_RouteId"></a> RouteId

Gets the governed cell-route identifier that this automation answer applies to.

```csharp
public string RouteId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_RoutingStrategy"></a> RoutingStrategy

Gets the routing strategy inherited from the governed route.

```csharp
public string RoutingStrategy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_RuntimeMetadata"></a> RuntimeMetadata

Gets runtime-only metadata such as policy notes or overlay provenance.

```csharp
public IReadOnlyDictionary<string, string> RuntimeMetadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_SourceCellId"></a> SourceCellId

Gets the source cell identifier.

```csharp
public string SourceCellId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_SourceHealthIsolationIds"></a> SourceHealthIsolationIds

Gets the normalized source-cell health-isolation identifiers.

```csharp
public IReadOnlyList<string> SourceHealthIsolationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns the governed route.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_TargetCellId"></a> TargetCellId

Gets the target cell identifier.

```csharp
public string TargetCellId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_TargetHealthIsolationIds"></a> TargetHealthIsolationIds

Gets the normalized target-cell health-isolation identifiers.

```csharp
public IReadOnlyList<string> TargetHealthIsolationIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_TransportIds"></a> TransportIds

Gets the normalized transport identifiers inherited from the governed route.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationRuntimeDescriptor_TriggerMode"></a> TriggerMode

Gets the normalized trigger posture.

```csharp
public string TriggerMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
