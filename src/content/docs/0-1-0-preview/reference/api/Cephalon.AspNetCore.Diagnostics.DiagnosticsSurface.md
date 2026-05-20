---
title: Class DiagnosticsSurface
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-diagnostics-diagnosticssurface
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Diagnostics](/0-1-0-preview/reference/api/cephalon-aspnetcore-diagnostics/)  
Assembly: Cephalon.AspNetCore.dll  

Describes the operator-facing diagnostics surface exposed by a Cephalon ASP.NET Core host.

```csharp
public sealed record DiagnosticsSurface : IEquatable<DiagnosticsSurface>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DiagnosticsSurface](/0-1-0-preview/reference/api/cephalon-aspnetcore-diagnostics-diagnosticssurface/)

#### Implements

[IEquatable<DiagnosticsSurface\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface__ctor_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Diagnostics_DiagnosticsConvention__Cephalon_Engine_Runtime_RuntimeHealthReport_Cephalon_Engine_Runtime_RuntimeHealthReport_System_String_System_String_System_String_"></a> DiagnosticsSurface\(string, string, IReadOnlyList<string\>, IReadOnlyList<DiagnosticsConvention\>, RuntimeHealthReport, RuntimeHealthReport, string, string, string\)

Describes the operator-facing diagnostics surface exposed by a Cephalon ASP.NET Core host.

```csharp
public DiagnosticsSurface(string MeterName, string ActivitySourceName, IReadOnlyList<string> Counters, IReadOnlyList<DiagnosticsConvention> Conventions, RuntimeHealthReport Liveness, RuntimeHealthReport Readiness, string SummaryPath, string LivenessPath, string ReadinessPath)
```

#### Parameters

`MeterName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The meter name used for engine metrics.

`ActivitySourceName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The activity source name used for engine tracing.

`Counters` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The built-in counter names exposed by the engine.

`Conventions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DiagnosticsConvention\>

The published diagnostics conventions and event-id catalogs visible to the current host.

`Liveness` RuntimeHealthReport

The current liveness report.

`Readiness` RuntimeHealthReport

The current readiness report.

`SummaryPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The aggregate health endpoint path.

`LivenessPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The liveness endpoint path.

`ReadinessPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The readiness endpoint path.

## Properties

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_ActivitySourceName"></a> ActivitySourceName

The activity source name used for engine tracing.

```csharp
public string ActivitySourceName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_Conventions"></a> Conventions

The published diagnostics conventions and event-id catalogs visible to the current host.

```csharp
public IReadOnlyList<DiagnosticsConvention> Conventions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DiagnosticsConvention\>

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_Counters"></a> Counters

The built-in counter names exposed by the engine.

```csharp
public IReadOnlyList<string> Counters { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_Liveness"></a> Liveness

The current liveness report.

```csharp
public RuntimeHealthReport Liveness { get; init; }
```

#### Property Value

 RuntimeHealthReport

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_LivenessPath"></a> LivenessPath

The liveness endpoint path.

```csharp
public string LivenessPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_MeterName"></a> MeterName

The meter name used for engine metrics.

```csharp
public string MeterName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_Readiness"></a> Readiness

The current readiness report.

```csharp
public RuntimeHealthReport Readiness { get; init; }
```

#### Property Value

 RuntimeHealthReport

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_ReadinessPath"></a> ReadinessPath

The readiness endpoint path.

```csharp
public string ReadinessPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_AspNetCore_Diagnostics_DiagnosticsSurface_SummaryPath"></a> SummaryPath

The aggregate health endpoint path.

```csharp
public string SummaryPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
