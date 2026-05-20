---
title: Class TimeoutSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven timeout settings for a Cephalon app.

```csharp
public sealed class TimeoutSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_TimeoutSettings__ctor_System_Nullable_System_Boolean__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> TimeoutSettings\(bool?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.TimeoutSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TimeoutSettings(bool? enabled = null, int? totalTimeoutSeconds = null, int? attemptTimeoutSeconds = null)
```

#### Parameters

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

Whether timeout support was explicitly enabled.

`totalTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The overall timeout in seconds requested for an execution.

`attemptTimeoutSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The per-attempt timeout in seconds requested for an execution.

## Properties

### <a id="Cephalon_Engine_Configuration_TimeoutSettings_AttemptTimeoutSeconds"></a> AttemptTimeoutSeconds

Gets the per-attempt timeout in seconds requested for an execution.

```csharp
public int? AttemptTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_TimeoutSettings_Empty"></a> Empty

Gets an empty timeout-settings instance.

```csharp
public static TimeoutSettings Empty { get; }
```

#### Property Value

 [TimeoutSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-timeoutsettings/)

### <a id="Cephalon_Engine_Configuration_TimeoutSettings_Enabled"></a> Enabled

Gets a value indicating whether timeout support was explicitly enabled.

```csharp
public bool? Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Engine_Configuration_TimeoutSettings_HasValues"></a> HasValues

Gets a value indicating whether any timeout settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_TimeoutSettings_TotalTimeoutSeconds"></a> TotalTimeoutSeconds

Gets the overall timeout in seconds requested for an execution.

```csharp
public int? TotalTimeoutSeconds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?
