---
title: Interface IBehaviorTypeRegistry
slug: 0-1-0-preview/reference/api/cephalon-behaviors-services-ibehaviortyperegistry
editUrl: false
---

Namespace: [Cephalon.Behaviors.Services](/0-1-0-preview/reference/api/cephalon-behaviors-services/)  
Assembly: Cephalon.Behaviors.dll  

Maps behavior identifiers to their concrete implementation types.
This registry is populated during DI setup and consumed by
<xref href="Cephalon.Behaviors.Services.BehaviorDispatcher" data-throw-if-not-resolved="false"></xref> at construction time to build its dispatch table.

```csharp
public interface IBehaviorTypeRegistry
```

## Methods

### <a id="Cephalon_Behaviors_Services_IBehaviorTypeRegistry_Register_System_String_System_Type_"></a> Register\(string, Type\)

Registers a mapping from <code class="paramref">behaviorId</code> to <code class="paramref">behaviorType</code>.

```csharp
void Register(string behaviorId, Type behaviorType)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The concrete behavior implementation type.

### <a id="Cephalon_Behaviors_Services_IBehaviorTypeRegistry_TryGetType_System_String_System_Type__"></a> TryGetType\(string, out Type?\)

Attempts to resolve the concrete behavior type for the given identifier.

```csharp
bool TryGetType(string behaviorId, out Type? behaviorType)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier to look up.

`behaviorType` [Type](https://learn.microsoft.com/dotnet/api/system.type)?

When this method returns <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, receives the concrete behavior type;
otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the identifier is registered; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
