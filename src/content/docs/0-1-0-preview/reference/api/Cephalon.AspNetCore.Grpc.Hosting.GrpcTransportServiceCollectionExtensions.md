---
title: Class GrpcTransportServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-hosting-grpctransportservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.Grpc.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-hosting/)  
Assembly: Cephalon.AspNetCore.Grpc.dll  

Registers the gRPC ASP.NET Core transport adapter for Cephalon.

```csharp
public static class GrpcTransportServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GrpcTransportServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-grpc-hosting-grpctransportservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_Grpc_Hosting_GrpcTransportServiceCollectionExtensions_AddGrpcTransport_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> AddGrpcTransport\(IServiceCollection\)

Adds the gRPC transport mapper and ASP.NET Core gRPC services to the service collection.

```csharp
public static IServiceCollection AddGrpcTransport(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_AspNetCore_Grpc_Hosting_GrpcTransportServiceCollectionExtensions_AddGrpcTransport_Microsoft_AspNetCore_Builder_WebApplicationBuilder_"></a> AddGrpcTransport\(WebApplicationBuilder\)

Adds the gRPC transport mapper to a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder AddGrpcTransport(this WebApplicationBuilder builder)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.
