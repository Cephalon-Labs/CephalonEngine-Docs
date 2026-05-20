---
title: Class BehaviorSecurityException
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorsecurityexception
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Thrown when a behavior's resolved topology violates an allowlist constraint
declared via <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedPatternsAttribute" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Abstractions.Behaviors.BehaviorAllowedTransportsAttribute" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class BehaviorSecurityException : Exception, ISerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[BehaviorSecurityException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviorsecurityexception/)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException\(\)](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), 
[Exception.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.exception.gettype), 
[Exception.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.exception.tostring), 
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), 
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), 
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), 
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), 
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), 
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), 
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), 
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Behaviors_BehaviorSecurityException__ctor_System_String_System_String_"></a> BehaviorSecurityException\(string, string\)

Initializes the exception with the behavior identifier and a descriptive message.

```csharp
public BehaviorSecurityException(string behaviorId, string message)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior identifier that triggered the violation.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the security violation.

### <a id="Cephalon_Abstractions_Behaviors_BehaviorSecurityException__ctor_System_String_System_String_System_Exception_"></a> BehaviorSecurityException\(string, string, Exception\)

Initializes the exception with the behavior identifier, a descriptive message, and an inner exception.

```csharp
public BehaviorSecurityException(string behaviorId, string message, Exception innerException)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior identifier that triggered the violation.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the security violation.

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception that caused this exception.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorSecurityException_BehaviorId"></a> BehaviorId

Gets the behavior identifier that triggered the security violation.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
