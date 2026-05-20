---
title: Class TenantInvitationDeliveryStatusObservationEndpointRouteBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationendpointroutebuilderextensions
editUrl: false
---

Namespace: [Cephalon.MultiTenancy.Governance.AspNetCore.Hosting](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting/)  
Assembly: Cephalon.MultiTenancy.Governance.AspNetCore.dll  

Maps ASP.NET Core endpoints for reading normalized tenant-invitation delivery status observations.

```csharp
public static class TenantInvitationDeliveryStatusObservationEndpointRouteBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TenantInvitationDeliveryStatusObservationEndpointRouteBuilderExtensions](/0-1-0-preview/reference/api/cephalon-multitenancy-governance-aspnetcore-hosting-tenantinvitationdeliverystatusobservationendpointroutebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_MultiTenancy_Governance_AspNetCore_Hosting_TenantInvitationDeliveryStatusObservationEndpointRouteBuilderExtensions_MapCephalonTenantInvitationDeliveryStatusObservations_Microsoft_AspNetCore_Routing_IEndpointRouteBuilder_"></a> MapCephalonTenantInvitationDeliveryStatusObservations\(IEndpointRouteBuilder\)

Maps the optional tenant-invitation delivery status observation read endpoint.

```csharp
public static IEndpointRouteBuilder MapCephalonTenantInvitationDeliveryStatusObservations(this IEndpointRouteBuilder endpoints)
```

#### Parameters

`endpoints` [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The endpoint route builder to extend.

#### Returns

 [IEndpointRouteBuilder](https://learn.microsoft.com/dotnet/api/microsoft.aspnetcore.routing.iendpointroutebuilder)

The same endpoint route builder for fluent routing composition.

#### Remarks

The endpoint is opt-in, reads the host-agnostic <xref href="Cephalon.MultiTenancy.Governance.Services.ITenantInvitationDeliveryStatusObservationStore" data-throw-if-not-resolved="false"></xref>,
and performs a fail-closed authorization check by default. It exposes bounded normalized observation history only;
provider-specific callback inboxes, provider polling, and distributed replay semantics remain application-managed
or future provider-pack responsibilities.
