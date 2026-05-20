---
title: Interface IBehaviorResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-ibehaviorresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Describes a structured behavior outcome that can be projected into transport-specific responses.

```csharp
public interface IBehaviorResult
```

## Properties

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_Code"></a> Code

Gets the stable outcome code when one was supplied.

```csharp
string? Code { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_Fault"></a> Fault

Gets the structured fault details when the outcome is not successful.

```csharp
BehaviorFault? Fault { get; }
```

#### Property Value

 [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_HasValue"></a> HasValue

Gets a value indicating whether the result carries a payload value.

```csharp
bool HasValue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_IsSuccess"></a> IsSuccess

Gets a value indicating whether the result represents a successful outcome.

```csharp
bool IsSuccess { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_Message"></a> Message

Gets the human-readable outcome message.

```csharp
string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_Status"></a> Status

Gets the transport-neutral outcome status.

```csharp
BehaviorResultStatus Status { get; }
```

#### Property Value

 [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)

### <a id="Cephalon_Abstractions_Behaviors_IBehaviorResult_Value"></a> Value

Gets the boxed payload value when one was supplied.

```csharp
object? Value { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?
