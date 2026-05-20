---
title: Class CellTrafficAutomationMaterializationResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one materialization result for a cell traffic automation answer.

```csharp
public class CellTrafficAutomationMaterializationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult/)

#### Derived

[CellTrafficAutomationProviderMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult__ctor_System_String_System_DateTimeOffset_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__"></a> CellTrafficAutomationMaterializationResult\(string, DateTimeOffset, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor\>?\)

Creates a materialization result.

```csharp
public CellTrafficAutomationMaterializationResult(string state, DateTimeOffset observedAtUtc, string? error = null, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor>? conditions = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable materialization state, such as <code>applied</code> or <code>failed</code>.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the result was observed.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when the materialization failed.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional runtime-facing metadata captured alongside the result.

`conditions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>?

Optional typed materialization conditions captured alongside the result.

## Properties

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_Conditions"></a> Conditions

Gets optional typed materialization conditions captured alongside the result.

```csharp
public IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor> Conditions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_Error"></a> Error

Gets the operator-facing error summary when the materialization failed.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_Metadata"></a> Metadata

Gets optional runtime-facing metadata captured alongside the result.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the result was observed.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_State"></a> State

Gets the stable materialization state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
