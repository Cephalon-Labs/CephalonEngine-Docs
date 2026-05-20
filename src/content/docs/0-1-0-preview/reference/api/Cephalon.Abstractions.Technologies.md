---
title: Namespace Cephalon.Abstractions.Technologies
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies
editUrl: false
---

### Classes

 [CellBoundaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor/)

Describes one module-owned cell boundary visible to the active Cephalon runtime.

 [CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)

Describes one module-owned cell health-isolation answer visible to the active runtime.

 [CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)

Describes one module-owned cell-to-cell routing and governance answer visible to the active runtime.

 [CellTrafficAutomationDependencyStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdependencystates/)

Defines the stable dependency states for cell traffic automation materialization answers.

 [CellTrafficAutomationDriftStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationdriftstates/)

Defines the stable drift states for cell traffic automation materialization answers.

 [CellTrafficAutomationLifecycleActions](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationlifecycleactions/)

Defines the stable lifecycle actions for cell traffic automation materialization answers.

 [CellTrafficAutomationMaterializationConditionCategories](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditioncategories/)

Defines the stable category identifiers used by typed cell traffic automation materialization conditions.

 [CellTrafficAutomationMaterializationConditionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondescriptor/)

Describes one typed provider-managed or edge-managed materialization condition for a cell traffic automation answer.

 [CellTrafficAutomationMaterializationConditionDimensions](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditiondimensions/)

Defines the stable dimension identifiers used by typed cell traffic automation materialization conditions.

 [CellTrafficAutomationMaterializationConditionSeverities](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditionseverities/)

Defines the stable severity identifiers used by typed cell traffic automation materialization conditions.

 [CellTrafficAutomationMaterializationConditionStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationconditionstates/)

Defines the stable state identifiers used by typed cell traffic automation materialization conditions.

 [CellTrafficAutomationMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult/)

Describes one materialization result for a cell traffic automation answer.

 [CellTrafficAutomationMaterializationStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationstates/)

Defines the stable materialization states for cell traffic automation runtime answers.

 [CellTrafficAutomationOwnershipStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationownershipstates/)

Defines the stable ownership states for cell traffic automation materialization answers.

 [CellTrafficAutomationProviderMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult/)

Describes one provider-managed materialization result for a cell traffic automation answer.

 [CellTrafficAutomationProviderMaterializationStates](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationstates/)

Defines the stable provider-materialization states for cell traffic automation runtime answers.

 [CellTrafficAutomationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationruntimedescriptor/)

Describes the effective runtime traffic-automation answer for one governed cell route.

 [TechnologyDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologydescriptor/)

Describes one technology profile that can be activated for an app.

 [TechnologyRuntimeEntry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimeentry/)

Describes one runtime-visible entry inside a technology surface.

 [TechnologyRuntimeSurface](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimesurface/)

Describes one operator-facing runtime surface exposed by an active technology pack.

 [TechnologySelection](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyselection/)

Provides lookup helpers over selected and available technology profiles.

### Interfaces

 [ICellBoundaryCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundarycatalog/)

Exposes the cell boundaries visible to the current runtime.

 [ICellBoundaryContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundarycontributor/)

Allows a module to contribute cell boundaries to the active runtime.

 [ICellBoundaryRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundaryregistry/)

Collects cell-boundary descriptors during runtime composition.

 [ICellHealthIsolationCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationcatalog/)

Exposes the cell health-isolation answers visible to the current runtime.

 [ICellHealthIsolationContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationcontributor/)

Allows a module to contribute cell health-isolation answers to the active runtime.

 [ICellHealthIsolationRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationregistry/)

Collects cell health-isolation descriptors during runtime composition.

 [ICellRouteCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellroutecatalog/)

Exposes the cell-to-cell routing and governance answers visible to the current runtime.

 [ICellRouteContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellroutecontributor/)

Allows a module to contribute cell routes to the active runtime.

 [ICellRouteRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellrouteregistry/)

Collects cell-route descriptors during runtime composition.

 [ICellTrafficAutomationEdgeMaterializer](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationedgematerializer/)

Applies edge-managed cell traffic automation posture to one edge runtime.

 [ICellTrafficAutomationMaterializationReportSink](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationmaterializationreportsink/)

Accepts live cell traffic automation materialization observations that should merge back into the active runtime catalog.

 [ICellTrafficAutomationProviderMaterializer](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationprovidermaterializer/)

Applies provider-managed cell traffic automation posture to one external control plane.

 [ICellTrafficAutomationRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationruntimecatalog/)

Exposes the effective cell traffic-automation answers visible to the current runtime.

 [ITechnologyCapabilityContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologycapabilitycontributor/)

Contributes capabilities when specific technology profiles are active.

 [ITechnologyContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologycontributor/)

Contributes technology descriptors to the runtime catalog.

 [ITechnologyRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyregistry/)

Registers technology descriptors for the runtime catalog.

 [ITechnologyRuntimeCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyruntimecatalog/)

Exposes the merged runtime surfaces projected by active technology packs.

 [ITechnologyRuntimeContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyruntimecontributor/)

Contributes one runtime surface projected by an active technology pack.

 [ITechnologyServiceContributor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyservicecontributor/)

Configures services required by active technology profiles.

### Enums

 [TechnologyKind](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologykind/)

Categorizes the role a technology profile plays in an app.
