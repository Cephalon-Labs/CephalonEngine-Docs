---
title: Class RabbitMqTransportOptions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-rabbitmqtransportoptions
editUrl: false
---

Namespace: [Cephalon.Behaviors.Messaging.Options](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options/)  
Assembly: Cephalon.Behaviors.Messaging.dll  

Configuration options for the RabbitMQ messaging transport binding.

```csharp
public sealed class RabbitMqTransportOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RabbitMqTransportOptions](/0-1-0-preview/reference/api/cephalon-behaviors-messaging-options-rabbitmqtransportoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_DeadLetterExchange"></a> DeadLetterExchange

Gets or sets the dead-letter exchange name for messages that exceed max retry attempts.
When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, dead-lettering is disabled.

```csharp
public string? DeadLetterExchange { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_ExchangeName"></a> ExchangeName

Gets or sets the exchange name. When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, uses the default exchange.

```csharp
public string? ExchangeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_HostName"></a> HostName

Gets or sets the RabbitMQ broker hostname. Default: <code>"localhost"</code>.

```csharp
public string HostName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_MaxRetryAttempts"></a> MaxRetryAttempts

Gets or sets the maximum number of delivery attempts before a message is nacked without requeue.
Default: <code>3</code>.

```csharp
public int MaxRetryAttempts { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_Password"></a> Password

Gets or sets the RabbitMQ password. Default: <code>"guest"</code>.

```csharp
public string Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_Port"></a> Port

Gets or sets the RabbitMQ broker port. Default: <code>5672</code>.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_QueueName"></a> QueueName

Gets or sets the queue name. When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>, defaults to the behavior id.

```csharp
public string? QueueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_RetryDelayMs"></a> RetryDelayMs

Gets or sets the delay in milliseconds between retry attempts. Default: <code>1000</code>.

```csharp
public int RetryDelayMs { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_UserName"></a> UserName

Gets or sets the RabbitMQ user name. Default: <code>"guest"</code>.

```csharp
public string UserName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Messaging_Options_RabbitMqTransportOptions_VirtualHost"></a> VirtualHost

Gets or sets the RabbitMQ virtual host. Default: <code>"/"</code>.

```csharp
public string VirtualHost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
