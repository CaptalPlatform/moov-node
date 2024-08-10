/** @external Promise */
/**
 * Describes a Moov account associated with an individual or a business.
 * @typedef Account
 * @property {string} accountID - Account identifier
 * @property {"individual"|"business"} accountType - Type of entity represented by this account
 * @property {string} displayName - Name of individual or business
 * @property {Profile} profile - Details for individual or business
 * @property {object} metadata - Arbitrary key-value pairs
 * @property {string} foreignID - Optional identification or alias
 * @property {AccountVerification} verification - Describes identity verification status and relevant identity verification documents
 * @property {CustomerSupport|null} customerSupport - Displayed on credit card transactions (business only)
 * @property {AccountSettings|null} settings - Account settings
 * @property {string} createdOn - Date account was created
 * @property {string} updatedOn - Date account was last updated
 *
 * @example
 * {
  "accountType": "business",
  "profile": {
    "business": {
      "legalBusinessName": "Whole Body Fitness LLC",
      "doingBusinessAs": "Whole Body Fitness",
      "businessType": "llc",
      "address": {
        "addressLine1": "123 Main Street",
        "addressLine2": "Apt 302",
        "city": "Boulder",
        "stateOrProvince": "CO",
        "postalCode": "80301",
        "country": "US"
      },
      "phone": {
        "number": "8185551212",
        "countryCode": "1"
      },
      "email": "amanda@classbooker.dev",
      "website": "www.wholebodyfitnessgym.com",
      "description": "Local fitness center paying out instructors",
      "taxID": {
        "ein": {
          "number": "123-45-6789"
        }
      },
      "industryCodes": {
        "naics": "713940",
        "sic": "7991",
        "mcc": "7997"
      }
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "termsOfService": {
    "token": "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4"
  },
  "foreignID": "4528aba-b9a1-11eb-8529-0242ac13003",
  "customerSupport": {
    "phone": {
      "number": "8185551212",
      "countryCode": "1"
    },
    "email": "amanda@classbooker.dev",
    "address": {
      "addressLine1": "123 Main Street",
      "addressLine2": "Apt 302",
      "city": "Boulder",
      "stateOrProvince": "CO",
      "postalCode": "80301",
      "country": "US"
    },
    "website": "www.wholebodyfitnessgym.com"
  },
  "settings": {
    "cardPayment": {
      "statementDescriptor": "Whole Body Fitness"
    }
  }
}
 *
 * @tag Accounts
 */
