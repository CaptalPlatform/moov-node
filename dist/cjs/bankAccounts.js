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
exports.BankAccounts = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
/** @external Promise */
/**
 * The Bank Accounts API
 * @tag Bank accounts
 */
class BankAccounts {
    constructor(moov) {
        this.moov = moov;
    }
    /**
     * Link a bank account to a Moov account
     * The `BANK_ACCOUNTS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add the bank account
     * @param {BankAccountAdd} [bankAccount] - Optional bank account details
     * @param {string} [plaidToken] - Optional Plaid processor token
     * @param {string} [mxAuthorizationCode] - Optional Plaid processor authorization code
     * @returns {Promise<BankAccount>}
     *
     * @tag Bank accounts
     */
    link(accountID, bankAccount, plaidToken, mxAuthorizationCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = {};
            if (!accountID) {
                console.log(errors_js_1.Err.MISSING_ACCOUNT_ID_ERROR_MESSAGE);
                throw new Error(errors_js_1.Err.MISSING_ACCOUNT_ID_ERROR_MESSAGE);
            }
            if (!bankAccount && !plaidToken && !mxAuthorizationCode) {
                console.log(errors_js_1.Err.MISSING_BANK_PAYLOAD);
                throw new Error(errors_js_1.Err.MISSING_BANK_PAYLOAD);
            }
            if (bankAccount) {
                if (!bankAccount.accountNumber) {
                    console.log(errors_js_1.Err.MISSING_BANK_ACCOUNT_NUMBER);
                    throw new Error(errors_js_1.Err.MISSING_BANK_ACCOUNT_NUMBER);
                }
                if (!bankAccount.routingNumber) {
                    console.log(errors_js_1.Err.MISSING_BANK_ACCOUNT_ROUTING_NUMBER);
                    throw new Error(errors_js_1.Err.MISSING_BANK_ACCOUNT_ROUTING_NUMBER);
                }
                if (bankAccount.routingNumber.length !== 9) {
                    console.log(errors_js_1.Err.MISSING_BANK_ACCOUNT_ROUTING_NUMBER_LENGTH);
                    throw new Error(errors_js_1.Err.MISSING_BANK_ACCOUNT_ROUTING_NUMBER_LENGTH);
                }
                if (!bankAccount.holderName) {
                    console.log(errors_js_1.Err.MISSING_BANK_ACCOUNT_HOLDER_NAME);
                    throw new Error(errors_js_1.Err.MISSING_BANK_ACCOUNT_HOLDER_NAME);
                }
                if (!bankAccount.holderType) {
                    console.log(errors_js_1.Err.MISSING_BANK_ACCOUNT_HOLDER_TYPE);
                    throw new Error(errors_js_1.Err.MISSING_BANK_ACCOUNT_HOLDER_TYPE);
                }
                payload = {
                    account: bankAccount,
                };
            }
            else if (plaidToken) {
                payload = {
                    plaid: { token: plaidToken },
                };
            }
            else if (mxAuthorizationCode) {
                payload = {
                    mx: { authorizationCode: mxAuthorizationCode },
                };
            }
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts`,
                method: "POST",
                json: payload,
            })
                .json();
            return result;
        });
    }
    /**
     * Retrieve bank account details (i.e. routing number or account type) associated with a specific Moov account.
     * The `BANK_ACCOUNTS_READ` scope enum is required when making a request from the browser.
     * @param {string} accountID - Account on which to request bank account
     * @param {string} bankAccountID - ID of the bank account to retrieve
     * @returns {Promise<BankAccount>}
     *
     * @tag Bank accounts
     */
    get(accountID, bankAccountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(bankAccountID).or(errors_js_1.Err.MISSING_BANK_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts/${bankAccountID}`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
    /**
     * List all the bank accounts associated with a particular Moov account.
     * The `BANK_ACCOUNTS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @returns {Promise<BankAccount[]>}
     *
     * @tag Bank accounts
     */
    list(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts`,
                method: "GET",
            })
                .json();
            return result;
        });
    }
    /**
     * Discontinue using a specified bank account linked to a Moov account.
     * The `BANK_ACCOUNTS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @param {string} bankAccountID - ID of the bank account to disable
     * @returns {Promise<void>}
     *
     * @tag Bank accounts
     */
    disable(accountID, bankAccountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(bankAccountID).or(errors_js_1.Err.MISSING_BANK_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts/${bankAccountID}`,
                method: "DELETE",
            })
                .json();
            return result;
        });
    }
    /**
     * Initiate a micro deposit for a bank account linked to a Moov account.
     * The `BANK_ACCOUNTS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @param {string} bankAccountID - ID of the bank account to disable
     * @returns {Promise<void>}
     *
     * @tag Bank accounts
     */
    initMicroDeposits(accountID, bankAccountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(bankAccountID).or(errors_js_1.Err.MISSING_BANK_ACCOUNT_ID);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts/${bankAccountID}/micro-deposits`,
                method: "POST",
            })
                .json();
            return result;
        });
    }
    /**
     * Complete the micro-deposit validation process by passing the amounts of the two transfers.
     * The `BANK_ACCOUNTS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to request bank account
     * @param {string} bankAccountID - ID of the bank account to disable
     * @param {Array.<number>} amounts - Array of two positive integers, in cents, equal to the values of the micro-deposits sent to the bank account.
     * @returns {Promise<void>}
     *
     * @tag Bank accounts
     */
    completeMicroDeposits(accountID, bankAccountID, amounts) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
            (0, checks_js_1.checkString)(bankAccountID).or(errors_js_1.Err.MISSING_BANK_ACCOUNT_ID);
            (0, checks_js_1.check)(amounts).or(errors_js_1.Err.MISSING_AMOUNTS);
            const result = yield this.moov
                .got({
                url: `accounts/${accountID}/bank-accounts/${bankAccountID}/micro-deposits`,
                method: "PUT",
                json: { amounts: amounts },
            })
                .json();
            return result;
        });
    }
}
exports.BankAccounts = BankAccounts;
