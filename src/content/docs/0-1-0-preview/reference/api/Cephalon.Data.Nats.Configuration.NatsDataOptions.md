---
title: Class NatsDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-nats-configuration-natsdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Nats.Configuration](/0-1-0-preview/reference/api/cephalon-data-nats-configuration/)  
Assembly: Cephalon.Data.Nats.dll  

Options controlling how <code>Cephalon.Data.Nats</code> connects to a NATS server and registers data services.

```csharp
public sealed class NatsDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsDataOptions](/0-1-0-preview/reference/api/cephalon-data-nats-configuration-natsdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_DefaultUri"></a> DefaultUri

The default NATS server URI used when neither URI setting is supplied.

```csharp
public const string DefaultUri = "nats://localhost:4222"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_ProviderId"></a> ProviderId

The provider identifier used in capability and descriptor metadata.

```csharp
public const string ProviderId = "nats"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_SectionPath"></a> SectionPath

The configuration section path used by default for NATS data settings.

```csharp
public const string SectionPath = "Engine:Data:Nats"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_BucketPrefix"></a> BucketPrefix

Prefix applied to all managed JetStream KV bucket names. Defaults to <code>cephalon</code>.

```csharp
public string BucketPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_RegisterInbox"></a> RegisterInbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IInbox" data-throw-if-not-resolved="false"></xref> backed by a NATS JetStream KV bucket.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_RegisterOutbox"></a> RegisterOutbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IOutbox" data-throw-if-not-resolved="false"></xref> backed by a NATS JetStream KV bucket.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_Uri"></a> Uri

The inline NATS server URI. Defaults to <code>nats://localhost:4222</code> when left unset.

```csharp
public string? Uri { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.Uri" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.UriName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Nats_Configuration_NatsDataOptions_UriName"></a> UriName

The root <code>Uris</code> entry name to resolve for NATS.

```csharp
public string? UriName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Nats.Configuration.NatsDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.