/**
 * @typedef AccountCreate
 * @property {"individual"|"business"} accountType - Type of entity represented by this account
 * @property {ProfileCreate} profile - Details for individual or business
 * @property {object} metadata - Arbitrary key-value pairs
 * @property {TermsOfServiceToken|null} termsOfService - An encrypted value used to record acceptance of Moov's Terms of Service
 * @property {string} foreignID - Optional identification or alias
 * @property {CustomerSupport|null} customerSupport - Displayed on credit card transactions (business only)
 * @property {AccountSettings|null} settings - Account settings
 *
 * @example
 * {
  "mode": "production",
  "accountType": "business",
  "profile": {
    "individual": {
      "name": {
        "firstName": "Amanda",
        "middleName": "Amanda",
        "lastName": "Yang",
        "suffix": "Jr"
      },
      "phone": {
        "number": "8185551212",
        "countryCode": "1"
      },
      "email": "amanda@classbooker.dev",
      "address": {
        "addressLine1": "123 Main Street",
        "addressLine2": "Apt 302",
        "city": "Boulder",
        "stateOrProvince": "CO",
        "postalCode": "80301",
        "country": "US"
      },
      "birthDate": {
        "day": 9,
        "month": 11,
        "year": 1989
      },
      "governmentID": {
        "ssn": {
          "full": "123-45-6789",
          "lastFour": "6789"
        },
        "itin": {
          "full": "123-45-6789",
          "lastFour": "6789"
        }
      }
    },
    "business": {
      "legalBusinessName": "Whole Body Fitness LLC",
      "doingBusinessAs": "Whole Body Fitness",
      "businessType": "llc",
      "address": {
        "addressLine1": "123 Main Street",
        "addressLine2": "Apt 302",
        "city": "Boulder",
        "stateOrProvince": "CO",
        "postalCode": "80301",
        "country": "US"
      },
      "phone": {
        "number": "8185551212",
        "countryCode": "1"
      },
      "email": "amanda@classbooker.dev",
      "website": "www.wholebodyfitnessgym.com",
      "description": "Local fitness center paying out instructors",
      "taxID": {
        "ein": {
          "number": "123-45-6789"
        }
      },
      "industryCodes": {
        "naics": "713940",
        "sic": "7991",
        "mcc": "7997"
      }
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "termsOfService": {
    "token": "kgT1uxoMAk7QKuyJcmQE8nqW_HjpyuXBabiXPi6T83fUQoxsyWYPcYzuHQTqrt7YRp4gCwyDQvb6U5REM9Pgl2EloCe35t-eiMAbUWGo3Kerxme6aqNcKrP_6-v0MTXViOEJ96IBxPFTvMV7EROI2dq3u4e-x4BbGSCedAX-ViAQND6hcreCDXwrO6sHuzh5Xi2IzSqZHxaovnWEboaxuZKRJkA3dsFID6fzitMpm2qrOh4"
  },
  "foreignID": "4528aba-b9a1-11eb-8529-0242ac13003",
  "customerSupport": {
    "phone": {
      "number": "8185551212",
      "countryCode": "1"
    },
    "email": "amanda@classbooker.dev",
    "address": {
      "addressLine1": "123 Main Street",
      "addressLine2": "Apt 302",
      "city": "Boulder",
      "stateOrProvince": "CO",
      "postalCode": "80301",
      "country": "US"
    },
    "website": "www.wholebodyfitnessgym.com"
  },
  "settings": {
    "cardPayment": {
      "statementDescriptor": "Whole Body Fitness"
    }
  }
}
 * @tag Accounts
 */
/**
 * A token that can then be used to accept Moov's Terms of Service. Must be generated from a web browser. See the [Moovjs](/moovjs/accounts/accounts/#platform-terms-of-service-agreement) documentation for more details.
 * @typedef TermsOfServiceToken
 * @property {string} token - An encrypted value used to record acceptance of Moov's Terms of Service
 * @tag Accounts
 */
/**
 * A person's name.
 * @typedef Name
 * @property {string} firstName - A person's first name
 * @property {string} middleName - A person's middle name
 * @property {string} lastName - A person's last name
 * @property {string} suffix - A person's suffix
 * @tag Accounts
 */
/**
 * Profile for a Moov acocunt. May be business or individual.
 * @typedef Profile
 * @property {BusinessProfile} [business] - A business account
 * @property {IndividualProfile} [individual] - An individual account
 * @tag Accounts
 */
/**
 * Describes a business account.
 * @typedef BusinessProfile
 * @property {string} legalBusinessName - Business's legal name
 * @property {string} doingBusinessAs - Business's trade name (if different than the legal name)
 * @property {"soleProprietorship"|"unincorporatedAssociation"|"trust"|"publicCorporation"|"privateCorporation"|"privateCorporation"|"llc"|"partnership"|"unincorporatedNonProfit"|"incorporatedNonProfit"} businessType - The legal registered type of the business
 * @property {Address} address - Business's address
 * @property {Phone} phone - Business's phone number
 * @property {string} email - Business's email
 * @property {string} website - Business's website
 * @property {string} description - Description of the business
 * @property {boolean} taxIDProvided - `true` if business's tax ID has been provided
 * @property {Representative[]} representatives
 * @property {boolean} ownersProvided - `true` if business owner(s) have been provided
 * @property {IndustryCodes} industryCodes - Business's industry code (for example, `mcc`)
 * @tag Accounts
 */
