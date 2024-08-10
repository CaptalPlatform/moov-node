/**
 * @typedef CardDetails
 * @type {object}
 * @property {string} dynamicDescriptor - An optional override of the default card statement descriptor for a transfer. Accounts must be enabled by Moov to set this field.
 * @property {"recurring"|"unscheduled"|null} merchantInitiatedType - Enum: [recurring unscheduled] Describes how the card transaction was initiated
 * @tag Cards
 */
/**
 * High-level account information associated with a payment method.
 * @typedef PaymentMethodAccount
 * @property {string} accountID - Payment method identifier
 * @property {string} email - Email associated with the payment method
 * @property {string} displayName - Display name associated with the payment method
 * @tag Transfers
 */
/**
 * @typedef BankAccount
 * @property {string} bankAccountID - Bank Account identifier
 * @property {string} fingerprint - Fingerprint of the bank account
 * @property {"new"|"verified"|"verificationFailed"|"pending"|"errored"} status - Bank account status
 * @property {string} holderName - Name of the account holder
 * @property {"individual"|"business"} holderType - Type of holder on a funding source
 * @property {string} bankName - Name of the bank
 * @property {"checking"|"savings"|"unknown"} bankAccountType
 * @property {string} routingNumber - Bank account routing number
 * @property {string} lastFourAccountNumber - Last four digits of the bank account number
 * @tag Transfers
 */
/**
 * @typedef Wallet
 * @property {string} walletID - Wallet identifier
 * @tag Transfers
 */
/**
 * @typedef CardExpiration
 * @property {string} month 2 characters
 * @property {string} year 2 characters
 * @tag Transfers
 */
/**
 * The results of submitting cardholder data to a card network for verification.
 * @typedef CardVerification
 * @property {"noMatch"|"match"|"notChecked"|"unavailable"} cvv - Card Verification Value status
 * @property {"noMatch"|"match"|"notChecked"|"unavailable"} addressLine1 - Address status
 * @property {"noMatch"|"match"|"notChecked"|"unavailable"} postalCode - Postal code status
 * @tag Transfers
 */
/**
 * @typedef Card
 * @property {string} cardID - Card identifier
 * @property {string} fingerprint - Fingerprint of the card
 * @property {"American Express"|"Discover"|"MasterCard"|"Visa"} brand - Card brand
 * @property {"debit"|"credit"|"prepaid"|"unknown"} cardType - Card type
 * @property {string} lastFourCardNumber - Last four digits of the card number
 * @property {string} bin - Bank Identification Number
 * @property {CardExpiration} expiration - The card's expiration date
 * @property {string} holderName - The cardholder's name
 * @property {Address} billingAddress - The billing address associated with the card
 * @property {CardVerification} cardVerification - The results of submitting cardholder data to a card network for verification
 * @tag Transfers
 */
/**
 * Models the reason for an ACH return or correction.
 * @typedef ACHCode
 * @property {string} code - Ach return code (for example, R01)
 * @property {string} reason - The network's reason for the return or correction (for example, insufficient funds)
 * @property {string} description - Explanation of the return code and reason
 * @tag Transfers
 */
/**
 * @typedef ACHDetails
 * @property {"initiated"|"originated"|"corrected"|"returned"|"completed"} status - ACH rail status
 * @property {string} traceNumber - Tracking number that can be used by payment recipient to trace the payment with their external financial institution
 * @property {ACHCode} [return] - ACH return information per Nacha specification
 * @property {ACHCode} [correction] - ACH notification of change information per Nacha specification
 * @tag Transfers
 */
/**
 * @typedef PaymentMethod
 * @property {string} paymentMethodID - Payment method identifier
 * @property {"moov-wallet"|"ach-debit-fund"|"ach-debit-collect"|"ach-credit-standard"|"ach-credit-same-day"|"rtp-credit"|"card-payment"} paymentMethodType - Allowed payment method types
 * @property {PaymentMethodAccount} account - Account information associated with the payment method
 * @property {BankAccount} [bankAccount] - Optional bank account object when payment method type is one of `ach-debit-fund`, `ach-debit-collect`, `ach-credit-standard`, or `ach-credit-same-day`
 * @property {Card} [card] - Optional card object when payment method type is one of `card-payment` or `apple-pay`
 * @property {Wallet} [wallet] - Optional wallet object when payment method type is `moov-wallet`
 * @property {ACHDetails} [achDetails] - Information about ACH transfers and status details
 * @property {CardDetails} [cardDetails] - Statement descriptor and recurring flag for card payments
 * @tag Transfers
 */
