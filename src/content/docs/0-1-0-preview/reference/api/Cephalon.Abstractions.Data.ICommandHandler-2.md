---
title: Interface ICommandHandler
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icommandhandler-2
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Handles a write-side request that returns a result value.

```csharp
public interface ICommandHandler<in TCommand, TResult> where TCommand : ICommand<TResult>
```

#### Type Parameters

`TCommand` 

The command type handled by the contract.

`TResult` 

The result type returned by the command.

## Methods

### <a id="Cephalon_Abstractions_Data_ICommandHandler_2_HandleAsync__0_System_Threading_CancellationToken_"></a> HandleAsync\(TCommand, CancellationToken\)

Handles the supplied command.

```csharp
ValueTask<TResult> HandleAsync(TCommand command, CancellationToken cancellationToken = default)
```

#### Parameters

`command` TCommand

The command to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<TResult\>

A task that completes with the result produced by the command.