/**
 * Describes the individual associated with a non-business account.
 * @typedef IndividualProfile
 * @property {Name} name - Individual's name
 * @property {Phone} phone - Individual's phone number
 * @property {string} email - Individual's email address
 * @property {Address} address - Individual's address
 * @property {boolean} birthDateProvided - `true` if individual's birth date has been provided
 * @property {boolean} governmentIDProvided - `true` if individual's government-issued ID has been provided
 * @tag Accounts
 */
/**
 * Profile for a Moov acocunt. May be business or individual.
 * @typedef ProfileCreate
 * @property {BusinessProfileCreate} business - A business account
 * @property {IndividualProfileCreate} individual - An individual account
 * @tag Accounts
 */
/**
 * Describes a business account.
 * @typedef BusinessProfileCreate
 * @property {string} legalBusinessName - Business's legal name
 * @property {string} doingBusinessAs - Business's trade name (if different than the legal name)
 * @property {"soleProprietorship"|"unincorporatedAssociation"|"trust"|"publicCorporation"|"privateCorporation"|"privateCorporation"|"llc"|"partnership"|"unincorporatedNonProfit"|"incorporatedNonProfit"} businessType - The legal registered type of the business
 * @property {Address} address - Business's address
 * @property {Phone} phone - Business's phone number
 * @property {string} email - Business's email
 * @property {string} website - Business's website
 * @property {string} description - Description of the business
 * @property {TaxID} taxID - An EIN (employer identification number) for the business. For sole proprietors, an SSN can be used as the EIN.
 * @property {IndustryCodes} industryCodes - Business's industry code (for example, `mcc`)
 * @property {PrimaryRegulator} [primaryRegulator] - If the business is a financial institution, this field describes its primary regulator. (for example, `OCC`)
 * @tag Accounts
 */
/**
 * Describes the individual associated with a non-business account.
 * @typedef IndividualProfileCreate
 * @property {Name} name - Individual's name
 * @property {Phone} phone - Individual's phone number
 * @property {string} email - Individual's email address
 * @property {Address} address - Individual's address
 * @property {IndividualBirthDate} birthDate - Individual's birth date
 * @property {IndividualGovernmentID} governmentID - Government-issued ID for the business
 * @tag Accounts
 */
/**
 * @typedef Phone
 * @property {string} number - Phone number
 * @property {string} [countryCode] - 1 digit country code
 * @tag Accounts
 */
/**
 * Standard industry codes for businesses.
 * @typedef IndustryCodes
 * @property {string} naics - North American Industry Classification System
 * @property {string} sic - Standard Industry Classification
 * @property {string} mcc - Merchant Category Codes
 * @tag Accounts
 */
/**
 * Primary regulators for a financial institution.
 * @typedef {"OCC"|"FDIC"|"NCUA"|"FRB"} PrimaryRegulator
 * @tag Accounts
 */
/**
 * Describes a business account's tax identification number.
 * @typedef TaxID
 * @property {EIN} ein - Business's EIN (Employer Identification Number)
 * @tag Accounts
 */
/**
 * Describes a business account's tax identification number.
 * @typedef EIN
 * @property {string} number - EIN (Employer Identification Number)
 * @tag Accounts
 */
/**
 * Describes a Individual's birth date.
 * @typedef IndividualBirthDate
 * @property {number} day - 1 or 2 digit day of birth
 * @property {number} month - 1 or 2 digit month of birth
 * @property {number} year - 4 digit year of birth
 *
 * @tag Accounts
 */
/**
 * Describes a Individual's government ID.
 * @typedef IndividualGovernmentID
 * @property {GovernmentID} ssn - Individual's Social Security Number
 * @property {GovernmentID} itin - Individual's International Taxpayer Identification Number
 * @tag Accounts
 */
/**
 * Describes a Government ID number.
 * @typedef GovernmentID
 * @property {string} full - Full government ID number
 * @property {string} lastFour - Last four digits of government ID number
 * @tag Accounts
 */
