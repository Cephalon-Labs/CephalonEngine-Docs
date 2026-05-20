---
title: Class IdGenerationRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-ids-idgenerationrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Ids](/0-1-0-preview/reference/api/cephalon-abstractions-ids/)  
Assembly: Cephalon.Abstractions.dll  

Describes optional hints supplied to an identifier generator.

```csharp
public sealed class IdGenerationRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IdGenerationRequest](/0-1-0-preview/reference/api/cephalon-abstractions-ids-idgenerationrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> IdGenerationRequest\(string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new identifier-generation request.

```csharp
public IdGenerationRequest(string? kind = null, string? scope = null, string? tenantId = null, IReadOnlyDictionary<string, string>? attributes = null)
```

#### Parameters

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The logical identifier kind or entity category when one is known.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The logical generation scope when one is known.

`tenantId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The tenant identifier associated with the requested identifier when one is known.

`attributes` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional generation hints supplied by the caller.

## Properties

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest_Attributes"></a> Attributes

Gets optional generation hints supplied by the caller.

```csharp
public IReadOnlyDictionary<string, string> Attributes { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest_HasValues"></a> HasValues

Gets a value indicating whether any generation hints were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest_Kind"></a> Kind

Gets the logical identifier kind or entity category when one is known.

```csharp
public string? Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest_Scope"></a> Scope

Gets the logical generation scope when one is known.

```csharp
public string? Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Ids_IdGenerationRequest_TenantId"></a> TenantId

Gets the tenant identifier associated with the requested identifier when one is known.

```csharp
public string? TenantId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
