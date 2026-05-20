---
title: Class AuditActor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-audit-auditactor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Audit](/0-1-0-preview/reference/api/cephalon-abstractions-audit/)  
Assembly: Cephalon.Abstractions.dll  

Describes the actor responsible for one audited operation.

```csharp
public sealed class AuditActor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AuditActor](/0-1-0-preview/reference/api/cephalon-abstractions-audit-auditactor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Audit_AuditActor__ctor_System_String_System_String_System_String_System_Boolean_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AuditActor\(string, string?, string?, bool, IReadOnlyDictionary<string, string\>?\)

Creates a new audit actor.

```csharp
public AuditActor(string actorId, string? displayName = null, string? actorType = null, bool isSystem = false, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable actor identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable actor name when one is known.

`actorType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The logical actor type such as <code>user</code>, <code>service</code>, or <code>system</code>.

`isSystem` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the actor represents system-owned automation.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional actor attributes.

## Properties

### <a id="Cephalon_Abstractions_Audit_AuditActor_ActorId"></a> ActorId

Gets the stable actor identifier.

```csharp
public string ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Audit_AuditActor_ActorType"></a> ActorType

Gets the logical actor type when one is known.

```csharp
public string? ActorType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditActor_Attributes"></a> Attributes

Gets the actor attributes.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Audit_AuditActor_DisplayName"></a> DisplayName

Gets the human-readable actor name when one is known.

```csharp
public string? DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Audit_AuditActor_IsSystem"></a> IsSystem

Gets a value indicating whether the actor represents system-owned automation.

```csharp
public bool IsSystem { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
