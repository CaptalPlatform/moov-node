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
export class EnrichedProfiles {
    constructor(moov: any);
    /**
     * @type {Moov}
     * @private
     */
    private moov;
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
    get(email: string): Promise<EnrichedProfile>;
}
export type EnrichedProfile = {
    /**
     * - Describes a person
     */
    individual: EnrichedIndividualProfile;
    /**
     * - Describes a company
     */
    business: EnrichedBusinessProfile;
};
export type EnrichedBusinessProfile = {
    /**
     * - Business's legal name
     */
    legalBusinessName: string;
    /**
     * - Business's address
     */
    address: EnrichedProfileAddress;
    /**
     * - Business's email
     */
    email: string;
    /**
     * - Business's phone
     */
    phone: EnrichedProfilePhone;
    /**
     * - Describes industry specific identifiers
     */
    industryCodes: EnrichedProfileIndustry;
    /**
     * - Business's website
     */
    website: string;
};
export type EnrichedIndividualProfile = {
    /**
     * - Individual's name
     */
    name: EnrichedProfileName;
    /**
     * - Individual's email
     */
    email: string;
    /**
     * - Individual's address
     */
    address: EnrichedProfileAddress;
};
export type EnrichedProfileAddress = {
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
     * - 2 characters
     */
    country: string;
};
/**
 * - Describes industry specific identifiers
 */
export type EnrichedProfileIndustry = {
    /**
     * - North American Industry Classification System
     */
    naics: string;
    /**
     * - Standard Industrial Classification
     */
    sic: string;
};
export type EnrichedProfileName = {
    /**
     * - First name
     */
    firstName: string;
    /**
     * - Middle name
     */
    middleName: string;
    /**
     * - Last name
     */
    lastName: string;
    /**
     * - Suffix
     */
    suffix: string;
};
export type EnrichedProfilePhone = {
    /**
     * - Phone number
     */
    number: string;
    /**
     * - Country code
     */
    countryCode: string;
};
