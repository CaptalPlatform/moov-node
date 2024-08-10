/** @external Promise */
/**
 * ACH Institution holds a FedACH dir routing record as defined by Fed ACH Format.
 * @typedef ACHInstitution
 * @property {string} routingNumber - Routing number for an ACH institution
 * @property {string} officeCode - Main/Head Office or Branch. O=main B=branch
 * @property {string} servicingFRBNumber - Servicing Fed's main office routing number
 * @property {string} recordTypeCode - RecordTypeCode The code indicating the ABA number to be used to route or send ACH items to the RDFI - 0 = Institution is a Federal Reserve Bank - 1 = Send items to customer routing number - 2 = Send items to customer using new routing number field
 * @property {string} revised - Revised Date of last revision: YYYYMMDD, or blank
 * @property {string} newRoutingNumber - Institution's new routing number resulting from a merger or renumber
 * @property {string} customerName - Customer's name
 * @property {string} phoneNumber - Phone number
 * @property {string} statusCode - Code is based on the customers receiver code
 * @property {string} viewCode - ViewCode is current view
 * @property {ACHInstitutionLocation} location - Location is the delivery address
 *
 * @example
 * {
  "routingNumber": "123456789",
  "officeCode": "0",
  "servicingFRBNumber": "123456789",
  "recordTypeCode": "1",
  "revised": "041921",
  "newRoutingNumber": "987654321",
  "customerName": "Main Street Bank",
  "phoneNumber": "123-456-7789",
  "statusCode": "1",
  "viewCode": "1",
  "location": {
    "address": "123 Main Street",
    "city": "Boulder",
    "state": "Colorado",
    "postalCode": "80301",
    "postalCodeExtension": "0000"
  }
}
 *
 * @tag Institutions
 */
/**
 * ACH Institution Location object.
 * @typedef ACHInstitutionLocation
 * @property {string} address - Up to 32 characters
 * @property {string} city - Up to 24 characters
 * @property {string} state - Up to 24 characters
 * @property {string} postalCode - Up to 5 characters
 * @property {string} postalCodeExtension - Up to 4 characters
 *
 * @tag Institutions
 */
/**
 * ACH Institution search criteria
 * @typedef ACHInstitutionSearchCriteria
 * @property {string} [name] - Optional financial institution name to search
 * @property {string} [routingNumber] - Optional routing number for a financial institution to search
 * @property {string} [count] - Optional parameter to limit the amount of results in the query
 * @property {string} [skip] - Optional The number of items to offset before starting to collect the result set
 *
 * @tag Institutions
 */
/**
 * Wire Institution holds a FedWIRE dir routing record as defined by Fed WIRE Format
 * @typedef WireInstitution
 * @property {string} routingNumber - Routing number for an Wire institution
 * @property {string} telegraphicName - The short name of financial institution
 * @property {string} customerName - Customer's name
 * @property {WireInstitutionLocation} location - Location is the delivery address
 * @property {string} fundsTransferStatus - Designates funds transfer status  - Y - Eligible  - N - Ineligible
 * @property {string} fundsSettlementOnlyStatus - Designates funds settlement only status  - S - Settlement-Only
 * @property {string} bookEntrySecuritiesTransferStatus - Designates book entry securities transfer status
 * @property {string} date - Date of last revision: YYYYMMDD, or blank
 *
 * @example
 * {
  "routingNumber": "123456789",
  "telegraphicName": "MN STR BNK",
  "customerName": "Main Street Bank",
  "location": {
    "city": "Boulder",
    "state": "Colorado"
  },
  "fundsTransferStatus": "Y",
  "fundsSettlementOnlyStatus": " ",
  "bookEntrySecuritiesTransferStatus": "Y",
  "date": "20000222"
}
 *
 * @tag Institutions
 */
/**
 * Wire Institution Location object.
 * @typedef WireInstitutionLocation
 * @property {string} city - Up to 24 characters
 * @property {string} state - Up to 24 characters
 *
 * @tag Institutions
 */
/**
 * ACH and Wire Institution participants
 * @typedef InstitutionParticipants
 * @property {ACHInstitution[]} [achParticipants] - Array of ACH institutions
 * @property {WireInstitution[]} [wireParticipants] - Array of Wire institutions
 *
 * @tag Institutions
 */
/**
 * The Institutions API
 * @tag Institutions
 */
