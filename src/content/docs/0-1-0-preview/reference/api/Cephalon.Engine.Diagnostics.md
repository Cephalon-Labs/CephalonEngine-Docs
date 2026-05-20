---
title: Namespace Cephalon.Engine.Diagnostics
slug: 0-1-0-preview/reference/api/cephalon-engine-diagnostics
editUrl: false
---

### Classes

 [DiagnosticEventDefinition](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticeventdefinition/)

Describes one published diagnostics event id together with its intended meaning.

 [DiagnosticsConvention](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticsconvention/)

Describes the diagnostics convention published by one engine package or companion package.

 [EngineDiagnostics](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-enginediagnostics/)

Defines the stable meter, activity source, and counter names emitted by the engine runtime.

### Interfaces

 [IDiagnosticsConventionContributor](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-idiagnosticsconventioncontributor/)

Contributes a diagnostics convention to the runtime-facing diagnostics catalog.

 [IRuntimeDiagnosticsCatalog](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-iruntimediagnosticscatalog/)

Exposes the merged diagnostics conventions visible to the current runtime.

### Enums

 [DiagnosticSeverity](/0-1-0-preview/reference/api/cephalon-engine-diagnostics-diagnosticseverity/)

Describes the severity attached to a published diagnostics event definition.
