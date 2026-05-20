---
title: Class TenantInvitationDeliveryStatusCallbackEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatuscallbackendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Maps ASP.NET Core endpoints for normalized tenant-invitation delivery status callbacks.

```csharp
public static class TenantInvitationDeliveryStatusCallbackEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusCallbackEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatuscallbackendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusCallbackEndpointRouteBuilderExtensions_MapCephalonTenantInvitationDeliveryStatusCallbacks_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonTenantInvitationDeliveryStatusCallbacks\(IEndpointRouteBuilder\)

Maps the optional tenant-invitation delivery status callback endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonTenantInvitationDeliveryStatusCallbacks(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint is opt-in, executes the host-agnostic <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusReconciler" data-throw-if-not-resolved="false"></xref>,
and performs a fail-closed authorization check by default. It accepts normalized status observations only; provider
webhook payload translation, provider signature verification, provider polling, and provider-specific status
vocabularies remain application-managed or future provider-pack responsibilities.
