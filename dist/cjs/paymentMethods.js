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
exports.PaymentMethods = exports.PAYMENT_METHODS_TYPE = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
/** @external Promise */
/**
 * @enum
 * @tag Payment methods
 */
exports.PAYMENT_METHODS_TYPE = {
    /**
     * Moov Wallet Payment Type
     * @tag Payment methods
     */
    MOOV_WALLET: "moov-wallet",
    /**
     * ACH Debt Fund Payment Type
     * @tag Payment methods
     */
    ACH_DEBIT_FUND: "ach-debit-fund",
    /**
     * ACH Debt Collect Payment Type
     * @tag Payment methods
     */
    ACH_DEBIT_COLLECT: "ach-debit-collect",
    /**
     * ACH Credit Standard Payment Type
     * @tag Payment methods
     */
    ACH_CREDIT_STANDARD: "ach-credit-standard",
    /**
     * ACH Credit Same Day Payment Type
     * @tag Payment methods
     */
    ACH_CREDIT_SAME_DAY: "ach-credit-same-day",
    /**
     * Card Payment Type
     * @tag Payment methods
     */
    CARD: "card-payment",
};
/**
 * Wallet Payment Type
 * @typedef WalletPaymentType
 * @property {string} walletID - Wallet identifier
 * @tag Payment methods
 */
/**
 * Describes a Payment Method.
 * @typedef PaymentMethod
 * @property {string} paymentMethodID - Payment Method identifier
 * @property {PAYMENT_METHODS_TYPE} paymentMethodType - Fingerprint of Bank Account
 * @property {WalletPaymentType} [wallet] - Optional wallet object when payment method type is 'moov-wallet'.
 * @property {BankAccount} [bankAccount] - Optional bank account object when payment method type is one of 'ach-debit-fund', 'ach-debit-collect', ach-credit-standard', or 'ach-credit-same-day'.
 *
 * @example
 * {
  "paymentMethodID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
  "paymentMethodType": "ach-debit-fund",
  "bankAccount": {
    "bankAccountID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
    "fingerprint": "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    "status": "new",
    "holderName": "Jules Jackson",
    "holderType": "individual",
    "bankName": "Chase Bank",
    "bankAccountType": "checking",
    "routingNumber": "string",
    "lastFourAccountNumber": "7000"
  }
}
 *
 * @tag Payment methods
 */
/**
 * The Payment methods API
 * @tag Payment methods
 */
class PaymentMethods {
    constructor(moov) {
        this.moov = moov;
    }
    /**
     * Get the specified payment method associated with a Moov account.
     * The `PAYMENT_METHODS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @param {string} paymentMethodID - ID of the payment method to retrieve. Can be one of `walletID`, `cardID`, or `bankAccountID`.
     * @returns {Promise<PaymentMethod>}
     *
     * @tag Payment methods
     */
    get(accountID, paymentMethodID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(paymentMethodID).or(errors_js_1.Err.MISSING_PAYMENT_METHOD_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/payment-methods/${paymentMethodID}`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
    /**
     * Retrieve all of the payment methods associated with a Moov account.
     * The `PAYMENT_METHODS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @returns {Promise<PaymentMethod[]>}
     *
     * @tag Payment methods
     */
    list(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/payment-methods`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
}
exports.PaymentMethods = PaymentMethods;
