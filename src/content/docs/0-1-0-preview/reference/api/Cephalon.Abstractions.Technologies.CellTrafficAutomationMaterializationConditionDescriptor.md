---
title: Class CellTrafficAutomationMaterializationConditionDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one typed provider-managed or edge-managed materialization condition for a cell traffic automation answer.

```csharp
public sealed class CellTrafficAutomationMaterializationConditionDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CellTrafficAutomationMaterializationConditionDescriptor\(string, string, string, string, string, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a typed cell traffic automation materialization condition descriptor.

```csharp
public CellTrafficAutomationMaterializationConditionDescriptor(string dimension, string category, string conditionId, string state, string severity, string? reason = null, string? description = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`dimension` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable materialization dimension, such as <code>provider</code> or <code>edge</code>.

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable condition category, such as <code>readiness</code>, <code>dependency</code>, or <code>ownership</code>.

`conditionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-facing or edge-facing condition identifier inside the selected category, such as
<code>gateway-accepted</code>, <code>ingress-route-present</code>, or <code>ownership</code>.

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable condition state, such as <code>met</code>, <code>unmet</code>, <code>pending</code>, or <code>unknown</code>.

`severity` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing severity for the current condition answer, such as <code>info</code>, <code>warning</code>, or
<code>error</code>.

`reason` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable reason identifier that explains why the current condition state was selected.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing condition summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional provider-facing or edge-facing condition metadata.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Category"></a> Category

Gets the stable condition category.

```csharp
public string Category { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_ConditionId"></a> ConditionId

Gets the stable provider-facing or edge-facing condition identifier.

```csharp
public string ConditionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Description"></a> Description

Gets the optional operator-facing condition summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Dimension"></a> Dimension

Gets the stable materialization dimension that produced the condition.

```csharp
public string Dimension { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Metadata"></a> Metadata

Gets optional provider-facing or edge-facing condition metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Reason"></a> Reason

Gets the stable reason identifier that explains why the current condition state was selected.

```csharp
public string? Reason { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_Severity"></a> Severity

Gets the operator-facing severity for the current condition answer.

```csharp
public string Severity { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor_State"></a> State

Gets the stable condition state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
