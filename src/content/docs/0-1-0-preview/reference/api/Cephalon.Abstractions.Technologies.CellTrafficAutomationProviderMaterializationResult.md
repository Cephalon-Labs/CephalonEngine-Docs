---
title: Class CellTrafficAutomationProviderMaterializationResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one provider-managed materialization result for a cell traffic automation answer.

```csharp
public sealed class CellTrafficAutomationProviderMaterializationResult : CellTrafficAutomationMaterializationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult/) ← 
[CellTrafficAutomationProviderMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult/)

#### Inherited Members

[CellTrafficAutomationMaterializationResult.State](Cephalon.Abstractions.Technologies.CellTrafficAutomationMaterializationResult.md\#Cephalon\_Abstractions\_Technologies\_CellTrafficAutomationMaterializationResult\_State), 
[CellTrafficAutomationMaterializationResult.ObservedAtUtc](Cephalon.Abstractions.Technologies.CellTrafficAutomationMaterializationResult.md\#Cephalon\_Abstractions\_Technologies\_CellTrafficAutomationMaterializationResult\_ObservedAtUtc), 
[CellTrafficAutomationMaterializationResult.Error](Cephalon.Abstractions.Technologies.CellTrafficAutomationMaterializationResult.md\#Cephalon\_Abstractions\_Technologies\_CellTrafficAutomationMaterializationResult\_Error), 
[CellTrafficAutomationMaterializationResult.Metadata](Cephalon.Abstractions.Technologies.CellTrafficAutomationMaterializationResult.md\#Cephalon\_Abstractions\_Technologies\_CellTrafficAutomationMaterializationResult\_Metadata), 
[CellTrafficAutomationMaterializationResult.Conditions](Cephalon.Abstractions.Technologies.CellTrafficAutomationMaterializationResult.md\#Cephalon\_Abstractions\_Technologies\_CellTrafficAutomationMaterializationResult\_Conditions), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationResult__ctor_System_String_System_DateTimeOffset_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationConditionDescriptor__"></a> CellTrafficAutomationProviderMaterializationResult\(string, DateTimeOffset, string?, IReadOnlyDictionary<string, string\>?, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor\>?\)

Creates a provider-managed materialization result.

```csharp
public CellTrafficAutomationProviderMaterializationResult(string state, DateTimeOffset observedAtUtc, string? error = null, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyList<CellTrafficAutomationMaterializationConditionDescriptor>? conditions = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider-materialization state, such as <code>applied</code> or <code>failed</code>.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the result was observed.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when the materialization failed.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional provider-facing metadata captured alongside the result.

`conditions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)\>?

Optional typed provider-materialization conditions captured alongside the result.
