---
title: Class Neo4jDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-neo4j-configuration-neo4jdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Neo4j.Configuration](/0-1-0-preview/reference/api/cephalon-data-neo4j-configuration/)  
Assembly: Cephalon.Data.Neo4j.dll  

Options controlling how <code>Cephalon.Data.Neo4j</code> connects to Neo4j and registers data services.

```csharp
public sealed class Neo4jDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jDataOptions](/0-1-0-preview/reference/api/cephalon-data-neo4j-configuration-neo4jdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_DefaultUri"></a> DefaultUri

The default Neo4j Bolt URI used when neither URI setting is supplied.

```csharp
public const string DefaultUri = "bolt://localhost:7687"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_ProviderId"></a> ProviderId

The provider identifier used in capability and descriptor metadata.

```csharp
public const string ProviderId = "neo4j"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_SectionPath"></a> SectionPath

The configuration section path used by default for Neo4j data settings.

```csharp
public const string SectionPath = "Engine:Data:Neo4j"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_LabelPrefix"></a> LabelPrefix

Optional label prefix applied to all managed node labels (e.g. <code>"cephalon_"</code>).

```csharp
public string LabelPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_Password"></a> Password

Neo4j password.

```csharp
public string Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_RegisterInbox"></a> RegisterInbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IInbox" data-throw-if-not-resolved="false"></xref> backed by Neo4j <code>:InboxReceipt</code> nodes.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_RegisterOutbox"></a> RegisterOutbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IOutbox" data-throw-if-not-resolved="false"></xref> backed by Neo4j <code>:OutboxMessage</code> nodes.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_Uri"></a> Uri

The inline Neo4j Bolt URI (e.g. <code>bolt://localhost:7687</code>).

```csharp
public string? Uri { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Uri" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.UriName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_UriName"></a> UriName

The root <code>Uris</code> entry name to resolve for Neo4j.

```csharp
public string? UriName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Neo4j.Configuration.Neo4jDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Neo4j_Configuration_Neo4jDataOptions_Username"></a> Username

Neo4j username.

```csharp
public string Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