/**
 * @typedef Amount
 * @property {number} value - Integer quantity in the smallest unit of the specified currency. In USD this is cents, so $12.04 is 1204 and $0.99 would be 99.
 * @property {string} currency - 3 letter ISO 4217 currency code
 * @tag Transfers
 */
/**
 * @typedef Refund
 * @property {string} refundID - Refund identifier
 * @property {string} createdOn - Date-time the refund was created on
 * @property {string} updatedOn - Date-time the refund was updated on
 * @property {"created"|"pending"|"completed"|"failed"} status - Refund status
 * @property {Amount} amount - Refund amount
 * @tag Transfers
 */
/**
 * @typedef Transfer
 * @property {string} transferID - Transfer identifier
 * @property {string} createdAt - Deprecated (now createdOn)
 * @property {string} createdOn - Date-time the transfer was created on
 * @property {"created"|"pending"|"completed"|"failed"|"reversed"} status - Transfer status
 * @property {PaymentMethod} source - `paymentMethodID` or `transferID`
 * @property {PaymentMethod} destination - `paymentMethodID`
 * @property {Amount} amount - Transfer amount
 * @property {string} description - Transfer description (128 characters max)
 * @property {object} metadata - Arbitrary key-value pairs
 * @property {Amount} [refundedAmount] - The total refunded amount
 * @property {Refund[]} refunds - Array of refunds associated with the transfer
 * @property {object} facilitatorFee - Total or markup fee
 * @property {number} moovFee - Integer quantity of Moov fee in USD, so $0.11 would be 11
 * @property {string} moovFeeDecimal - The precise fee charged - supports up to 9 decimals
 * @tag Transfers
 */
/**
 * @typedef TransferCreate
 * @property {PaymentMethod} source - `paymentMethodID` or `transferID`
 * @property {PaymentMethod} destination - `paymentMethodID`
 * @property {Amount} amount - Transfer amount represented by an integer value and its currency
 * @property {object} facilitatorFee - Total or markup fee
 * @property {string} description - Transfer description (128 characters max)
 * @property {object} metadata - Arbitrary key-value pairs
 *
 * @example
 * {
  "source": {
    "transferID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
    "paymentMethodID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
    "cardDetails": {}
  },
  "destination": {
    "paymentMethodID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43"
  },
  "amount": {
    "currency": "USD",
    "value": 1204
  },
  "facilitatorFee": {
    "total": 0,
  },
  "description": "Pay Instructor for May 15 Class",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
 * @tag Transfers
 */
/**
 * @typedef TransferResponse
 * @property {string} transferID - Transfer identifier
 *
 * @example
 * {
  "transferID": "e23de6dd-5168-4e1d-894d-807fa691dc80"
}
 * @tag Transfers
 */
/**
 * @typedef TransferListCriteria
 * @property {string[]} [accountIDs] - Optional list of account IDs to filter sources and destinations
 * @property {string} [status] - Optional transfer status by which to filter the transfers
 * @property {string} [startDateTime] - Optional date-time which inclusively filters all transfers created after this starting date-time
 * @property {string} [endDateTime] - Optional date-time which exclusively filters all transfers created before this date-time
 * @property {number} [count] - Optional parameter to limit the number of results in the query
 * @property {number} [skip] - Optional number of items to offset before starting to collect the result set
 * @tag Transfers
 */
