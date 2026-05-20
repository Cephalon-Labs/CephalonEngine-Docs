---
title: Interface IWriteStore
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iwritestore
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Executes write-side requests against the active data implementation.

```csharp
public interface IWriteStore
```

## Methods

### <a id="Cephalon_Abstractions_Data_IWriteStore_ExecuteAsync_Cephalon_Abstractions_Data_ICommand_System_Threading_CancellationToken_"></a> ExecuteAsync\(ICommand, CancellationToken\)

Executes the supplied command on the write side.

```csharp
ValueTask ExecuteAsync(ICommand command, CancellationToken cancellationToken = default)
```

#### Parameters

`command` [ICommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-icommand/)

The command to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the command has finished running.

### <a id="Cephalon_Abstractions_Data_IWriteStore_ExecuteAsync__1_Cephalon_Abstractions_Data_ICommand___0__System_Threading_CancellationToken_"></a> ExecuteAsync<TResult\>\(ICommand<TResult\>, CancellationToken\)

Executes the supplied command on the write side and returns the resulting value.

```csharp
ValueTask<TResult> ExecuteAsync<TResult>(ICommand<TResult> command, CancellationToken cancellationToken = default)
```

#### Parameters

`command` [ICommand](Cephalon.Abstractions.Data.ICommand\-1.md)<TResult\>

The command to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<TResult\>

A task that completes with the result produced by the command.

#### Type Parameters

`TResult` 

The result type returned by the command.
