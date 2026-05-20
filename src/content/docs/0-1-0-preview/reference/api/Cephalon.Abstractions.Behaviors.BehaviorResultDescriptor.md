---
title: Struct BehaviorResultDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultdescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Represents a transport-neutral behavior outcome descriptor that does not carry a payload value.

```csharp
public readonly record struct BehaviorResultDescriptor : IEquatable<BehaviorResultDescriptor>
```

#### Implements

[IEquatable<BehaviorResultDescriptor\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor_Code"></a> Code

Gets the stable outcome code when one was supplied.

```csharp
public string? Code { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor_Fault"></a> Fault

Gets the structured fault details when the outcome is not successful.

```csharp
public BehaviorFault? Fault { get; }
```

#### Property Value

 [BehaviorFault](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorfault/)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor_Message"></a> Message

Gets the human-readable outcome message.

```csharp
public string? Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Behaviors_BehaviorResultDescriptor_Status"></a> Status

Gets the transport-neutral outcome status.

```csharp
public BehaviorResultStatus Status { get; }
```

#### Property Value

 [BehaviorResultStatus](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorresultstatus/)
