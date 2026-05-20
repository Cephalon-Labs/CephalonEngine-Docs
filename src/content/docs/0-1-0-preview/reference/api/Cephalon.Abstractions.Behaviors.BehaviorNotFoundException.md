---
title: Class BehaviorNotFoundException
slug: 0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviornotfoundexception
editUrl: false
---

Namespace: [Cephalon.Abstractions.Behaviors](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors/)  
Assembly: Cephalon.Abstractions.dll  

Thrown when a behavior cannot be located in the active runtime's behavior catalog.

```csharp
public sealed class BehaviorNotFoundException : Exception, ISerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[BehaviorNotFoundException](/0-1-0-preview/reference/api/cephalon-abstractions-behaviors-behaviornotfoundexception/)

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

### <a id="Cephalon_Abstractions_Behaviors_BehaviorNotFoundException__ctor_System_String_"></a> BehaviorNotFoundException\(string\)

Initializes the exception for the given behavior identifier.

```csharp
public BehaviorNotFoundException(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior identifier that could not be resolved.

### <a id="Cephalon_Abstractions_Behaviors_BehaviorNotFoundException__ctor_System_String_System_Exception_"></a> BehaviorNotFoundException\(string, Exception\)

Initializes the exception for the given behavior identifier with an inner exception.

```csharp
public BehaviorNotFoundException(string behaviorId, Exception innerException)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The behavior identifier that could not be resolved.

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception that caused this exception.

## Properties

### <a id="Cephalon_Abstractions_Behaviors_BehaviorNotFoundException_BehaviorId"></a> BehaviorId

Gets the behavior identifier that could not be resolved.

```csharp
public string BehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
