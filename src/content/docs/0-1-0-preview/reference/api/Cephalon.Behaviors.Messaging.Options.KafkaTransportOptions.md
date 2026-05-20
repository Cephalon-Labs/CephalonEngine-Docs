---
title: Class KafkaTransportOptions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-kafkatransportoptions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Options](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Configuration options for the Kafka messaging transport binding.

```csharp
public sealed class KafkaTransportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KafkaTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-kafkatransportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_AutoOffsetReset"></a> AutoOffsetReset

Gets or sets the auto offset reset policy applied when no committed offset exists.
Default: <xref href="Confluent.Kafka.AutoOffsetReset.Earliest" data-throw-if-not-resolved="false"></xref>.

```csharp
public AutoOffsetReset AutoOffsetReset { get; set; }
```

#### Property Value

 AutoOffsetReset

### <a id="Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_BootstrapServers"></a> BootstrapServers

Gets or sets the Kafka bootstrap servers (comma-separated host:port pairs).
Default: <code>"localhost:9092"</code>.

```csharp
public string BootstrapServers { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_EnableAutoCommit"></a> EnableAutoCommit

Gets or sets a value indicating whether Kafka auto-commit is enabled.
Default: <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> — offsets are committed manually after successful dispatch.

```csharp
public bool EnableAutoCommit { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_GroupId"></a> GroupId

Gets or sets the consumer group id. Default: <code>"cephalon-behaviors"</code>.

```csharp
public string GroupId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Messaging_Options_KafkaTransportOptions_Topic"></a> Topic

Gets or sets the Kafka topic to subscribe to.
When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, defaults to the behavior id.

```csharp
public string? Topic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
