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
exports.EnrichedProfiles = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
/**
 * @typedef EnrichedProfile
 * @property {EnrichedIndividualProfile} individual - Describes a person
 * @property {EnrichedBusinessProfile} business - Describes a company
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedBusinessProfile
 * @property {string} legalBusinessName - Business's legal name
 * @property {EnrichedProfileAddress} address - Business's address
 * @property {string} email - Business's email
 * @property {EnrichedProfilePhone} phone - Business's phone
 * @property {EnrichedProfileIndustry} industryCodes - Describes industry specific identifiers
 * @property {string} website - Business's website
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedIndividualProfile
 * @property {EnrichedProfileName} name - Individual's name
 * @property {string} email - Individual's email
 * @property {EnrichedProfileAddress} address - Individual's address
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedProfileAddress
 * @property {string} addressLine1 - Street address
 * @property {string} addressLine2 - Unit number
 * @property {string} city - 25 characters or less
 * @property {string} stateOrProvince - 2 characters
 * @property {string} postalCode - 5 characters
 * @property {string} country - 2 characters
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedProfileIndustry - Describes industry specific identifiers
 * @property {string} naics - North American Industry Classification System
 * @property {string} sic - Standard Industrial Classification
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedProfileName
 * @property {string} firstName - First name
 * @property {string} middleName - Middle name
 * @property {string} lastName - Last name
 * @property {string} suffix - Suffix
 *
 * @tag Enrichment
 */
/**
 * @typedef EnrichedProfilePhone
 * @property {string} number - Phone number
 * @property {string} countryCode - Country code
 *
 * @tag Enrichment
 */
/**
 * The Enriched Profile API.
 * @tag Enrichment
 */
class EnrichedProfiles {
    constructor(moov) {
        /**
         * @type {Moov}
         * @private
         */
        this.moov = moov;
    }
    /**
     * Gets enriched profile data.
     * The `PROFILE_ENRICHMENT_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} email - Email address associated with the profile.
     * @returns {Promise<EnrichedProfile>}
     * @tag Enrichment
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const enrichedProfile = moov.enrichedProfiles.get("employee@business.com");
     * } catch (err) {
     *   // ..
     * }
     */
    get(email) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(email).or(errors_js_1.Err.MISSING_EMAIL);
            const result = yield this.moov
                .got({
                url: "enrichment/profile",
                method: "GET",
                searchParams: {
                    email: email,
                },
            })
                .json();
            return result;
        });
    }
}
exports.EnrichedProfiles = EnrichedProfiles;
