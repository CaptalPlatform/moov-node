"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrichedAddresses = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
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
class EnrichedAddresses {
    constructor(moov) {
        /**
         * @type {Moov}
         * @private
         */
        this.moov = moov;
    }
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
    get(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.check)(criteria).or(errors_js_1.Err.MISSING_CRITERIA);
            (0, checks_js_1.checkString)(criteria.search).or(errors_js_1.Err.MISSING_ENRICH_ADDRESS_SEARCH);
            const options = {
                url: "enrichment/address",
                method: "GET",
            };
            if (criteria) {
                const params = new URLSearchParams();
                if (criteria.search) {
                    params.append("search", criteria.search);
                }
                if (criteria.maxResults) {
                    params.append("maxResults", criteria.maxResults.toString());
                }
                if (criteria.includeCities) {
                    params.append("includeCities", criteria.includeCities);
                }
                if (criteria.includeStates) {
                    params.append("includeStates", criteria.includeStates);
                }
                if (criteria.includeZipcodes) {
                    params.append("includeZipcodes", criteria.includeZipcodes);
                }
                if (criteria.excludeStates) {
                    params.append("excludeStates", criteria.excludeStates);
                }
                if (criteria.preferCities) {
                    params.append("preferCities", criteria.preferCities);
                }
                if (criteria.preferStates) {
                    params.append("preferStates", criteria.preferStates);
                }
                if (criteria.preferZipcodes) {
                    params.append("preferZipcodes", criteria.preferZipcodes);
                }
                if (criteria.preferRatio) {
                    params.append("preferRatio", criteria.preferRatio.toString());
                }
                if (criteria.preferGeolocation) {
                    params.append("preferGeolocation", criteria.preferGeolocation);
                }
                if (criteria.selected) {
                    params.append("selected", criteria.selected);
                }
                if (criteria.source) {
                    params.append("source", criteria.source);
                }
                options.searchParams = params;
            }
            const result = yield this.moov.got(options).json();
            return result;
        });
    }
}
exports.EnrichedAddresses = EnrichedAddresses;
