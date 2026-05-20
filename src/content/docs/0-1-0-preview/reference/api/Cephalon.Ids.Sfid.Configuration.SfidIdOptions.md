---
title: Class SfidIdOptions
slug: 0-1-0-preview/reference/api/cephalon-ids-sfid-configuration-sfididoptions
editUrl: false
---

Namespace: [Cephalon.Ids.Sfid.Configuration](/0-1-0-preview/reference/api/cephalon-ids-sfid-configuration/)  
Assembly: Cephalon.Ids.Sfid.dll  

Describes the host-owned configuration used to bootstrap the official <code>Sfid.Net</code> generator.

```csharp
public sealed class SfidIdOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SfidIdOptions](/0-1-0-preview/reference/api/cephalon-ids-sfid-configuration-sfididoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions__ctor_System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__System_Nullable_System_Int32__"></a> SfidIdOptions\(int?, int?, int?, int?\)

Initializes a new instance of the <xref href="Cephalon.Ids.Sfid.Configuration.SfidIdOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SfidIdOptions(int? datacenterId = null, int? workerId = null, int? workerCapacity = null, int? clockRegressionToleranceMilliseconds = null)
```

#### Parameters

`datacenterId` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The datacenter identifier supplied to the generator.

`workerId` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The worker identifier supplied to the generator.

`workerCapacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional worker-capacity override supplied to the generator.

`clockRegressionToleranceMilliseconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional clock-regression tolerance, in milliseconds, supplied to the generator.

## Fields

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_DefaultSectionPath"></a> DefaultSectionPath

Gets the default configuration path used by the Sfid id-strategy pack.

```csharp
public const string DefaultSectionPath = "Engine:Data:Ids:Sfid"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_ClockRegressionToleranceMilliseconds"></a> ClockRegressionToleranceMilliseconds

Gets the optional clock-regression tolerance, in milliseconds, supplied to the generator.

```csharp
public int? ClockRegressionToleranceMilliseconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_DatacenterId"></a> DatacenterId

Gets the datacenter identifier supplied to the generator.

```csharp
public int? DatacenterId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_Empty"></a> Empty

Gets an empty options instance.

```csharp
public static SfidIdOptions Empty { get; }
```

#### Property Value

 [SfidIdOptions](/0-1-0-preview/reference/api/cephalon-ids-sfid-configuration-sfididoptions/)

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_HasValues"></a> HasValues

Gets a value indicating whether any explicit Sfid-generator inputs were supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_WorkerCapacity"></a> WorkerCapacity

Gets the optional worker-capacity override supplied to the generator.

```csharp
public int? WorkerCapacity { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_WorkerId"></a> WorkerId

Gets the worker identifier supplied to the generator.

```csharp
public int? WorkerId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Methods

### <a id="Cephalon_Ids_Sfid_Configuration_SfidIdOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration?, string\)

Reads Sfid id-strategy options from configuration.

```csharp
public static SfidIdOptions FromConfiguration(IConfiguration? configuration, string sectionPath = "Engine:Data:Ids:Sfid")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)?

The configuration root to read.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration path that contains the Sfid id-strategy settings. The default is <code>Engine:Data:Ids:Sfid</code>.

#### Returns

 [SfidIdOptions](/0-1-0-preview/reference/api/cephalon-ids-sfid-configuration-sfididoptions/)

The parsed options.
