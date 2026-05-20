---
title: Class ResultModel
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-resultmodel-1
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Transports.Rest](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest/)  
Assembly: Cephalon.AspNetCore.dll  

Represents the optional Cephalon REST success envelope projected by the ASP.NET Core adapter.

```csharp
public class ResultModel<TModel>
```

#### Type Parameters

`TModel` 

The payload type carried by the response.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ResultModel<TModel\>](Cephalon.AspNetCore.Transports.Rest.ResultModel\-1.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1__ctor"></a> ResultModel\(\)

Initializes a new instance of the <xref href="Cephalon.AspNetCore.Transports.Rest.ResultModel%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ResultModel()
```

## Properties

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Data"></a> Data

Gets or sets the payload returned by the endpoint.

```csharp
[JsonPropertyName("data")]
public TModel? Data { get; set; }
```

#### Property Value

 TModel?

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Errors"></a> Errors

Gets or sets the structured error details when the response is not successful.

```csharp
[JsonPropertyName("errors")]
public List<ResultModelErrorDetail>? Errors { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ResultModelErrorDetail](/0-1-0-preview/reference/api/cephalon-aspnetcore-transports-rest-resultmodelerrordetail/)\>?

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Message"></a> Message

Gets or sets the human-readable response message.

```csharp
[JsonPropertyName("message")]
public string Message { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_StatusCode"></a> StatusCode

Gets or sets the effective HTTP status code associated with the response.

```csharp
[JsonPropertyName("status")]
public int StatusCode { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Success"></a> Success

Gets or sets a value indicating whether the response is successful.

```csharp
[JsonPropertyName("success")]
public bool Success { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Title"></a> Title

Gets or sets the short response title.

```csharp
[JsonPropertyName("title")]
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Transports_Rest_ResultModel_1_Type"></a> Type

Gets or sets the optional problem type URI associated with the response.

```csharp
[JsonPropertyName("type")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public string? Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Success envelopes omit this value by default. Error envelopes derive the RFC problem type from
<xref href="Cephalon.AspNetCore.Transports.Rest.ResultModel%601.StatusCode" data-throw-if-not-resolved="false"></xref> unless a host or mapper supplies a more specific URI.
