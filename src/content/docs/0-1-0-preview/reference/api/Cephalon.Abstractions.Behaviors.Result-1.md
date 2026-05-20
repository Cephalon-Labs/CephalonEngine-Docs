---
title: Class Result
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-result-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a concise transport-neutral behavior outcome with an optional payload value.

```csharp
public class Result<T> : IBehaviorResult
```

#### Type Parameters

`T` 

The payload type carried by the result.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Result<T\>](Cephalon.Abstractions.Behaviors.Result\-1.md)

#### Implements

[IBehaviorResult](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_Result_1__ctor_Cephalon_Abstractions_Behaviors_BehaviorResultStatus__0_System_Boolean_System_String_System_String_Cephalon_Abstractions_Behaviors_BehaviorFault_"></a> Result\(BehaviorResultStatus, T?, bool, string?, string?, BehaviorFault?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Behaviors.Result%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected Result(BehaviorResultStatus status, T? value, bool hasValue, string? message, string? code, BehaviorFault? fault)
```

#### Parameters

`status` [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)

The transport-neutral outcome status.

`value` T?

The optional payload value.

`hasValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the result carries a payload value.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The human-readable outcome message.

`code` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable outcome code.

`fault` [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

The structured fault details.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_Result_1_Code"></a> Code

Gets the stable outcome code when one was supplied.

```csharp
public string? Code { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_Result_1_Fault"></a> Fault

Gets the structured fault details when the outcome is not successful.

```csharp
public BehaviorFault? Fault { get; }
```

#### Property Value

 [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

### <a id="Cephalon_Abstractions_Behaviors_Result_1_HasValue"></a> HasValue

Gets a value indicating whether the result carries a payload value.

```csharp
public bool HasValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_Result_1_IsSuccess"></a> IsSuccess

Gets a value indicating whether the result represents a successful outcome.

```csharp
public bool IsSuccess { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_Result_1_Message"></a> Message

Gets the human-readable outcome message.

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_Result_1_Status"></a> Status

Gets the transport-neutral outcome status.

```csharp
public BehaviorResultStatus Status { get; }
```

#### Property Value

 [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)

### <a id="Cephalon_Abstractions_Behaviors_Result_1_Value"></a> Value

Gets the typed payload value when one was supplied.

```csharp
public T? Value { get; }
```

#### Property Value

 T?

## Methods

### <a id="Cephalon_Abstractions_Behaviors_Result_1_GetDefaultMessage_Cephalon_Abstractions_Behaviors_BehaviorResultStatus_"></a> GetDefaultMessage\(BehaviorResultStatus\)

Resolves the built-in default message for a behavior-result status.

```csharp
protected static string GetDefaultMessage(BehaviorResultStatus status)
```

#### Parameters

`status` [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)

The status whose default message should be returned.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The default message used when callers do not supply one explicitly.

## Operators

### <a id="Cephalon_Abstractions_Behaviors_Result_1_op_Implicit__0__Cephalon_Abstractions_Behaviors_Result__0_"></a> implicit operator Result<T\>\(T\)

Converts a raw payload value into a successful result.

```csharp
public static implicit operator Result<T>(T value)
```

#### Parameters

`value` T

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>

### <a id="Cephalon_Abstractions_Behaviors_Result_1_op_Implicit_Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor__Cephalon_Abstractions_Behaviors_Result__0_"></a> implicit operator Result<T\>\(BehaviorResultDescriptor\)

Converts a no-payload descriptor into a typed result.

```csharp
public static implicit operator Result<T>(BehaviorResultDescriptor descriptor)
```

#### Parameters

`descriptor` [BehaviorResultDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor/)

#### Returns

 [Result](Cephalon.Abstractions.Behaviors.Result\-1.md)<T\>