/**
 * Describes an individual who represents a business account.
 * @typedef Representative
 * @property {Name} name - Representative's first and last name
 * @property {Phone} phone - Representative's phone number
 * @property {string} email - Representative's email address
 * @property {Address} address - Representative's address
 * @property {boolean} birthDateProvided - `true` if individual's birth date has been provided
 * @property {boolean} governmentIDProvided - `true` if individual's government-issued ID has been provided
 * @property {Responsibility[]} responsibilities
 * @property {string} createdOn - Date representative was recorded
 * @property {string} updatedOn - Date representative was last updated
 * @property {string} disabledOn - Date representative was removed from business
 * @tag Accounts
 */
/**
 * Describes the responsibilities associated with a business representative.
 * @typedef Responsibility
 * @property {boolean} isController - `true` if representative  has significant management responsibilities
 * @property {boolean} isOwner - `true` if representative owns ≥25% of the business
 * @property {number} ownershipPercentage - % of business representative owns (required if `isOwner` is `true`)
 * @property {string} jobTitle - Job title of representative (for example, CEO)
 * @tag Accounts
 */
/**
 * Describes the verification state of an account
 * @typedef AccountVerification
 * @property {"unverified"|"pending"|"resubmit"|"review"|"verified"|"failed"} verificationStatus - The status of an identity verification for a profile
 * @tag Accounts
 */
/**
 * Describes customer support contact information for a business account.
 * @typedef CustomerSupport
 * @property {Phone} phone - Customer support phone number
 * @property {string} email - Customer support email
 * @property {Address} address - Customer support address
 * @property {string} website - Customer support website
 * @tag Accounts
 */
/**
 * @typedef AccountSettings
 * @property {CardPaymentSettings} cardPayment - Card payment settings (business only)
 * @tag Accounts
 */
/**
 * @typedef CardPaymentSettings
 * @property {string} statementDescriptor - Description to display on credit card transactions
 * @tag Accounts
 */
/**
 * @typedef Countries
 * @property {string[]} countries - Countries of operation for an account
 * @tag Accounts
 */
/**
 * @typedef AccountListCriteria
 * @property {Name} name - If provided, this query will attempt to find matches (including partial) against the following Account and Profile fields: Account `displayName`, Individual Profile `firstName`, `middleName`, `lastName`, and `suffix`, and Business Profile `legalBusinessName`, and `doingBusinessAs`
 * @property {string} email - Filter connected accounts by email address. It is not necessary to provided the full email address as partial matches will also be returned.
 * @property {"individual"|"business"} type - Filter connected accounts by AccountType. If the `type` parameter is used in combination with name, only the corresponding type's `name` fields will be searched. For example, if `type=business` and `name=moov`, the search will attempt to find matches against the display name and Business Profile name fields (`legalBusinessName`, and `doingBusinessAs`).
 * @property {string} foreignID - Serves as an optional alias from a foreign/external system which can be used to reference this resource
 * @property {number} count - Optional parameter to limit the number of results in the query
 * @property {number} skip - The number of items to offset before starting to collect the result set
 * @tag Accounts
 */
/**
 * The Accounts API.
 * @tag Accounts
 */
export class Accounts {
    constructor(moov: any);
    moov: any;
    /**
     * Create a new connected account.
     * The `ACCOUNTS_CREATE` scope enum is required when making a request from the browser.
     *
     * @param {AccountCreate} account - New account details
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    create(account: AccountCreate): Promise<Account>;
    /**
     * Retrieves details for the list of accounts.
     * The `ACCOUNTS_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to query
     * @param {AccountListCriteria} criteria - Optional criteria to limit the list returned.
     * @returns {Promise<Account[]>}
     * @tag Accounts
     */
    list(accountID: string, criteria: AccountListCriteria): Promise<Account[]>;
    /**
     * Retrieves details for the account with the specified ID.
     * The `PROFILE_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} connectedAccountID - User account to query
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    get(connectedAccountID: string): Promise<Account>;
    /**
     * Updates an existing account. Requires a complete Account object.
     * The `PROFILE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {Account} account - Account to update
     * @returns {Promise<Account>}
     * @tag Accounts
     * @deprecated update call for accounts is deprecated, please use the patch call.
     */
    update(account: Account): Promise<Account>;
    /**
     * Updates an existing account. Does not require a complete Account object,
     * but the `accountID` property is required.
     * The `PROFILE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {Account} account - Account to update
     * @returns {Promise<Account>}
     * @tag Accounts
     */
    patch(account: Account): Promise<Account>;
    /**
     * Retrieve the specified countries of operation for an account.
     * The `PROFILE_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to query
     * @returns {Promise<Countries>}
     * @tag Accounts
     */
    getCountries(accountID: string): Promise<Countries>;
    /**
     * Assign the countries of operation for an account. This endpoint will always overwrite the previously assigned values.
     * The `PROFILE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account to query
     * @param {Countries} countries - Countries to add to the account
     * @returns {Promise<Countries>}
     * @tag Accounts
     */
    assignCountries(accountID: string, countries: Countries): Promise<Countries>;
}
/**
 * Describes a Moov account associated with an individual or a business.
 */
