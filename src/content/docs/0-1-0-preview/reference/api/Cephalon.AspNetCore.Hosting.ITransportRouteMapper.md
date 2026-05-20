---
title: Interface ITransportRouteMapper
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-itransportroutemapper
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting/)  
Assembly: Cephalon.AspNetCore.dll  

Maps the routes associated with one selected transport onto an ASP.NET Core host.

```csharp
public interface ITransportRouteMapper
```

## Properties

### <a id="Cephalon_AspNetCore_Hosting_ITransportRouteMapper_TransportId"></a> TransportId

Gets the transport identifier that this mapper handles.

```csharp
string TransportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_AspNetCore_Hosting_ITransportRouteMapper_MapRoutes_Microsoft_AspNetCore_Builder_WebApplication_Cephalon_Engine_Runtime_IRuntime_"></a> MapRoutes\(WebApplication, IRuntime\)

Maps the transport's routes onto the supplied application.

```csharp
void MapRoutes(WebApplication app, IRuntime runtime)
```

#### Parameters

`app` [WebApplication](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplication)

The ASP.NET Core application to extend.

`runtime` IRuntime

The runtime whose manifest and services back the mapped routes.
