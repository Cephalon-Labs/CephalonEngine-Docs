---
title: Interface ICommand
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icommand-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Marks a write-side request that returns a value when it completes.

```csharp
public interface ICommand<TResult> : ICommand
```

#### Type Parameters

`TResult` 

The result type returned by the command.

#### Implements

[ICommand](/0-1-0-preview/reference/api/cephalon-abstractions-data-icommand/)