export type Account = {
    /**
     * - Account identifier
     */
    accountID: string;
    /**
     * - Type of entity represented by this account
     */
    accountType: "individual" | "business";
    /**
     * - Name of individual or business
     */
    displayName: string;
    /**
     * - Details for individual or business
     */
    profile: Profile;
    /**
     * - Arbitrary key-value pairs
     */
    metadata: object;
    /**
     * - Optional identification or alias
     */
    foreignID: string;
    /**
     * - Describes identity verification status and relevant identity verification documents
     */
    verification: AccountVerification;
    /**
     * - Displayed on credit card transactions (business only)
     */
    customerSupport: CustomerSupport | null;
    /**
     * - Account settings
     */
    settings: AccountSettings | null;
    /**
     * - Date account was created
     */
    createdOn: string;
    /**
     * - Date account was last updated
     */
    updatedOn: string;
};
export type AccountCreate = {
    /**
     * - Type of entity represented by this account
     */
    accountType: "individual" | "business";
    /**
     * - Details for individual or business
     */
    profile: ProfileCreate;
    /**
     * - Arbitrary key-value pairs
     */
    metadata: object;
    /**
     * - An encrypted value used to record acceptance of Moov's Terms of Service
     */
    termsOfService: TermsOfServiceToken | null;
    /**
     * - Optional identification or alias
     */
    foreignID: string;
    /**
     * - Displayed on credit card transactions (business only)
     */
    customerSupport: CustomerSupport | null;
    /**
     * - Account settings
     */
    settings: AccountSettings | null;
};
/**
 * A token that can then be used to accept Moov's Terms of Service. Must be generated from a web browser. See the [Moovjs](/moovjs/accounts/accounts/#platform-terms-of-service-agreement) documentation for more details.
 */
export type TermsOfServiceToken = {
    /**
     * - An encrypted value used to record acceptance of Moov's Terms of Service
     */
    token: string;
};
/**
 * A person's name.
 */
export type Name = {
    /**
     * - A person's first name
     */
    firstName: string;
    /**
     * - A person's middle name
     */
    middleName: string;
    /**
     * - A person's last name
     */
    lastName: string;
    /**
     * - A person's suffix
     */
    suffix: string;
};
/**
 * Profile for a Moov acocunt. May be business or individual.
 */
export type Profile = {
    /**
     * - A business account
     */
    business?: BusinessProfile | undefined;
    /**
     * - An individual account
     */
    individual?: IndividualProfile | undefined;
};
/**
 * Describes a business account.
 */
export type BusinessProfile = {
    /**
     * - Business's legal name
     */
    legalBusinessName: string;
    /**
     * - Business's trade name (if different than the legal name)
     */
    doingBusinessAs: string;
    /**
     * - The legal registered type of the business
     */
    businessType: "soleProprietorship" | "unincorporatedAssociation" | "trust" | "publicCorporation" | "privateCorporation" | "privateCorporation" | "llc" | "partnership" | "unincorporatedNonProfit" | "incorporatedNonProfit";
    /**
     * - Business's address
     */
    address: Address;
    /**
     * - Business's phone number
     */
    phone: Phone;
    /**
     * - Business's email
     */
    email: string;
    /**
     * - Business's website
     */
    website: string;
    /**
     * - Description of the business
     */
    description: string;
    /**
     * - `true` if business's tax ID has been provided
     */
    taxIDProvided: boolean;
    representatives: Representative[];
    /**
     * - `true` if business owner(s) have been provided
     */
    ownersProvided: boolean;
    /**
     * - Business's industry code (for example, `mcc`)
     */
    industryCodes: IndustryCodes;
};
/**
 * Describes the individual associated with a non-business account.
 */
