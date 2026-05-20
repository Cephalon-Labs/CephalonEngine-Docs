---
title: Interface ICommandHandler
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icommandhandler-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Handles a write-side request that does not return a result value.

```csharp
public interface ICommandHandler<in TCommand> where TCommand : ICommand
```

#### Type Parameters

`TCommand` 

The command type handled by the contract.

## Methods

### <a id="Cephalon_Abstractions_Data_ICommandHandler_1_HandleAsync__0_System_Threading_CancellationToken_"></a> HandleAsync\(TCommand, CancellationToken\)

Handles the supplied command.

```csharp
ValueTask HandleAsync(TCommand command, CancellationToken cancellationToken = default)
```

#### Parameters

`command` TCommand

The command to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the command has finished running.
