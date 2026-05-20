---
title: Class Result
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-result
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Provides concise factory helpers for creating transport-neutral behavior results.

```csharp
public static class Result
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Result](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-result/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

Prefer this type for new behavior authoring code when the longer
<xref href="Cephalon.Abstractions.Behaviors.BehaviorResult" data-throw-if-not-resolved="false"></xref> naming does not add clarity.

## Methods

### <a id="Cephalon_Abstractions_Behaviors_Result_Accepted__1___0_System_String_System_String_"></a> Accepted<T\>\(T, string?, string?\)

Creates an accepted result with a payload value.

```csharp
public static Result<T> Accepted<T>(T value, string? message = null, string? code = null)
```

#### Parameters

`value` T

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Conflict_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Conflict\(string, string, BehaviorFault?\)

Creates a conflict result.

```csharp
public static BehaviorResultDescriptor Conflict(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_Conflict__1_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Conflict<T\>\(string, string, BehaviorFault?\)

Creates a conflict result for the specified payload type.

```csharp
public static Result<T> Conflict<T>(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Created__1___0_System_String_System_String_"></a> Created<T\>\(T, string?, string?\)

Creates a created result with a payload value.

```csharp
public static Result<T> Created<T>(T value, string? message = null, string? code = null)
```

#### Parameters

`value` T

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Forbidden_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Forbidden\(string, string, BehaviorFault?\)

Creates a forbidden result.

```csharp
public static BehaviorResultDescriptor Forbidden(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_Forbidden__1_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Forbidden<T\>\(string, string, BehaviorFault?\)

Creates a forbidden result for the specified payload type.

```csharp
public static Result<T> Forbidden<T>(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Invalid_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Invalid\(string, string, BehaviorFault?\)

Creates an invalid-request result.

```csharp
public static BehaviorResultDescriptor Invalid(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_Invalid__1_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Invalid<T\>\(string, string, BehaviorFault?\)

Creates an invalid-request result for the specified payload type.

```csharp
public static Result<T> Invalid<T>(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_NoContent_System_String_System_String_"></a> NoContent\(string?, string?\)

Creates a no-content result.

```csharp
public static BehaviorResultDescriptor NoContent(string? message = null, string? code = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_NoContent__1_System_String_System_String_"></a> NoContent<T\>\(string?, string?\)

Creates a no-content result for the specified payload type.

```csharp
public static Result<T> NoContent<T>(string? message = null, string? code = null)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_NotFound_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> NotFound\(string, string, BehaviorFault?\)

Creates a not-found result.

```csharp
public static BehaviorResultDescriptor NotFound(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_NotFound__1_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> NotFound<T\>\(string, string, BehaviorFault?\)

Creates a not-found result for the specified payload type.

```csharp
public static Result<T> NotFound<T>(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Ok__1___0_System_String_System_String_"></a> Ok<T\>\(T, string?, string?\)

Creates a successful result with a payload value.

```csharp
public static Result<T> Ok<T>(T value, string? message = null, string? code = null)
```

#### Parameters

`value` T

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T` 

### <a id="Cephalon_Abstractions_Behaviors_Result_Unauthorized_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Unauthorized\(string, string, BehaviorFault?\)

Creates an unauthorized result.

```csharp
public static BehaviorResultDescriptor Unauthorized(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

### <a id="Cephalon_Abstractions_Behaviors_Result_Unauthorized__1_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Unauthorized<T\>\(string, string, BehaviorFault?\)

Creates an unauthorized result for the specified payload type.

```csharp
public static Result<T> Unauthorized<T>(string code, string message, BehaviorFault? fault = null)
```

#### Parameters

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

#### Type Parameters

`T`