/**
 * Criteria for finding available payment types for a transfer.
 *
 * @typedef TransferOptionsCriteria
 * @property {object} [source] - `accountID` or `paymentMethodID`
 * @property {string} [source.accountID] - `accountID` associated with the transfer source
 * @property {string} [source.paymentMethodID] - `paymentMethodID` associated with the transfer source
 * @property {object} [destination] - `accountID` or `paymentMethodID`
 * @property {string} [destination.accountID] - `accountID` associated with the transfer destination
 * @property {string} [destination.paymentMethodID] - `paymentMethodID` associated with the transfer destination
 * @property {Amount} amount - Transfer amount represented by an integer value and its currency
 * @tag Transfers
 */
/**
 * @typedef TransferOptions
 * @property {string} paymentMethodID - `paymentMethodID` associated with a transfer
 * @property {"moov-wallet"|"ach-debit-fund"|"ach-debit-collect"|"ach-credit-standard"|"ach-credit-same-day"|"rtp-credit"|"card-payment"} paymentMethodType
 * @property {Wallet} wallet - Populated when `paymentMethodType` is `moov-wallet`
 * @property {BankAccount} bankAccount - Populated when `paymentMethodType` is one of the ACH or FTP variations
 * @property {Card} card - Populated when `paymentMethodType` is `card-payment`
 * @tag Transfers
 */
/**
 * @typedef AvailableTransferOptions
 * @property {TransferOptions[]} sourceOptions - Array of available payment methods for the source of a transfer
 * @property {TransferOptions[]} destinationOptions - Array of available payment methods for the destination of a transfer
 * @tag Transfers
 */
/**
 * @typedef Refund
 * @property {string} refundID - Refund identifier
 * @property {string} createdOn - Date-time the refund was created on
 * @property {string} updatedOn - Date-time the refund was updated on
 * @property {"created"|"pending"|"completed"|"failed"} status - Refund status
 * @property {Amount} amount - Refund amount
 * @tag Transfers
 */
/**
 * The Transfers API.
 * @tag Transfers
 */
