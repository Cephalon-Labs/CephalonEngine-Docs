---
title: Interface IAgentToolContributor
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolcontributor
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Allows a module to contribute tools into the active agentic runtime pack.

```csharp
public interface IAgentToolContributor
```

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolContributor_RegisterTools_Cephalon_Agentics_Services_IAgentToolRegistry_"></a> RegisterTools\(IAgentToolRegistry\)

Registers one or more tool descriptors with the supplied registry.

```csharp
void RegisterTools(IAgentToolRegistry tools)
```

#### Parameters

`tools` [IAgentToolRegistry](/0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolregistry/)

The registry that collects contributed tool descriptors.
