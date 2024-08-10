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
exports.Moov = exports.ALL_SCOPES = exports.SCOPES = void 0;
const got_cjs_1 = require("got-cjs");
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
const accounts_js_1 = require("./accounts.js");
const avatars_js_1 = require("./avatars.js");
const bankAccounts_js_1 = require("./bankAccounts.js");
const capabilities_js_1 = require("./capabilities.js");
const cards_js_1 = require("./cards.js");
const enrichedAddress_js_1 = require("./enrichedAddress.js");
const enrichedProfile_js_1 = require("./enrichedProfile.js");
const institutions_js_1 = require("./institutions.js");
const paymentMethods_js_1 = require("./paymentMethods.js");
const representatives_js_1 = require("./representatives.js");
const transfers_js_1 = require("./transfers.js");
const wallets_js_1 = require("./wallets.js");
/** external Promise */
/** external Accounts */
/**
 * For client-side integration, you'll need to request scopes when generating an OAuth token. See available scopes below:
 * @enum
 * @tag Authentication
 */
exports.SCOPES = {
    /**
     * Allows a new Moov account to be created
     * @tag Authentication
     */
    ACCOUNTS_CREATE: "/accounts.write",
    /**
     * List connected accounts -- see also PROFILE_READ
     * @tag Authentication
     */
    ACCOUNTS_READ: "/accounts.read",
    /**
     * Access to view a linked bank account to a Moov account
     * @tag Authentication
     */
    BANK_ACCOUNTS_READ: "/accounts/{accountID}/bank-accounts.read",
    /**
     * Access to add a linked bank account to a Moov account
     * @tag Authentication
     */
    BANK_ACCOUNTS_WRITE: "/accounts/{accountID}/bank-accounts.write",
    /**
     * Access to view a linked card on a Moov account
     * @tag Authentication
     */
    CARDS_READ: "/accounts/{accountID}/cards.read",
    /**
     * Access add a linked card to a Moov account
     * @tag Authentication
     */
    CARDS_WRITE: "/accounts/{accountID}/cards.write",
    /**
     * Access to view capabilities, determining what actions the account can do
     * @tag Authentication
     */
    CAPABILITIES_READ: "/accounts/{accountID}/capabilities.read",
    /**
     * Access to request capabilities, determining what actions the account can do
     * @tag Authentication
     */
    CAPABILITIES_WRITE: "/accounts/{accountID}/capabilities.write",
    /**
     * Access to view documents (like I-9s, W-4s) associated with a Moov account
     * @tag Authentication
     */
    DOCUMENTS_READ: "/accounts/{accountID}/documents.read",
    /**
     * Access to upload documents (like I-9s, W-4s) associated with a Moov account
     * @tag Authentication
     */
    DOCUMENTS_WRITE: "/accounts/{accountID}/documents.write",
    /**
     * Access to view payment methods for the account specified
     * @tag Authentication
     */
    PAYMENT_METHODS_READ: "/accounts/{accountID}/payment-methods.read",
    /**
     * Access to view a Moov account’s profile image
     * @tag Authentication
     */
    PROFILE_ENRICHMENT_READ: "/profile-enrichment.read",
    /**
     * Access to view details associated with a Moov account -- see also ACCOUNTS_READ
     * @tag Authentication
     */
    PROFILE_READ: "/accounts/{accountID}/profile.read",
    /**
     * Access to edit details associated with a Moov account
     * @tag Authentication
     */
    PROFILE_WRITE: "/accounts/{accountID}/profile.write",
    /**
     * Access to view details on business representatives for a Moov account
     * @tag Authentication
     */
    REPRESENTATIVE_READ: "/accounts/{accountID}/representatives.read",
    /**
     * Access to add details on business representatives for a Moov account
     * @tag Authentication
     */
    REPRESENTATIVE_WRITE: "/accounts/{accountID}/representatives.write",
    /**
     * Access to view transfers
     * @tag Authentication
     */
    TRANSFERS_READ: "/accounts/{accountID}/transfers.read",
    /**
     * Access to move money by creating transfers
     * @tag Authentication
     */
    TRANSFERS_WRITE: "/accounts/{accountID}/transfers.write",
    /**
     * Access to view the balance on an account’s Moov wallet
     * @tag Authentication
     */
    WALLETS_READ: "/accounts/{accountID}/wallets.read",
    /**
     * Allows a developer to use the institutions lookup service to look up a bank name by routing number
     * @tag Authentication
     */
    FED_READ: "/fed.read",
    /**
     * Ping Moov servers to test for connectivity
     * @tag Authentication
     */
    PING: "/ping.read",
};
/**
 * For internal use only. Do not generate OAuth tokens for Moov.js and Moov
 * Drops that contain more permissions than are necessary.
 * @private
 */