export type IndividualProfile = {
    /**
     * - Individual's name
     */
    name: Name;
    /**
     * - Individual's phone number
     */
    phone: Phone;
    /**
     * - Individual's email address
     */
    email: string;
    /**
     * - Individual's address
     */
    address: Address;
    /**
     * - `true` if individual's birth date has been provided
     */
    birthDateProvided: boolean;
    /**
     * - `true` if individual's government-issued ID has been provided
     */
    governmentIDProvided: boolean;
};
/**
 * Profile for a Moov acocunt. May be business or individual.
 */
export type ProfileCreate = {
    /**
     * - A business account
     */
    business: BusinessProfileCreate;
    /**
     * - An individual account
     */
    individual: IndividualProfileCreate;
};
/**
 * Describes a business account.
 */
export type BusinessProfileCreate = {
    /**
     * - Business's legal name
     */
    legalBusinessName: string;
    /**
     * - Business's trade name (if different than the legal name)
     */
    doingBusinessAs: string;
    /**
     * - The legal registered type of the business
     */
    businessType: "soleProprietorship" | "unincorporatedAssociation" | "trust" | "publicCorporation" | "privateCorporation" | "privateCorporation" | "llc" | "partnership" | "unincorporatedNonProfit" | "incorporatedNonProfit";
    /**
     * - Business's address
     */
    address: Address;
    /**
     * - Business's phone number
     */
    phone: Phone;
    /**
     * - Business's email
     */
    email: string;
    /**
     * - Business's website
     */
    website: string;
    /**
     * - Description of the business
     */
    description: string;
    /**
     * - An EIN (employer identification number) for the business. For sole proprietors, an SSN can be used as the EIN.
     */
    taxID: TaxID;
    /**
     * - Business's industry code (for example, `mcc`)
     */
    industryCodes: IndustryCodes;
    /**
     * - If the business is a financial institution, this field describes its primary regulator. (for example, `OCC`)
     */
    primaryRegulator?: PrimaryRegulator | undefined;
};
/**
 * Describes the individual associated with a non-business account.
 */
export type IndividualProfileCreate = {
    /**
     * - Individual's name
     */
    name: Name;
    /**
     * - Individual's phone number
     */
    phone: Phone;
    /**
     * - Individual's email address
     */
    email: string;
    /**
     * - Individual's address
     */
    address: Address;
    /**
     * - Individual's birth date
     */
    birthDate: IndividualBirthDate;
    /**
     * - Government-issued ID for the business
     */
    governmentID: IndividualGovernmentID;
};
export type Phone = {
    /**
     * - Phone number
     */
    number: string;
    /**
     * - 1 digit country code
     */
    countryCode?: string | undefined;
};
/**
 * Standard industry codes for businesses.
 */
export type IndustryCodes = {
    /**
     * - North American Industry Classification System
     */
    naics: string;
    /**
     * - Standard Industry Classification
     */
    sic: string;
    /**
     * - Merchant Category Codes
     */
    mcc: string;
};
/**
 * Primary regulators for a financial institution.
 */
export type PrimaryRegulator = "OCC" | "FDIC" | "NCUA" | "FRB";
/**
 * Describes a business account's tax identification number.
 */
export type TaxID = {
    /**
     * - Business's EIN (Employer Identification Number)
     */
    ein: EIN;
};
/**
 * Describes a business account's tax identification number.
 */
export type EIN = {
    /**
     * - EIN (Employer Identification Number)
     */
    number: string;
};
/**
 * Describes a Individual's birth date.
 */
