---
title: Interface IAgentToolRegistry
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolregistry
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Collects tool descriptors contributed to the active agentic runtime pack.

```csharp
public interface IAgentToolRegistry
```

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolRegistry_Add_Cephalon_Agentics_Services_AgentToolDescriptor_"></a> Add\(AgentToolDescriptor\)

Adds a tool descriptor to the registry.

```csharp
void Add(AgentToolDescriptor tool)
```

#### Parameters

`tool` [AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)

The tool descriptor to contribute.
