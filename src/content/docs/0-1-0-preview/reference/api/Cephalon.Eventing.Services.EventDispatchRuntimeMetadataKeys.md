---
title: Class EventDispatchRuntimeMetadataKeys
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchruntimemetadatakeys
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Defines stable metadata keys used by event-dispatch runtime observations.

```csharp
public static class EventDispatchRuntimeMetadataKeys
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchRuntimeMetadataKeys](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchruntimemetadatakeys/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These keys appear in dispatch runtime reports and the derived event-dispatch runtime surfaces
so operators and dispatch stores can distinguish retryable failures from terminal failures
without parsing provider-specific metadata.

## Fields

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_NextRetryAtUtc"></a> NextRetryAtUtc

Identifies the next UTC time when a retryable dispatch failure should become eligible again.

```csharp
public const string NextRetryAtUtc = "nextRetryAtUtc"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryDelaySeconds"></a> RetryDelaySeconds

Identifies the retry delay in seconds when the active dispatch runtime uses a delayed retry policy.

```csharp
public const string RetryDelaySeconds = "retryDelaySeconds"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryDurability"></a> RetryDurability

Identifies where retry eligibility is persisted.

```csharp
public const string RetryDurability = "retryDurability"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryExhausted"></a> RetryExhausted

Identifies whether the retry budget was exhausted for the latest observation.

```csharp
public const string RetryExhausted = "retryExhausted"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryMaxAttempts"></a> RetryMaxAttempts

Identifies the maximum number of dispatch attempts allowed for one staged message.

```csharp
public const string RetryMaxAttempts = "retryMaxAttempts"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryOutcome"></a> RetryOutcome

Identifies the retry decision represented by the latest observation.

```csharp
public const string RetryOutcome = "retryOutcome"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryPolicy"></a> RetryPolicy

Identifies the retry policy applied by the active dispatch runtime.

```csharp
public const string RetryPolicy = "retryPolicy"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_RetryScope"></a> RetryScope

Identifies who owns the retry policy.

```csharp
public const string RetryScope = "retryScope"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_TerminalFailure"></a> TerminalFailure

Identifies whether the latest failure should stop re-entering pending-dispatch reads.

```csharp
public const string TerminalFailure = "terminalFailure"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Eventing_Services_EventDispatchRuntimeMetadataKeys_IsTerminalFailure_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> IsTerminalFailure\(IReadOnlyDictionary<string, string\>\)

Gets a value indicating whether the supplied metadata describes a terminal failure.

```csharp
public static bool IsTerminalFailure(IReadOnlyDictionary<string, string> metadata)
```

#### Parameters

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The dispatch observation metadata to inspect.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when either <xref href="Cephalon.Eventing.Services.EventDispatchRuntimeMetadataKeys.TerminalFailure" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Eventing.Services.EventDispatchRuntimeMetadataKeys.RetryExhausted" data-throw-if-not-resolved="false"></xref> is set to <code>true</code>; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
