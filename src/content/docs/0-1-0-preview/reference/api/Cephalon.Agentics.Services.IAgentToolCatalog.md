---
title: Interface IAgentToolCatalog
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolcatalog
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Exposes the merged set of tools available to the active agentic runtime.

```csharp
public interface IAgentToolCatalog
```

## Properties

### <a id="Cephalon_Agentics_Services_IAgentToolCatalog_Tools"></a> Tools

Gets the effective tool set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<AgentToolDescriptor> Tools { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)\>

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolCatalog_TryGet_System_String_Cephalon_Agentics_Services_AgentToolDescriptor__"></a> TryGet\(string, out AgentToolDescriptor\)

Attempts to resolve a tool descriptor by identifier.

```csharp
bool TryGet(string toolId, out AgentToolDescriptor tool)
```

#### Parameters

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tool identifier to resolve.

`tool` [AgentToolDescriptor](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttooldescriptor/)

When this method returns, contains the resolved tool if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the tool exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
