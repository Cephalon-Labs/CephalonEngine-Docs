---
title: Interface IAgentToolRunCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-iagenttoolruncatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the latest reported runtime state for agent-tool runs.

```csharp
public interface IAgentToolRunCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Agentics_IAgentToolRunCatalog_Runs"></a> Runs

Gets the currently known agent-tool run states ordered by tool identifier and run identifier.

```csharp
IReadOnlyList<AgentToolRunState> Runs { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AgentToolRunState](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate/)\>

## Methods

### <a id="Cephalon_Abstractions_Agentics_IAgentToolRunCatalog_GetByRunId_System_String_"></a> GetByRunId\(string\)

Looks up one reported run-state entry by run identifier.

```csharp
AgentToolRunState? GetByRunId(string runId)
```

#### Parameters

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier to resolve.

#### Returns

 [AgentToolRunState](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate/)?

The current run state when one has been reported; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

### <a id="Cephalon_Abstractions_Agentics_IAgentToolRunCatalog_GetByToolId_System_String_"></a> GetByToolId\(string\)

Gets all reported run-state entries for one tool.

```csharp
IReadOnlyList<AgentToolRunState> GetByToolId(string toolId)
```

#### Parameters

`toolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tool identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[AgentToolRunState](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate/)\>

The run states reported for the tool.

### <a id="Cephalon_Abstractions_Agentics_IAgentToolRunCatalog_TryGet_System_String_Cephalon_Abstractions_Agentics_AgentToolRunState__"></a> TryGet\(string, out AgentToolRunState?\)

Attempts to look up one reported run-state entry by run identifier.

```csharp
bool TryGet(string runId, out AgentToolRunState? state)
```

#### Parameters

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier to resolve.

`state` [AgentToolRunState](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate/)?

The current run state when one has been reported.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when one run-state entry is available; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