exports.ALL_SCOPES = [
    exports.SCOPES.ACCOUNTS_CREATE,
    exports.SCOPES.ACCOUNTS_READ,
    exports.SCOPES.BANK_ACCOUNTS_READ,
    exports.SCOPES.BANK_ACCOUNTS_WRITE,
    exports.SCOPES.CARDS_READ,
    exports.SCOPES.CARDS_WRITE,
    exports.SCOPES.CAPABILITIES_READ,
    exports.SCOPES.CAPABILITIES_WRITE,
    exports.SCOPES.DOCUMENTS_READ,
    exports.SCOPES.DOCUMENTS_WRITE,
    exports.SCOPES.PAYMENT_METHODS_READ,
    exports.SCOPES.PROFILE_ENRICHMENT_READ,
    exports.SCOPES.PROFILE_READ,
    exports.SCOPES.PROFILE_WRITE,
    exports.SCOPES.REPRESENTATIVE_READ,
    exports.SCOPES.REPRESENTATIVE_WRITE,
    exports.SCOPES.TRANSFERS_READ,
    exports.SCOPES.TRANSFERS_WRITE,
    exports.SCOPES.WALLETS_READ,
    exports.SCOPES.FED_READ,
    exports.SCOPES.PING,
];
/**
 * OAuth2 token returned by `Moov.generateToken()`. Use `Token.token` in Moov.js
 * and client-side code to make calls to the Moov API.
 * @typedef Token
 *
 * @property {string} token - String token required by Moov API requests
 * @property {Date} expiresOn - Date and time when the token expires
 * @property {string} refreshToken - String used to refresh this token
 * @tag Authentication
 */
const gotDefaults = {
    prefixUrl: "https://api.moov.io",
};
/**
 * The Moov API client.
 * @tag Moov
 */