export class Transfers {
    constructor(moov: any);
    /**
     * @type {Moov}
     * @private
     */
    private moov;
    /**
     * Creates a transfer to move money from a source to a destination.
     * The `TRANSFERS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {TransferCreate} transfer - Subset of the Transfer object
     * @param {string} [idempotencyKey] - Optional UUID to prevent duplicate transfers
     * @returns {Promise<TransferResponse>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const transfer = {
     *     source: { paymentMethodID: "..." },
     *     destination: { paymentMethodID: "..." },
     *     amount: {
     *       value: 3215, // $32.15
     *       currency: "USD"
     *     },
     *     facilitatorFee: {
     *       total: 8, // $0.08
     *     },
     *     description: "Yoga class"
     *   };
     *   const { transferID } = moov.transfers.create(transfer);
     * } catch (err) {
     *   // ...
     * }
     *
     */
    create(transfer: TransferCreate, idempotencyKey?: string | undefined): Promise<TransferResponse>;
    /**
     * Lists transfers that match the given criteria.
     * The `TRANSFERS_READ` scope enum is required when making a request from the browser.
     *
     * @param {TransferListCriteria} [criteria] - Optional properties by which to query and filter a transfer list
     * @returns {Promise<Transfer[]>} - Matching transfers
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const criteria = {
     *     accountIDs: ["...", "...", ...],
     *     status: "pending",
     *     startDateTime: new Date("1/1/2022").toISOString(), // inclusive
     *     endDateTime: new Date("2/1/2022").toISOString(), // exclusive
     *     count: 15,
     *     skip: 15, // start on page 2
     *   };
     *   const results = await moov.transfers.list(criteria);
     * } catch (err) {
     *   // ...
     * }
     */
    list(criteria?: TransferListCriteria | undefined): Promise<Transfer[]>;
    /**
     * Gets the details of a transfer.
     * The `TRANSFERS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} transferID - Transfer identifier
     * @returns {Promise<Transfer>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const transfer = await moov.transfers.get("...");
     * } catch (err) {
     *   // ...
     * }
     */
    get(transferID: string): Promise<Transfer>;
    /**
     * Update the metadata on a transfer.
     * The `TRANSFERS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} transferID - Transfer identifier
     * @param {object} metadata - Arbitrary key-value pairs
     * @returns {Promise<Transfer>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const transfer = await moov.transfers.updateMetadata(
     *     "...",
     *     { key: "value" }
     *   );
     * } catch (err) {
     *   // ...
     * }
     */
    updateMetadata(transferID: string, metadata: object): Promise<Transfer>;
    /**
     * Gets the available payment options for a transfer.
     * The `TRANSFERS_READ` scope enum is required when making a request from the browser.
     *
     * @param {TransferOptionsCriteria} transferOptionsCriteria - Criteria for available payment options
     * @returns {Promise<AvailableTransferOptions>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const options = moov.transfers.getTransferOptions({
     *     source: {
     *       accountID: "...",
     *       paymentMethodID: "..."
     *     },
     *     destination: {
     *       accountID: "...",
     *       paymentMethodID: "..."
     *     },
     *     amount: {
     *       value: 43350, // $433.50
     *       currency: "USD"
     *     }
     *   });
     * } catch (err) {
     *   // ...
     * }
     */
    getTransferOptions(transferOptionsCriteria: TransferOptionsCriteria): Promise<AvailableTransferOptions>;
    /**
     * Initiate a refund for a card transfer.
     * The `TRANSFERS_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} transferID - Transfer identifier
     * @param {string} [idempotencyKey] - Optional UUID to prevent duplicate refunds
     * @returns {Promise<TransferResponse>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const { transferID } = moov.transfers.refund(
     *    "...",
     *    { amount: 200 } // omit if creating a refund for the full amount
     *  );
     * } catch (err) {
     *   // ...
     * }
     */
    refund(transferID: string, idempotencyKey?: string | undefined, refund: any): Promise<TransferResponse>;
    /**
     * List refunds for a card transfer.
     * The `TRANSFERS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} transferID - Transfer identifier
     * @returns {Promise<Refund[]>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const refunds = moov.transfers.listRefunds("...");
     * } catch (err) {
     *   // ...
     * }
     */
    listRefunds(transferID: string): Promise<Refund[]>;
    /**
     * Get details of a specific refund.
     * The `TRANSFERS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} transferID - Transfer identifier
     * @param {string} refundID - Refund identifier
     * @returns {Promise<Refund>}
     * @tag Transfers
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const refund = moov.transfers.getRefund("...");
     * } catch (err) {
     *   // ...
     * }
     */
    getRefund(transferID: string, refundID: string): Promise<Refund>;
}
export type CardDetails = {
    /**
     * - An optional override of the default card statement descriptor for a transfer. Accounts must be enabled by Moov to set this field.
     */
    dynamicDescriptor: string;
    /**
     * - Enum: [recurring unscheduled] Describes how the card transaction was initiated
     */
    merchantInitiatedType: "recurring" | "unscheduled" | null;
};
/**
 * High-level account information associated with a payment method.
 */
export type PaymentMethodAccount = {
    /**
     * - Payment method identifier
     */
    accountID: string;
    /**
     * - Email associated with the payment method
     */
    email: string;
    /**
     * - Display name associated with the payment method
     */
    displayName: string;
};
export type BankAccount = {
    /**
     * - Bank Account identifier
     */
    bankAccountID: string;
    /**
     * - Fingerprint of the bank account
     */
    fingerprint: string;
    /**
     * - Bank account status
     */
    status: "new" | "verified" | "verificationFailed" | "pending" | "errored";
    /**
     * - Name of the account holder
     */
    holderName: string;
    /**
     * - Type of holder on a funding source
     */
    holderType: "individual" | "business";
    /**
     * - Name of the bank
     */
    bankName: string;
    bankAccountType: "checking" | "savings" | "unknown";
    /**
     * - Bank account routing number
     */
    routingNumber: string;
    /**
     * - Last four digits of the bank account number
     */
    lastFourAccountNumber: string;
};
export type Wallet = {
    /**
     * - Wallet identifier
     */
    walletID: string;
};
export type CardExpiration = {
    /**
     * 2 characters
     */
    month: string;
    /**
     * 2 characters
     */
    year: string;
};
/**
 * The results of submitting cardholder data to a card network for verification.
 */
