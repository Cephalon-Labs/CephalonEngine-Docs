---
title: Class LazyTransportBinding
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-lazytransportbinding
editUrl: false
---

Namespace: [Cephalon.Behaviors.Http](/0-1-0-preview/reference/api/cephalon-behaviors-http/)  
Assembly: Cephalon.Behaviors.Http.dll  

Deferred-initialization wrapper around an <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding" data-throw-if-not-resolved="false"></xref>.
Ensures that <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding.MapAsync(Microsoft.AspNetCore.Builder.WebApplication%2cCephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor%2cCephalon.Behaviors.Services.BehaviorDispatcher)" data-throw-if-not-resolved="false"></xref> is called exactly once,
on first request, using a <xref href="System.Threading.SemaphoreSlim" data-throw-if-not-resolved="false"></xref> to guard concurrent callers.
This keeps pod startup under 100 ms regardless of transport count.

```csharp
public sealed class LazyTransportBinding : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LazyTransportBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-lazytransportbinding/)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Http_LazyTransportBinding_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Cephalon_Behaviors_Http_LazyTransportBinding_EnsureMappedAsync_Microsoft_AspNetCore_Builder_WebApplication_Cephalon_Abstractions_Behaviors_BehaviorTopologyDescriptor_Cephalon_Behaviors_Services_BehaviorDispatcher_Cephalon_Behaviors_Http_Abstractions_IHttpBehaviorBinding_System_Threading_CancellationToken_"></a> EnsureMappedAsync\(WebApplication, BehaviorTopologyDescriptor, BehaviorDispatcher, IHttpBehaviorBinding, CancellationToken\)

Ensures the binding has been mapped. If not yet mapped, calls
<xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding.MapAsync(Microsoft.AspNetCore.Builder.WebApplication%2cCephalon.Abstractions.Behaviors.BehaviorTopologyDescriptor%2cCephalon.Behaviors.Services.BehaviorDispatcher)" data-throw-if-not-resolved="false"></xref> under a semaphore, then marks the
instance as initialized so subsequent calls return immediately.
On initialization failure the flag is NOT set, allowing a retry on the next call.

```csharp
public Task EnsureMappedAsync(WebApplication app, BehaviorTopologyDescriptor descriptor, BehaviorDispatcher dispatcher, IHttpBehaviorBinding binding, CancellationToken ct = default)
```

#### Parameters

`app` [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

The web application to register routes on.

`descriptor` BehaviorTopologyDescriptor

The behavior topology descriptor.

`dispatcher` BehaviorDispatcher

The behavior dispatcher.

`binding` [IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)

The concrete transport binding to initialize.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

Cancellation token threaded from the caller.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the binding is ready.