export type IndividualBirthDate = {
    /**
     * - 1 or 2 digit day of birth
     */
    day: number;
    /**
     * - 1 or 2 digit month of birth
     */
    month: number;
    /**
     * - 4 digit year of birth
     */
    year: number;
};
/**
 * Describes a Individual's government ID.
 */
export type IndividualGovernmentID = {
    /**
     * - Individual's Social Security Number
     */
    ssn: GovernmentID;
    /**
     * - Individual's International Taxpayer Identification Number
     */
    itin: GovernmentID;
};
/**
 * Describes a Government ID number.
 */
export type GovernmentID = {
    /**
     * - Full government ID number
     */
    full: string;
    /**
     * - Last four digits of government ID number
     */
    lastFour: string;
};
/**
 * Describes an individual who represents a business account.
 */
export type Representative = {
    /**
     * - Representative's first and last name
     */
    name: Name;
    /**
     * - Representative's phone number
     */
    phone: Phone;
    /**
     * - Representative's email address
     */
    email: string;
    /**
     * - Representative's address
     */
    address: Address;
    /**
     * - `true` if individual's birth date has been provided
     */
    birthDateProvided: boolean;
    /**
     * - `true` if individual's government-issued ID has been provided
     */
    governmentIDProvided: boolean;
    responsibilities: Responsibility[];
    /**
     * - Date representative was recorded
     */
    createdOn: string;
    /**
     * - Date representative was last updated
     */
    updatedOn: string;
    /**
     * - Date representative was removed from business
     */
    disabledOn: string;
};
/**
 * Describes the responsibilities associated with a business representative.
 */
export type Responsibility = {
    /**
     * - `true` if representative  has significant management responsibilities
     */
    isController: boolean;
    /**
     * - `true` if representative owns ≥25% of the business
     */
    isOwner: boolean;
    /**
     * - % of business representative owns (required if `isOwner` is `true`)
     */
    ownershipPercentage: number;
    /**
     * - Job title of representative (for example, CEO)
     */
    jobTitle: string;
};
/**
 * Describes the verification state of an account
 */
export type AccountVerification = {
    /**
     * - The status of an identity verification for a profile
     */
    verificationStatus: "unverified" | "pending" | "resubmit" | "review" | "verified" | "failed";
};
/**
 * Describes customer support contact information for a business account.
 */
export type CustomerSupport = {
    /**
     * - Customer support phone number
     */
    phone: Phone;
    /**
     * - Customer support email
     */
    email: string;
    /**
     * - Customer support address
     */
    address: Address;
    /**
     * - Customer support website
     */
    website: string;
};
export type AccountSettings = {
    /**
     * - Card payment settings (business only)
     */
    cardPayment: CardPaymentSettings;
};
export type CardPaymentSettings = {
    /**
     * - Description to display on credit card transactions
     */
    statementDescriptor: string;
};
export type Countries = {
    /**
     * - Countries of operation for an account
     */
    countries: string[];
};
export type AccountListCriteria = {
    /**
     * - If provided, this query will attempt to find matches (including partial) against the following Account and Profile fields: Account `displayName`, Individual Profile `firstName`, `middleName`, `lastName`, and `suffix`, and Business Profile `legalBusinessName`, and `doingBusinessAs`
     */
    name: Name;
    /**
     * - Filter connected accounts by email address. It is not necessary to provided the full email address as partial matches will also be returned.
     */
    email: string;
    /**
     * - Filter connected accounts by AccountType. If the `type` parameter is used in combination with name, only the corresponding type's `name` fields will be searched. For example, if `type=business` and `name=moov`, the search will attempt to find matches against the display name and Business Profile name fields (`legalBusinessName`, and `doingBusinessAs`).
     */
    type: "individual" | "business";
    /**
     * - Serves as an optional alias from a foreign/external system which can be used to reference this resource
     */
    foreignID: string;
    /**
     * - Optional parameter to limit the number of results in the query
     */
    count: number;
    /**
     * - The number of items to offset before starting to collect the result set
     */
    skip: number;
};
import { Address } from "./address.js";
