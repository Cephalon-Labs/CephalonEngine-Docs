/**
 * Footer ads — third-party network integration.
 *
 * Two supported networks (pick one per deploy):
 *   • EthicalAds   — recommended for OSS. Free for qualifying projects.
 *                    No tracking cookies. Supports multiple ad placements
 *                    per page out of the box.
 *                    Apply: https://www.ethicalads.io/publishers/
 *   • Carbon Ads   — premium developer-targeted network. Paid sponsors.
 *                    One placement per `serve` ID.
 *                    Apply: https://www.carbonads.net/about
 *
 * Activation is build-time via env vars (PUBLIC_* prefix so they reach the
 * client). When no network is configured, the FooterAds component renders
 * placeholder slots so the layout is visible during development.
 *
 * To enable in production, set ONE of:
 *
 *   # EthicalAds
 *   PUBLIC_ADS_NETWORK=ethicaladunit
 *   PUBLIC_ETHICALADS_PUBLISHER=<your-publisher-id>
 *
 *   # Carbon Ads
 *   PUBLIC_ADS_NETWORK=carbon
 *   PUBLIC_CARBONADS_SERVE=<your-serve-id>
 *   PUBLIC_CARBONADS_PLACEMENT=<your-placement-id>
 *
 * Set in `.env`, the GitHub Actions workflow's `env:` block, or your
 * hosting provider's env-vars panel.
 */

type SupportedNetwork = 'ethicaladunit' | 'carbon' | '';

const rawNetwork = (import.meta.env.PUBLIC_ADS_NETWORK ?? '') as string;
const network: SupportedNetwork =
  rawNetwork === 'ethicaladunit' || rawNetwork === 'carbon' ? rawNetwork : '';

export const adsConfig = {
  /** The active network. Empty string = none → placeholder mode. */
  network,

  /** True when no network is configured — UI shows greyed "Ad slot" cards. */
  showPlaceholder: network === '',

  ethicalAds: {
    publisher: (import.meta.env.PUBLIC_ETHICALADS_PUBLISHER ?? '') as string,
    /** Keywords help EthicalAds match relevant ads. */
    keywords: 'cephalonengine,dotnet,csharp,framework,backend,microservices',
  },

  carbonAds: {
    serve: (import.meta.env.PUBLIC_CARBONADS_SERVE ?? '') as string,
    placement: (import.meta.env.PUBLIC_CARBONADS_PLACEMENT ?? '') as string,
  },
} as const;

/** Did the operator set up the network correctly? */
export const adsAreLive: boolean =
  (network === 'ethicaladunit' && adsConfig.ethicalAds.publisher !== '') ||
  (network === 'carbon' &&
    adsConfig.carbonAds.serve !== '' &&
    adsConfig.carbonAds.placement !== '');
