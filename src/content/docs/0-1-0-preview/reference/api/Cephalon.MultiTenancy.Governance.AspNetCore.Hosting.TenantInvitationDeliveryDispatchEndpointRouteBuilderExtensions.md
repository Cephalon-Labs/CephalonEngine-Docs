---
title: Class TenantInvitationDeliveryDispatchEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverydispatchendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Maps ASP.NET Core endpoints for tenant-invitation delivery dispatch requests.

```csharp
public static class TenantInvitationDeliveryDispatchEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryDispatchEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverydispatchendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryDispatchEndpointRouteBuilderExtensions_MapCephalonTenantInvitationDeliveryDispatches_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonTenantInvitationDeliveryDispatches\(IEndpointRouteBuilder\)

Maps the optional tenant-invitation delivery dispatch endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonTenantInvitationDeliveryDispatches(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint is opt-in, executes the host-agnostic <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryDispatcher" data-throw-if-not-resolved="false"></xref>, and
performs a fail-closed authorization check by default. It does not implement provider-specific senders,
durable retry queues, public onboarding, tenant-admin UI, provider polling, or identity-provider
synchronization.
