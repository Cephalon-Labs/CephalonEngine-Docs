---
title: Class ResultModelErrorDetail
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-resultmodelerrordetail
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest/)  
Assembly: Cephalon.AspNetCore.dll  

Represents structured error details inside a <xref href="Cephalon.AspNetCore.Transports.Rest.ResultModel%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class ResultModelErrorDetail
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ResultModelErrorDetail](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-resultmodelerrordetail/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModelErrorDetail__ctor"></a> ResultModelErrorDetail\(\)

Initializes a new instance of the <xref href="Cephalon.AspNetCore.Transports.Rest.ResultModelErrorDetail" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ResultModelErrorDetail()
```

## Properties

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModelErrorDetail_Details"></a> Details

Gets or sets additional error details when one was supplied.

```csharp
[JsonPropertyName("details")]
public string? Details { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModelErrorDetail_Key"></a> Key

Gets or sets the stable error key.

```csharp
[JsonPropertyName("key")]
public string Key { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModelErrorDetail_Message"></a> Message

Gets or sets the human-readable error message.

```csharp
[JsonPropertyName("message")]
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModelErrorDetail_Severity"></a> Severity

Gets or sets the error severity.

```csharp
[JsonPropertyName("severity")]
[JsonConverter(typeof(JsonStringEnumConverter<BehaviorFaultSeverity>))]
public BehaviorFaultSeverity Severity { get; set; }
```

#### Property Value

 BehaviorFaultSeverity
