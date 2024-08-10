/**
 * @typedef EnrichedAddress
 * @property {string} addressLine1 - Street address
 * @property {string} addressLine2 - Unit number
 * @property {string} city - 25 characters or less
 * @property {string} stateOrProvince - 2 characters
 * @property {string} postalCode - 5 characters
 * @property {number} entries - The number of addresses matching the search criteria
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedAddressGetCriteria
 * @property {string} search - Partial or complete address to search
 * @property {number} [maxResults] - Optional Maximum number of results to return
 * @property {string} [includeCities] - Optional - Limits results to a list of given cities (example, "chicago;honolulu;portland")
 * @property {string} [includeStates] - Optional - Limits results to a list of given states (example, "illinois;hawaii;oregon")
 * @property {string} [includeZipcodes] - Optional - Limits results to a list of given ZIP codes (example, "60412;96818;97209")
 * @property {string} [excludeStates] - Optional - Exclude list of states from results. No include parameters may be used with this parameter. Example: "AZ;WA;SC"
 * @property {string} [preferCities] - Optional-  Display results with the listed cities at the top (example, "denver;aurora;omaha")
 * @property {string} [preferStates] - Optional - Display results with the listed states at the top (example, "CO;MN;WI")
 * @property {string} [preferZipcodes] - Optional - Display results with the listed ZIP codes at the top (example, "60412;96818;97209")
 * @property {number} [preferRatio] - Optional - Specifies the percentage of address suggestions that should be preferred and will appear at the top of the results
 * @property {"none"|"city"} [preferGeolocation] - Optional - If omitted or set to city it uses the sender's IP address to determine location, then automatically adds the city and state to the preferCities value (example: "city"). This parameter takes precedence over other include or exclude parameters meaning that if it is not set to none you may see addresses from areas you do not wish to see.
 * @property {string} [selected] - Optional - Useful for narrowing results with `addressLine2` suggestions such as Apt. Denotes an apartment building with multiple residences (example, "Apt").
 * @property {"all"|"postal"} [source] - Optional - Include results from alternate data sources. Allowed values are `all` (non-postal addresses) or `postal` (postal addresses only).
 *
 * @tag Enrichment
 * */
/**
 * The Enriched Address API.
 * @tag Enrichment
 */
export class EnrichedAddresses {
    constructor(moov: any);
    /**
     * @type {Moov}
     * @private
     */
    private moov;
    /**
     * Gets enriched address suggestions.
     * The `PROFILE_ENRICHMENT_READ` scope enum is required when making a request from the browser.
     *
     * @param {EnrichedAddressGetCriteria} criteria - Criteria for available search parameters
     * @returns {Promise<EnrichedAddress[]>}
     * @tag Enrichment
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const suggestedAddresses = moov.enrichedAddresses.get({
     *     search: "123 Fake St",
     *     includeCities: "Springfield"
     *     // ...
     *   });
     * } catch (err) {
     *   // ...
     * }
     */
    get(criteria: EnrichedAddressGetCriteria): Promise<EnrichedAddress[]>;
}
export type EnrichedAddress = {
    /**
     * - Street address
     */
    addressLine1: string;
    /**
     * - Unit number
     */
    addressLine2: string;
    /**
     * - 25 characters or less
     */
    city: string;
    /**
     * - 2 characters
     */
    stateOrProvince: string;
    /**
     * - 5 characters
     */
    postalCode: string;
    /**
     * - The number of addresses matching the search criteria
     */
    entries: number;
};
export type EnrichedAddressGetCriteria = {
    /**
     * - Partial or complete address to search
     */
    search: string;
    /**
     * - Optional Maximum number of results to return
     */
    maxResults?: number | undefined;
    /**
     * - Optional - Limits results to a list of given cities (example, "chicago;honolulu;portland")
     */
    includeCities?: string | undefined;
    /**
     * - Optional - Limits results to a list of given states (example, "illinois;hawaii;oregon")
     */
    includeStates?: string | undefined;
    /**
     * - Optional - Limits results to a list of given ZIP codes (example, "60412;96818;97209")
     */
    includeZipcodes?: string | undefined;
    /**
     * - Optional - Exclude list of states from results. No include parameters may be used with this parameter. Example: "AZ;WA;SC"
     */
    excludeStates?: string | undefined;
    /**
     * - Optional-  Display results with the listed cities at the top (example, "denver;aurora;omaha")
     */
    preferCities?: string | undefined;
    /**
     * - Optional - Display results with the listed states at the top (example, "CO;MN;WI")
     */
    preferStates?: string | undefined;
    /**
     * - Optional - Display results with the listed ZIP codes at the top (example, "60412;96818;97209")
     */
    preferZipcodes?: string | undefined;
    /**
     * - Optional - Specifies the percentage of address suggestions that should be preferred and will appear at the top of the results
     */
    preferRatio?: number | undefined;
    /**
     * - Optional - If omitted or set to city it uses the sender's IP address to determine location, then automatically adds the city and state to the preferCities value (example: "city"). This parameter takes precedence over other include or exclude parameters meaning that if it is not set to none you may see addresses from areas you do not wish to see.
     */
    preferGeolocation?: "none" | "city" | undefined;
    /**
     * - Optional - Useful for narrowing results with `addressLine2` suggestions such as Apt. Denotes an apartment building with multiple residences (example, "Apt").
     */
    selected?: string | undefined;
    /**
     * - Optional - Include results from alternate data sources. Allowed values are `all` (non-postal addresses) or `postal` (postal addresses only).
     */
    source?: "all" | "postal" | undefined;
};
