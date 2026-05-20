---
title: Namespace Cephalon.AspNetCore.Hosting
slug: 0-1-0-preview/reference/api/cephalon-aspnetcore-hosting
editUrl: false
---

### Classes

 [ApiRoutesOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-apiroutesoptions/)

Configures host-level HTTP route prefixes for Cephalon ASP.NET Core transports.

 [AuditHistoryExportHttpResponseExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-audithistoryexporthttpresponseextensions/)

Writes audit-history export responses for ASP.NET Core hosts.

 [CephalonRateLimitingEndpointConventionBuilderExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-cephalonratelimitingendpointconventionbuilderextensions/)

Applies Cephalon ASP.NET Core rate-limiting conventions to endpoint builders by consulting the
host's effective rate-limiting policy catalog.

 [EngineWebApplicationBuilderExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationbuilderextensions/)

Registers the Cephalon ASP.NET Core host services on a <xref href="Microsoft.AspNetCore.Builder.WebApplicationBuilder" data-throw-if-not-resolved="false"></xref>.

 [EngineWebApplicationExtensions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-enginewebapplicationextensions/)

Maps the operator-facing HTTP surface exposed by a Cephalon ASP.NET Core host.

 [HttpRequestResponseLoggingOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-httprequestresponseloggingoptions/)

Configures opt-in HTTP request and response logging for Cephalon ASP.NET Core hosts.

 [RestApiGovernanceOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restapigovernanceoptions/)

Configures host-level governance for public REST endpoint publication in Cephalon ASP.NET Core hosts.

 [RestEndpointOverrideOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointoverrideoptions/)

Describes one host-level override rule for descriptor-backed REST shorthand candidates.

 [RestEndpointSuppressionOptions](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-restendpointsuppressionoptions/)

Describes one host-level suppression rule for descriptor-backed REST shorthand candidates.

### Interfaces

 [ITransportRouteMapper](/0-1-0-preview/reference/api/cephalon-aspnetcore-hosting-itransportroutemapper/)

Maps the routes associated with one selected transport onto an ASP.NET Core host.