export type CardVerification = {
    /**
     * - Card Verification Value status
     */
    cvv: "noMatch" | "match" | "notChecked" | "unavailable";
    /**
     * - Address status
     */
    addressLine1: "noMatch" | "match" | "notChecked" | "unavailable";
    /**
     * - Postal code status
     */
    postalCode: "noMatch" | "match" | "notChecked" | "unavailable";
};
export type Card = {
    /**
     * - Card identifier
     */
    cardID: string;
    /**
     * - Fingerprint of the card
     */
    fingerprint: string;
    /**
     * - Card brand
     */
    brand: "American Express" | "Discover" | "MasterCard" | "Visa";
    /**
     * - Card type
     */
    cardType: "debit" | "credit" | "prepaid" | "unknown";
    /**
     * - Last four digits of the card number
     */
    lastFourCardNumber: string;
    /**
     * - Bank Identification Number
     */
    bin: string;
    /**
     * - The card's expiration date
     */
    expiration: CardExpiration;
    /**
     * - The cardholder's name
     */
    holderName: string;
    /**
     * - The billing address associated with the card
     */
    billingAddress: Address;
    /**
     * - The results of submitting cardholder data to a card network for verification
     */
    cardVerification: CardVerification;
};
/**
 * Models the reason for an ACH return or correction.
 */
export type ACHCode = {
    /**
     * - Ach return code (for example, R01)
     */
    code: string;
    /**
     * - The network's reason for the return or correction (for example, insufficient funds)
     */
    reason: string;
    /**
     * - Explanation of the return code and reason
     */
    description: string;
};
export type ACHDetails = {
    /**
     * - ACH rail status
     */
    status: "initiated" | "originated" | "corrected" | "returned" | "completed";
    /**
     * - Tracking number that can be used by payment recipient to trace the payment with their external financial institution
     */
    traceNumber: string;
    /**
     * - ACH return information per Nacha specification
     */
    return?: ACHCode | undefined;
    /**
     * - ACH notification of change information per Nacha specification
     */
    correction?: ACHCode | undefined;
};
export type PaymentMethod = {
    /**
     * - Payment method identifier
     */
    paymentMethodID: string;
    /**
     * - Allowed payment method types
     */
    paymentMethodType: "moov-wallet" | "ach-debit-fund" | "ach-debit-collect" | "ach-credit-standard" | "ach-credit-same-day" | "rtp-credit" | "card-payment";
    /**
     * - Account information associated with the payment method
     */
    account: PaymentMethodAccount;
    /**
     * - Optional bank account object when payment method type is one of `ach-debit-fund`, `ach-debit-collect`, `ach-credit-standard`, or `ach-credit-same-day`
     */
    bankAccount?: BankAccount | undefined;
    /**
     * - Optional card object when payment method type is one of `card-payment` or `apple-pay`
     */
    card?: Card | undefined;
    /**
     * - Optional wallet object when payment method type is `moov-wallet`
     */
    wallet?: Wallet | undefined;
    /**
     * - Information about ACH transfers and status details
     */
    achDetails?: ACHDetails | undefined;
    /**
     * - Statement descriptor and recurring flag for card payments
     */
    cardDetails?: CardDetails | undefined;
};
export type Amount = {
    /**
     * - Integer quantity in the smallest unit of the specified currency. In USD this is cents, so $12.04 is 1204 and $0.99 would be 99.
     */
    value: number;
    /**
     * - 3 letter ISO 4217 currency code
     */
    currency: string;
};
export type Refund = {
    /**
     * - Refund identifier
     */
    refundID: string;
    /**
     * - Date-time the refund was created on
     */
    createdOn: string;
    /**
     * - Date-time the refund was updated on
     */
    updatedOn: string;
    /**
     * - Refund status
     */
    status: "created" | "pending" | "completed" | "failed";
    /**
     * - Refund amount
     */
    amount: Amount;
};
export type Transfer = {
    /**
     * - Transfer identifier
     */
    transferID: string;
    /**
     * - Deprecated (now createdOn)
     */
    createdAt: string;
    /**
     * - Date-time the transfer was created on
     */
    createdOn: string;
    /**
     * - Transfer status
     */
    status: "created" | "pending" | "completed" | "failed" | "reversed";
    /**
     * - `paymentMethodID` or `transferID`
     */
    source: PaymentMethod;
    /**
     * - `paymentMethodID`
     */
    destination: PaymentMethod;
    /**
     * - Transfer amount
     */
    amount: Amount;
    /**
     * - Transfer description (128 characters max)
     */
    description: string;
    /**
     * - Arbitrary key-value pairs
     */
    metadata: object;
    /**
     * - The total refunded amount
     */
    refundedAmount?: Amount | undefined;
    /**
     * - Array of refunds associated with the transfer
     */
    refunds: Refund[];
    /**
     * - Total or markup fee
     */
    facilitatorFee: object;
    /**
     * - Integer quantity of Moov fee in USD, so $0.11 would be 11
     */
    moovFee: number;
    /**
     * - The precise fee charged - supports up to 9 decimals
     */
    moovFeeDecimal: string;
};
export type TransferCreate = {
    /**
     * - `paymentMethodID` or `transferID`
     */
    source: PaymentMethod;
    /**
     * - `paymentMethodID`
     */
    destination: PaymentMethod;
    /**
     * - Transfer amount represented by an integer value and its currency
     */
    amount: Amount;
    /**
     * - Total or markup fee
     */
    facilitatorFee: object;
    /**
     * - Transfer description (128 characters max)
     */
    description: string;
    /**
     * - Arbitrary key-value pairs
     */
    metadata: object;
};
export type TransferResponse = {
    /**
     * - Transfer identifier
     */
    transferID: string;
};
export type TransferListCriteria = {
    /**
     * - Optional list of account IDs to filter sources and destinations
     */
    accountIDs?: string[] | undefined;
    /**
     * - Optional transfer status by which to filter the transfers
     */
    status?: string | undefined;
    /**
     * - Optional date-time which inclusively filters all transfers created after this starting date-time
     */
    startDateTime?: string | undefined;
    /**
     * - Optional date-time which exclusively filters all transfers created before this date-time
     */
    endDateTime?: string | undefined;
    /**
     * - Optional parameter to limit the number of results in the query
     */
    count?: number | undefined;
    /**
     * - Optional number of items to offset before starting to collect the result set
     */
    skip?: number | undefined;
};
/**
 * Criteria for finding available payment types for a transfer.
 */
