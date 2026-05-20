---
title: Class BackendForFrontendClientBindingDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes one client-specific transport binding owned by a Cephalon module.

```csharp
public sealed class BackendForFrontendClientBindingDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BackendForFrontendClientBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendclientbindingdescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_BackendForFrontendBehaviorFilterDescriptor_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> BackendForFrontendClientBindingDescriptor\(string, string, string, string, string, string, string?, BackendForFrontendBehaviorFilterDescriptor?, IReadOnlyDictionary<string, string\>?\)

Creates a backend-for-frontend client binding descriptor.

```csharp
public BackendForFrontendClientBindingDescriptor(string id, string clientId, string sourceModuleId, string displayName, string description, string transportId, string? entryPoint = null, BackendForFrontendBehaviorFilterDescriptor? behaviorFilter = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable binding identifier.

`clientId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable client identifier, such as <code>mobile</code> or <code>storefront</code>.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns this binding.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing binding name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the client-specific surface.

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The transport identifier used by this client surface.

`entryPoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The transport-specific entry point, route prefix, or endpoint handle when one is known.

`behaviorFilter` [BackendForFrontendBehaviorFilterDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor/)?

The behavior, capability, and tag-selection hints attached to this client binding.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional binding metadata.

## Properties

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_BehaviorFilter"></a> BehaviorFilter

Gets the behavior, capability, and tag-selection hints attached to this client binding.

```csharp
public BackendForFrontendBehaviorFilterDescriptor BehaviorFilter { get; }
```

#### Property Value

 [BackendForFrontendBehaviorFilterDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-backendforfrontendbehaviorfilterdescriptor/)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_ClientId"></a> ClientId

Gets the stable client identifier.

```csharp
public string ClientId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_Description"></a> Description

Gets the human-readable description of the client-specific surface.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing binding name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_EntryPoint"></a> EntryPoint

Gets the transport-specific entry point, route prefix, or endpoint handle when one is known.

```csharp
public string? EntryPoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_Id"></a> Id

Gets the stable binding identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_Metadata"></a> Metadata

Gets optional binding metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns this client-specific binding.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_BackendForFrontendClientBindingDescriptor_TransportId"></a> TransportId

Gets the transport identifier used by this client-specific surface.

```csharp
public string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