export class Institutions {
    constructor(moov: any);
    moov: any;
    /**
     * Get information on a financial institution for ACH
     * The `FED_READ` scope enum is required when making a request from the browser.
     *
     * @param {ACHInstitutionSearchCriteria} criteria - Criteria for available search parameters
     * @returns {Promise<InstitutionParticipants>}
     *
     * @tag Institutions
     */
    getACHInstitution(criteria: ACHInstitutionSearchCriteria): Promise<InstitutionParticipants>;
    /**
     * Get information on a financial institution for WIRE
     * The `FED_READ` scope enum is required when making a request from the browser.
     *
     * @param {ACHInstitutionSearchCriteria} criteria - Criteria for available search parameters
     * @returns {Promise<InstitutionParticipants>}
     *
     * @tag Institutions
     */
    getWireInstitution(criteria: ACHInstitutionSearchCriteria): Promise<InstitutionParticipants>;
    /**
     * Get information on a financial institution
     * The `FED_READ` scope enum is required when making a request from the browser.
     *
     * @param {ACHInstitutionSearchCriteria} criteria - Criteria for available search parameters
     * @param {string} rail - The specific rail to check on, 'ach' or 'wire'.
     * @returns {Promise<InstitutionParticipants>}
     *
     * @tag Institutions
     */
    getInstitution(criteria: ACHInstitutionSearchCriteria, rail: string): Promise<InstitutionParticipants>;
}
/**
 * ACH Institution holds a FedACH dir routing record as defined by Fed ACH Format.
 */
export type ACHInstitution = {
    /**
     * - Routing number for an ACH institution
     */
    routingNumber: string;
    /**
     * - Main/Head Office or Branch. O=main B=branch
     */
    officeCode: string;
    /**
     * - Servicing Fed's main office routing number
     */
    servicingFRBNumber: string;
    /**
     * - RecordTypeCode The code indicating the ABA number to be used to route or send ACH items to the RDFI - 0 = Institution is a Federal Reserve Bank - 1 = Send items to customer routing number - 2 = Send items to customer using new routing number field
     */
    recordTypeCode: string;
    /**
     * - Revised Date of last revision: YYYYMMDD, or blank
     */
    revised: string;
    /**
     * - Institution's new routing number resulting from a merger or renumber
     */
    newRoutingNumber: string;
    /**
     * - Customer's name
     */
    customerName: string;
    /**
     * - Phone number
     */
    phoneNumber: string;
    /**
     * - Code is based on the customers receiver code
     */
    statusCode: string;
    /**
     * - ViewCode is current view
     */
    viewCode: string;
    /**
     * - Location is the delivery address
     */
    location: ACHInstitutionLocation;
};
/**
 * ACH Institution Location object.
 */
export type ACHInstitutionLocation = {
    /**
     * - Up to 32 characters
     */
    address: string;
    /**
     * - Up to 24 characters
     */
    city: string;
    /**
     * - Up to 24 characters
     */
    state: string;
    /**
     * - Up to 5 characters
     */
    postalCode: string;
    /**
     * - Up to 4 characters
     */
    postalCodeExtension: string;
};
/**
 * ACH Institution search criteria
 */
export type ACHInstitutionSearchCriteria = {
    /**
     * - Optional financial institution name to search
     */
    name?: string | undefined;
    /**
     * - Optional routing number for a financial institution to search
     */
    routingNumber?: string | undefined;
    /**
     * - Optional parameter to limit the amount of results in the query
     */
    count?: string | undefined;
    /**
     * - Optional The number of items to offset before starting to collect the result set
     */
    skip?: string | undefined;
};
/**
 * Wire Institution holds a FedWIRE dir routing record as defined by Fed WIRE Format
 */
export type WireInstitution = {
    /**
     * - Routing number for an Wire institution
     */
    routingNumber: string;
    /**
     * - The short name of financial institution
     */
    telegraphicName: string;
    /**
     * - Customer's name
     */
    customerName: string;
    /**
     * - Location is the delivery address
     */
    location: WireInstitutionLocation;
    /**
     * - Designates funds transfer status  - Y - Eligible  - N - Ineligible
     */
    fundsTransferStatus: string;
    /**
     * - Designates funds settlement only status  - S - Settlement-Only
     */
    fundsSettlementOnlyStatus: string;
    /**
     * - Designates book entry securities transfer status
     */
    bookEntrySecuritiesTransferStatus: string;
    /**
     * - Date of last revision: YYYYMMDD, or blank
     */
    date: string;
};
/**
 * Wire Institution Location object.
 */
export type WireInstitutionLocation = {
    /**
     * - Up to 24 characters
     */
    city: string;
    /**
     * - Up to 24 characters
     */
    state: string;
};
/**
 * ACH and Wire Institution participants
 */
export type InstitutionParticipants = {
    /**
     * - Array of ACH institutions
     */
    achParticipants?: ACHInstitution[] | undefined;
    /**
     * - Array of Wire institutions
     */
    wireParticipants?: WireInstitution[] | undefined;
};
