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
exports.Institutions = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
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
class Institutions {
    constructor(moov) {
        this.moov = moov;
    }
    /**
     * Get information on a financial institution for ACH
     * The `FED_READ` scope enum is required when making a request from the browser.
     *
     * @param {ACHInstitutionSearchCriteria} criteria - Criteria for available search parameters
     * @returns {Promise<InstitutionParticipants>}
     *
     * @tag Institutions
     */
    getACHInstitution(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getInstitution(criteria, "ach");
        });
    }
    /**
     * Get information on a financial institution for WIRE
     * The `FED_READ` scope enum is required when making a request from the browser.
     *
     * @param {ACHInstitutionSearchCriteria} criteria - Criteria for available search parameters
     * @returns {Promise<InstitutionParticipants>}
     *
     * @tag Institutions
     */
    getWireInstitution(criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getInstitution(criteria, "wire");
        });
    }
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
    getInstitution(criteria, rail) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.check)(criteria).or(errors_js_1.Err.MISSING_CRITERIA);
            if (!criteria.name && !criteria.routingNumber) {
                throw new TypeError(errors_js_1.Err.MISSING_INSTITUTION_NAME_OR_ROUTING);
            }
            const params = new URLSearchParams();
            if (criteria.routingNumber) {
                params.append("routingNumber", criteria.routingNumber);
            }
            const result = yield this.moov
                .got({
                url: `institutions/${rail}/search`,
                method: "GET",
                searchParams: params,
            })
                .json();
            return result;
        });
    }
}
exports.Institutions = Institutions;
