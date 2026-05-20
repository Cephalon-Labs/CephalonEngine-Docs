---
title: Class HttpRequestResponseLoggingOptions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-httprequestresponseloggingoptions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Configures opt-in HTTP request and response logging for Cephalon ASP.NET Core hosts.

```csharp
public sealed class HttpRequestResponseLoggingOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HttpRequestResponseLoggingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-httprequestresponseloggingoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These settings are read from <code>Engine:Observability:HttpLogging</code> by default. Request and
response bodies are captured only for textual content types such as JSON, XML, GraphQL, form
payloads, and <code>text/*</code> responses, and body capture is truncated to the configured limits.
Sensitive query-string and payload fields can also be redacted before the log event is written,
including JSON, form, and header-style plain-text key/value content.

## Constructors

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions__ctor"></a> HttpRequestResponseLoggingOptions\(\)

Creates request and response logging options with body capture disabled by default.

```csharp
public HttpRequestResponseLoggingOptions()
```

## Properties

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_Enabled"></a> Enabled

Gets or sets a value indicating whether the ASP.NET Core host should log request and response summaries.

```csharp
public bool Enabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_LogRequestBody"></a> LogRequestBody

Gets or sets a value indicating whether textual request bodies should be logged.

```csharp
public bool LogRequestBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_LogResponseBody"></a> LogResponseBody

Gets or sets a value indicating whether textual response bodies should be logged.

```csharp
public bool LogResponseBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_RedactSensitiveValues"></a> RedactSensitiveValues

Gets or sets a value indicating whether known-sensitive query-string and payload fields should be redacted before logging.

```csharp
public bool RedactSensitiveValues { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_RedactedFieldNames"></a> RedactedFieldNames

Gets or sets the field names that should be treated as sensitive when request and response content is logged.

```csharp
public IReadOnlyList<string> RedactedFieldNames { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_RedactionValue"></a> RedactionValue

Gets or sets the placeholder written to logs when a sensitive value is redacted.

```csharp
public string RedactionValue { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_RequestBodyLimit"></a> RequestBodyLimit

Gets or sets the maximum number of request-body characters to log before the payload is truncated.

```csharp
public int RequestBodyLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_ResponseBodyLimit"></a> ResponseBodyLimit

Gets or sets the maximum number of response-body characters to log before the payload is truncated.

```csharp
public int ResponseBodyLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_HttpRequestResponseLoggingOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds request and response logging options from configuration.

```csharp
public static HttpRequestResponseLoggingOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [HttpRequestResponseLoggingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-httprequestresponseloggingoptions/)

The bound request and response logging options.
