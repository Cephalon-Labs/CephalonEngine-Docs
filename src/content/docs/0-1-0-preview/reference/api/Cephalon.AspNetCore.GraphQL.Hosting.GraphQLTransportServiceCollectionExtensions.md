---
title: Class GraphQLTransportServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-graphql-hosting-graphqltransportservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.AspNetCore.GraphQL.Hosting](/0-1-0-preview/reference/api/cephalon-aspnetcore-graphql-hosting/)  
Assembly: Cephalon.AspNetCore.GraphQL.dll  

Registers the GraphQL ASP.NET Core transport adapter for Cephalon.

```csharp
public static class GraphQLTransportServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GraphQLTransportServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-graphql-hosting-graphqltransportservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_AddGraphQLTransport_Microsoft_Extensions_DependencyInjection_IServiceCollection_"></a> AddGraphQLTransport\(IServiceCollection\)

Adds the GraphQL transport mapper and GraphQL server services to the service collection.

```csharp
public static IServiceCollection AddGraphQLTransport(this IServiceCollection services)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_AddGraphQLTransport_Microsoft_AspNetCore_Builder_WebApplicationBuilder_"></a> AddGraphQLTransport\(WebApplicationBuilder\)

Adds the GraphQL transport mapper and GraphQL server services to a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder AddGraphQLTransport(this WebApplicationBuilder builder)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLMutation_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLMutation\(IServiceCollection, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL mutation root used by Cephalon modules.

```csharp
public static IServiceCollection ConfigureGraphQLMutation(this IServiceCollection services, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection that owns the transport registration.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Mutation</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLMutation_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLMutation\(WebApplicationBuilder, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL mutation root on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder ConfigureGraphQLMutation(this WebApplicationBuilder builder, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Mutation</code>.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLQuery_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLQuery\(IServiceCollection, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL query root used by Cephalon modules.

```csharp
public static IServiceCollection ConfigureGraphQLQuery(this IServiceCollection services, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection that owns the transport registration.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Query</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLQuery_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLQuery\(WebApplicationBuilder, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL query root on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder ConfigureGraphQLQuery(this WebApplicationBuilder builder, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Query</code>.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLSubscription_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLSubscription\(IServiceCollection, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL subscription root used by Cephalon modules.

```csharp
public static IServiceCollection ConfigureGraphQLSubscription(this IServiceCollection services, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection that owns the transport registration.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Subscription</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent composition.

#### Remarks

Subscription field registration only shapes the GraphQL schema. Modules or hosts still need
to register a concrete Hot Chocolate subscription provider, such as
<code>AddInMemorySubscriptions()</code>, through <xref href="Cephalon.AspNetCore.GraphQL.Hosting.GraphQLTransportServiceCollectionExtensions.ConfigureGraphQLTransport(Microsoft.Extensions.DependencyInjection.IServiceCollection%2cSystem.Action%7bHotChocolate.Execution.Configuration.IRequestExecutorBuilder%7d)" data-throw-if-not-resolved="false"></xref>
when they want GraphQL-over-SSE or GraphQL-over-WebSocket operations to execute.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLSubscription_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_HotChocolate_Types_IObjectTypeDescriptor__"></a> ConfigureGraphQLSubscription\(WebApplicationBuilder, Action<IObjectTypeDescriptor\>\)

Adds fields to the shared GraphQL subscription root on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder ConfigureGraphQLSubscription(this WebApplicationBuilder builder, Action<IObjectTypeDescriptor> configure)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IObjectTypeDescriptor\>

The callback that adds fields, arguments, and resolvers to <code>Subscription</code>.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLTransport_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_HotChocolate_Execution_Configuration_IRequestExecutorBuilder__"></a> ConfigureGraphQLTransport\(IServiceCollection, Action<IRequestExecutorBuilder\>\)

Applies GraphQL schema configuration for Cephalon modules and hosts.

```csharp
public static IServiceCollection ConfigureGraphQLTransport(this IServiceCollection services, Action<IRequestExecutorBuilder> configure)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection that owns the transport registration.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IRequestExecutorBuilder\>

The callback that extends the GraphQL request executor builder.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent composition.

#### Remarks

Hosts typically call <xref href="Cephalon.AspNetCore.GraphQL.Hosting.GraphQLTransportServiceCollectionExtensions.AddGraphQLTransport(Microsoft.Extensions.DependencyInjection.IServiceCollection)" data-throw-if-not-resolved="false"></xref> once, while
individual modules use this method from <code>ConfigureServices</code> to add query, mutation,
subscription, scalar, or type-extension registrations without forcing the engine core to
know anything about the GraphQL implementation.

### <a id="Cephalon_AspNetCore_GraphQL_Hosting_GraphQLTransportServiceCollectionExtensions_ConfigureGraphQLTransport_Microsoft_AspNetCore_Builder_WebApplicationBuilder_System_Action_HotChocolate_Execution_Configuration_IRequestExecutorBuilder__"></a> ConfigureGraphQLTransport\(WebApplicationBuilder, Action<IRequestExecutorBuilder\>\)

Applies GraphQL schema configuration on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static WebApplicationBuilder ConfigureGraphQLTransport(this WebApplicationBuilder builder, Action<IRequestExecutorBuilder> configure)
```

#### Parameters

`builder` [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The ASP.NET Core application builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<IRequestExecutorBuilder\>

The callback that extends the GraphQL request executor builder.

#### Returns

 [WebApplicationBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.builder.webapplicationbuilder)

The same builder instance for fluent composition.
