---
title: Interface IRuntimeDiagnosticsCatalog
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics-iruntimediagnosticscatalog
editUrl: false
---

Namespace: [Cephalon.Engine.Diagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics/)  
Assembly: Cephalon.Engine.dll  

Exposes the merged diagnostics conventions visible to the current runtime.

```csharp
public interface IRuntimeDiagnosticsCatalog
```

## Properties

### <a id="Cephalon_Engine_Diagnostics_IRuntimeDiagnosticsCatalog_Conventions"></a> Conventions

Gets the published diagnostics conventions visible to the runtime.

```csharp
IReadOnlyList<DiagnosticsConvention> Conventions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)\>

## Methods

### <a id="Cephalon_Engine_Diagnostics_IRuntimeDiagnosticsCatalog_GetBySource_System_String_"></a> GetBySource\(string\)

Gets the diagnostics conventions owned by the requested source.

```csharp
IReadOnlyList<DiagnosticsConvention> GetBySource(string source)
```

#### Parameters

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

The diagnostics source or package identifier.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)\>

The matching conventions, or an empty list when the source is not active.
