---
title: Namespace Cephalon.Behaviors.Http.Abstractions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions
editUrl: false
---

### Classes

 [BehaviorRestBindingAttribute](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingattribute/)

Declares one explicit request-source binding for a behavior input property on a metadata-only
REST profile.

 [BehaviorRestBindingDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingdescriptor/)

Describes one explicit request-source binding for a behavior input property on a metadata-only
REST profile.

 [BehaviorRestBindingSourceExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsourceextensions/)

Provides canonical wire-name helpers for <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestBindingSource" data-throw-if-not-resolved="false"></xref>.

 [BehaviorRestMethodExtensions](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethodextensions/)

Provides canonical wire-name helpers for <xref href="Cephalon.Behaviors.Http.Abstractions.BehaviorRestMethod" data-throw-if-not-resolved="false"></xref>.

 [BehaviorRestProfileAttribute](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofileattribute/)

Declares metadata-only REST projection preferences for a behavior without publishing a public REST route.

 [BehaviorRestProfileDescriptor](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestprofiledescriptor/)

Describes the metadata-only REST projection preference declared by a behavior.

### Interfaces

 [IHttpBehaviorBinding](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbinding/)

Thin adapter that maps a behavior topology to one HTTP transport.
Each transport variant (JSON-RPC, GraphQL, GraphQL-SSE, GraphQL-WS, SSE, WebSocket, etc.)
implements this interface and is registered in the
<xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBindingRegistry" data-throw-if-not-resolved="false"></xref>.

 [IHttpBehaviorBindingRegistry](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-ihttpbehaviorbindingregistry/)

Provides lookup and enumeration of all registered <xref href="Cephalon.Behaviors.Http.Abstractions.IHttpBehaviorBinding" data-throw-if-not-resolved="false"></xref> instances.

### Enums

 [BehaviorRestBindingSource](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestbindingsource/)

Identifies the HTTP request source that should populate one behavior input property for a
module-owned REST projection.

 [BehaviorRestMethod](/0-1-0-preview/reference/api/cephalon-behaviors-http-abstractions-behaviorrestmethod/)

Defines the candidate REST verbs supported by behavior-authored REST profile metadata.
