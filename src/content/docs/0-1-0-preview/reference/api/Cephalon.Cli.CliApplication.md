---
title: Class CliApplication
slug: 0-1-0-preview/reference/api/cephalon-cli-cliapplication
editUrl: false
---

Namespace: [Cephalon.Cli](/0-1-0-preview/reference/api/cephalon-cli/)  
Assembly: Cephalon.Cli.dll  

Hosts the main command-dispatch entry point for the Cephalon CLI.

```csharp
public static class CliApplication
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CliApplication](/0-1-0-preview/reference/api/cephalon-cli-cliapplication/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Cli_CliApplication_RunAsync_System_String___System_IO_TextWriter_System_IO_TextWriter_System_Threading_CancellationToken_"></a> RunAsync\(string\[\], TextWriter, TextWriter, CancellationToken\)

Runs the CLI for the supplied arguments and writers.

```csharp
public static Task<int> RunAsync(string[] args, TextWriter output, TextWriter error, CancellationToken cancellationToken = default)
```

#### Parameters

`args` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The command-line arguments to execute.

`output` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

The writer used for standard output.

`error` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

The writer used for error output.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel CLI execution.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

The process exit code.
