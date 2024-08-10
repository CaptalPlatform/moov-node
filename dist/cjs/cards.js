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
exports.Cards = exports.CARD_VERIFICATION_STATUS = exports.CARD_TYPE = exports.CARD_BRAND = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
/** @external Promise */
/**
 * @enum
 * @tag Cards
 */
exports.CARD_BRAND = {
    /**
     * American Express
     * @tag Cards
     */
    AMEX: "American Express",
    /**
     * Discover
     * @tag Cards
     */
    DISCOVER: "Discover",
    /**
     * MasterCard
     * @tag Cards
     */
    MC: "MasterCard",
    /**
     * Visa
     * @tag Cards
     */
    VISA: "Visa",
};
/**
 * @enum
 * @tag Cards
 */
exports.CARD_TYPE = {
    /**
     * Debit card
     * @tag Cards
     */
    DEBIT: "debit",
    /**
     * Credit card
     * @tag Cards
     */
    CREDIT: "credit",
    /**
     * Prepaid card
     * @tag Cards
     */
    PREPAID: "prepaid",
    /**
     * Unknown type
     * @tag Cards
     */
    UNKNOWN: "unknown",
};
/**
 * @enum
 * @tag Cards
 */
exports.CARD_VERIFICATION_STATUS = {
    /**
     * No Match
     * @tag Cards
     */
    NO_MATCH: "noMatch",
    /**
     * Match
     * @tag Cards
     */
    MATCH: "match",
    /**
     * Not Checked
     * @tag Cards
     */
    NOT_CHECKED: "notChecked",
    /**
     * Unavailable
     * @tag Cards
     */
    UNAVAILABLE: "unavailable",
};
/**
 * Card account expiration date
 * @typedef CardExpiration
 * @property {string} month - 2 character month
 * @property {string} year - 2 character year
 *
 * @tag Cards
 */
/**
 * Card information collected for acquisition.
 * @typedef LinkCard
 * @property {string} cardNumber - All digits of the card
 * @property {CardExpiration} expiration - Card expiration date
 * @property {string} cardCvv - 3-4 digit card verification value
 * @property {string} holderName - Full name of the card holder
 * @property {CardBillingAddress} billingAddress - The billing address of the card
 *
 * @tag Cards
 */
/**
 * Card billing address
 * @typedef CardBillingAddress
 * @property {string} addressLine1 - string <= 32 characters
 * @property {string} addressLine2 - string <= 32 characters
 * @property {string} city - string <= 24 characters
 * @property {string} stateOrProvince - string <= 2 characters
 * @property {string} postalCode - string <= 5 characters
 * @property {string} country - string <= 2 characters
 *
 * @tag Cards
 */
/**
 * Card verification statuses
 * @typedef CardVerficationStatuses
 * @property {CARD_VERIFICATION_STATUS} cvv - Verification status of the CVV
 * @property {CARD_VERIFICATION_STATUS} addressLine1 - Verification status of addressLine1
 * @property {CARD_VERIFICATION_STATUS} postalCode - Verification status of the postalCode
 *
 * @tag Cards
 */
/**
 * Describes a Card account.
 * @typedef Card
 * @property {string} cardID - Card account identifier
 * @property {string} fingerprint - string <= 100 characters that is a unique fingerprint of a card
 * @property {CARD_BRAND} brand - The card brand
 * @property {CARD_TYPE} cardType - The type of the card
 * @property {string} lastFourCardNumber - Last four digits of the card
 * @property {string} bin - The BIN number of the card
 * @property {CardExpiration} expiration - The expiration info of the card
 * @property {string} holderName - The name of the card holder
 * @property {CardBillingAddress} billingAddress - The billing address of the card
 * @property {CardVerficationStatuses} cardVerfication - The results of submitting cardholder data to a card network for verification
 * @property {string} issuer - The name of the issuer
 * @property {string} issuerCountry - The country of the issuer
 *
 * @example
 * {
  "cardID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
  "fingerprint": "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
  "brand": "American Express",
  "cardType": "debit",
  "lastFourCardNumber": "1234",
  "bin": "123456",
  "expiration": {
    "month": "01",
    "year": "21"
  },
  "holderName": "Jules Jackson",
  "billingAddress": {
    "addressLine1": "123 Main Street",
    "addressLine2": "Apt 302",
    "city": "Boulder",
    "stateOrProvince": "CO",
    "postalCode": "80301",
    "country": "US"
  },
  "cardVerification": {
    "cvv": "match",
    "addressLine1": "match",
    "postalCode": "match"
  },
  "issuer": "GRINGOTTS BANK",
  "issuerCountry": "US"
}
 *
 * @tag Cards
 */
/**
 * The Cards API.
 * @tag Cards
 */
class Cards {
    constructor(moov) {
        this.moov = moov;
    }
    /**
     * Retrieves details for the card with the specified ID.
     * The `CARDS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to query
     * @param {string} cardID - Card to query
     * @returns {Promise<Card>}
     * @tag Cards
     */
    get(accountID, cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(cardID).or(errors_js_1.Err.MISSING_CARD_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/cards/${cardID}`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
    /**
     * Lists all the cards associated with a particular Moov account.
     * The `CARDS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to query
     * @returns {Promise<Card[]>}
     * @tag Cards
     */
    list(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/cards`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
    /**
     * Links a card to a Moov account. Only use this endpoint if you have provided Moov with a
     * copy of your PCI attestation of compliance.
     * The `CARDS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to link
     * @param {LinkCard} card - Card information
     * @returns {Promise<Card>}
     * @tag Cards
     */
    link(accountID, card) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.check)(card).or(errors_js_1.Err.MISSING_CARD);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/cards`,
                method: "POST",
                json: card,
            })
                .json();
            return result;
        });
    }
    /**
     * Disables a card with the specified ID.
     * The `CARDS_WRITE` scope enum is required when making a request from the browser.
     *
    * @param {string} accountID - Account to query
     * @param {string} cardID - Card to query
     * @returns {Promise<void>}
     * @tag Cards
     */
    disable(accountID, cardID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(cardID).or(errors_js_1.Err.MISSING_CARD_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/cards/${cardID}`,
                method: "DELETE",
            })
                .json();
            return result;
        });
    }
}
exports.Cards = Cards;