export type TransferOptionsCriteria = {
    /**
     * - `accountID` or `paymentMethodID`
     */
    source?: {
        /**
         * - `accountID` associated with the transfer source
         */
        accountID?: string | undefined;
        /**
         * - `paymentMethodID` associated with the transfer source
         */
        paymentMethodID?: string | undefined;
    } | undefined;
    /**
     * - `accountID` or `paymentMethodID`
     */
    destination?: {
        /**
         * - `accountID` associated with the transfer destination
         */
        accountID?: string | undefined;
        /**
         * - `paymentMethodID` associated with the transfer destination
         */
        paymentMethodID?: string | undefined;
    } | undefined;
    /**
     * - Transfer amount represented by an integer value and its currency
     */
    amount: Amount;
};
export type TransferOptions = {
    /**
     * - `paymentMethodID` associated with a transfer
     */
    paymentMethodID: string;
    paymentMethodType: "moov-wallet" | "ach-debit-fund" | "ach-debit-collect" | "ach-credit-standard" | "ach-credit-same-day" | "rtp-credit" | "card-payment";
    /**
     * - Populated when `paymentMethodType` is `moov-wallet`
     */
    wallet: Wallet;
    /**
     * - Populated when `paymentMethodType` is one of the ACH or FTP variations
     */
    bankAccount: BankAccount;
    /**
     * - Populated when `paymentMethodType` is `card-payment`
     */
    card: Card;
};
export type AvailableTransferOptions = {
    /**
     * - Array of available payment methods for the source of a transfer
     */
    sourceOptions: TransferOptions[];
    /**
     * - Array of available payment methods for the destination of a transfer
     */
    destinationOptions: TransferOptions[];
};
import { Address } from "./address.js";