class Moov {
    /**
     * @summary
     * Initializes a new instance of the Moov API client.
     *
     * @description
     * Get the information for the `credentials` parameter from the Moov
     * Dashboard.
     *
     * Moov uses the [Got](https://github.com/sindresorhus/got) HTTP client
     * library. If you need to access or customize the request-response pipeline,
     * then provide customized options or an instance in the `gotOptionsOrInstance` parameter.
     *
     * @param {object} credentials - API key credentials
     * @param {string} credentials.accountID - Facilitator account ID
     * @param {string} credentials.publicKey - Public key value from API key
     * @param {string} credentials.secretKey - Secret key value from API key
     * @param {string} credentials.domain - One of the domains from API key
     * @param {object} [gotOptionsOrInstance] - Customized Got options or instance. See [docs](https://github.com/sindresorhus/got).
     *
     * @kind constructor
     * @tag Moov
     *
     * @example
     * const moov = new Moov({
     *   accountID: "...",
     *   publicKey: "...",
     *   secretKey: "...",
     *   domain: "...",
     * });
     */
    constructor(credentials, gotOptionsOrInstance) {
        (0, checks_js_1.check)(credentials).or(errors_js_1.Err.MISSING_API_KEY_CREDENTIALS);
        (0, checks_js_1.checkString)(credentials.accountID).or(errors_js_1.Err.MISSING_ACCOUNT_ID);
        (0, checks_js_1.checkString)(credentials.publicKey).or(errors_js_1.Err.MISSING_PUBLIC_KEY);
        (0, checks_js_1.checkString)(credentials.secretKey).or(errors_js_1.Err.MISSING_SECRET_KEY);
        (0, checks_js_1.checkUrl)(credentials.domain).or(errors_js_1.Err.MISSING_DOMAIN);
        this.credentials = credentials;
        this.tokenCache = {};
        this.got = got_cjs_1.got.extend({
            username: this.credentials.publicKey,
            password: this.credentials.secretKey,
        }, gotDefaults, gotOptionsOrInstance || {});
        this._accounts = null;
        this._capabilities = null;
        this._transfers = null;
    }
    /**
     * @summary
     * Generates an OAuth token required by Moov API requests. For more on our authentication protocol, read our [quick start guide](/guides/quick-start/#create-an-access-token).
     *
     * @param {SCOPES[]} scopes - One or more permissions to request
     * @param {string} [accountID] - Account on which to request permissions, default is your account ID
     * @returns {Promise<Token>}
     * @tag Authentication
     *
     * @description
     * You only need call this function when generating tokens for [Moov.js](/moovjs) and
     * [Moov Drops](/moovjs/drops). The other functions in this library generate tokens for you
     * automatically.
     *
     * @example
     * const moov = new Moov(...);
     * const token = await moov.generateToken([
     *   SCOPES.ACCOUNTS_CREATE,
     *   SCOPES.PING
     * ]);
     */
    generateToken(scopes, accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkArrayLength)(scopes).or(errors_js_1.Err.MISSING_SCOPES);
            if (!accountID) {
                accountID = this.credentials.accountID;
            }
            const renderedScopes = [];
            for (let scope of scopes) {
                (0, checks_js_1.checkString)(scope).or(errors_js_1.Err.MISSING_SCOPES);
                renderedScopes.push(scope.replace("{accountID}", accountID));
            }
            const result = yield this.got({
                url: "oauth2/token",
                method: "POST",
                form: {
                    grant_type: "client_credentials",
                    client_id: this.credentials.publicKey,
                    client_secret: this.credentials.secretKey,
                    scope: renderedScopes.join(" "),
                },
                headers: {
                    origin: this.credentials.domain,
                },
            }).json();
            const expiresOn = new Date(new Date().getTime() + result.expires_in * 1000);
            return {
                token: result.access_token,
                expiresOn,
                refreshToken: result.refresh_token,
            };
        });
    }
    /**
     * Pings the Moov servers to check for connectivity.
     * Read more about [/ping](/api/#tag/Ping).
     * @tag Authentication
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.ping();
     *   // Ping succeeded
     * } catch (err) {
     *   // Ping failed
     * }
     */
    ping() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.got({
                url: "ping",
                method: "GET",
            });
        });
    }
    /**
     * Gets the Accounts API.
     * @returns {Accounts}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.accounts.create(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get accounts() {
        if (!this._accounts) {
            this._accounts = new accounts_js_1.Accounts(this);
        }
        return this._accounts;
    }
    /**
     * Gets the Avatars API.
     * @returns {Avatars}
     * @tag Moov
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.avatars.get(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get avatars() {
        if (!this._avatars) {
            this._avatars = new avatars_js_1.Avatars(this);
        }
        return this._avatars;
    }
    /**
     * Gets the Bank Accounts API.
     * @returns {BankAccounts}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.bankAccounts.link(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get bankAccounts() {
        if (!this._bankAccounts) {
            this._bankAccounts = new bankAccounts_js_1.BankAccounts(this);
        }
        return this._bankAccounts;
    }
    /**
     * Gets the Capabilities API.
     * @returns {Capabilities}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.capabilities.requestCapabilities(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get capabilities() {
        if (!this._capabilities) {
            this._capabilities = new capabilities_js_1.Capabilities(this);
        }
        return this._capabilities;
    }
    /**
     * Gets the Cards API.
     * @returns {Cards}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.cards.list(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get cards() {
        if (!this._cards) {
            this._cards = new cards_js_1.Cards(this);
        }
        return this._cards;
    }
    /**
     * Gets the Enriched Address API.
     * @returns {EnrichedAddresses}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.enrichedAddresses.get(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get enrichedAddresses() {
        if (!this._enrichedAddresses) {
            this._enrichedAddresses = new enrichedAddress_js_1.EnrichedAddresses(this);
        }
        return this._enrichedAddresses;
    }
    /**
     * Gets the Enriched Profile API.
     * @returns {EnrichedProfiles}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.enrichedProfiles.get(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get enrichedProfiles() {
        if (!this._enrichedProfiles) {
            this._enrichedProfiles = new enrichedProfile_js_1.EnrichedProfiles(this);
        }
        return this._enrichedProfiles;
    }
    /**
     * Gets the Payment Methods API.
     * @returns {PaymentMethods}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.paymentMethods.get(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get paymentMethods() {
        if (!this._paymentMethods) {
            this._paymentMethods = new paymentMethods_js_1.PaymentMethods(this);
        }
        return this._paymentMethods;
    }
    /**
     * Gets the Institutions API.
     * @returns {Institutions}
     * @tag Moov
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.institutions.getACHInstitution(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get institutions() {
        if (!this._institutions) {
            this._institutions = new institutions_js_1.Institutions(this);
        }
        return this._institutions;
    }
    /**
     * Gets the Representatives API.
     * @returns {Representatives}
     * @tag Moov
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.representatives.create(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get representatives() {
        if (!this._representatives) {
            this._representatives = new representatives_js_1.Representatives(this);
        }
        return this._representatives;
    }
    /**
     * Gets the Transfers API.
     * @returns {Transfers}
     * @tag Moov
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.transfers.create(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get transfers() {
        if (!this._transfers) {
            this._transfers = new transfers_js_1.Transfers(this);
        }
        return this._transfers;
    }
    /**
     * Gets the Wallets API.
     * @returns {Wallets}
     * @tag Moov
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   await moov.wallets.get(...);
     * } catch (err) {
     *   // ...
     * }
     */
    get wallets() {
        if (!this._wallets) {
            this._wallets = new wallets_js_1.Wallets(this);
        }
        return this._wallets;
    }
    /**
     * Gets a cached token or creates a new one.
     * @param {string} accountID - Account identifier
     * @returns {Promise<Token>}
     * @private
     */
    getToken(accountID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!accountID) {
                accountID = this.credentials.accountID;
            }
            const now = new Date();
            if (!this.tokenCache[accountID] ||
                this.tokenCache[accountID].expiresOn <= now) {
                this.tokenCache[accountID] = yield this.generateToken(exports.ALL_SCOPES, accountID);
            }
            return this.tokenCache[accountID];
        });
    }
}
exports.Moov = Moov;
