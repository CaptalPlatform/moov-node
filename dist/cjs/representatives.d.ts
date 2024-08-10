/** @external Promise */
/**
 * Describes an individual who represents the business.
 * @typedef Representative
 * @property {string} representativeID - Representative identifier
 * @property {RepresentativeName} name - Name for an individual
 * @property {RepresentativePhone} phone - Phone for an individual
 * @property {string} email - Email Address.  string <email> <= 255 characters
 * @property {RepresentativeAddress} address - Address for an individual.
 * @property {boolean} birthDateProvided - Indicates whether this Representative's birth date has been provided
 * @property {boolean} governmentIDProvided - Indicates whether a government ID (SSN, ITIN, etc.) has been provided for this Representative
 * @property {RepresentativeResponsibilities} responsibilities - Describes the job responsibilities of an individual
 * @property {Date} createdOn - Date Representative was created
 * @property {Date} updatedOn - Date Representative was last updated
 * @property {Date} disabledOn - Optional date Representative was disabled
 *
 * @example
 * {
  "representativeID": "ec7e1848-dc80-4ab0-8827-dd7fc0737b43",
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
  "birthDateProvided": false,
  "governmentIDProvided": false,
  "responsibilities": {
    "isController": false,
    "isOwner": true,
    "ownershipPercentage": 38,
    "jobTitle": "CEO"
  },
  "createdOn": "2019-08-24T14:15:22Z",
  "updatedOn": "2019-08-24T14:15:22Z",
  "disabledOn": "2019-08-24T14:15:22Z"
}
 *
 * @tag Representatives
 */
/**
 * Representative name
 * @typedef RepresentativeName
 * @property {string} firstName - Name this person was given. This is usually the same as first name.  string <= 64 characters
 * @property {string} middleName - Name this person was given. This is usually the same as middle name.  string <= 64 characters
 * @property {string} lastName - Family name of this person. This is usually the same as last name.  string <= 64 characters
 * @property {string} suffix - Suffix of a given name.  string <= 20 characters
 *
 * @tag Representatives
 */
/**
 * Representative phone
 * @typedef RepresentativePhone
 * @property {string} number - string <phone> <= 10 characters
 * @property {string} countryCode - string <= 1 characters
 *
 * @tag Representatives
 */
/**
 * @typedef RepresentativeAddress
 * @property {string} addressLine1 - string <= 32 characters
 * @property {string} addressLine2 - string <= 32 characters
 * @property {string} city - string <= 24 characters
 * @property {string} stateOrProvince - string <= 2 characters
 * @property {string} postalCode - string <= 5 characters
 * @property {string} country - string <= 2 characters
 *
 * @tag Representatives
 */
/**
 * @typedef RepresentativeResponsibilities
 * @property {boolean} isController - Indicates whether this individual has significant management responsibilities within the business
 * @property {boolean} isOwner - Indiciates whether this individual has an ownership stake of at least 25% in the business
 * @property {number} ownershipPercentage - The percentage of ownership this individual has in the business (required if `isOwner` is `true`)
 * @property {string} jobTitle - string <= 64 characters
 *
 * @tag Representatives
 */
/**
 * @typedef RepresentativeBirthDate
 * @property {number} day - 1 or 2 digit day of birth
 * @property {number} month - 1 or 2 digit month of birth
 * @property {number} year - 4 digit year of birth
 *
 * @tag Representatives
 */
/**
 * @typedef GovernmentID
 * @property {string} full - string <= 64 characters
 * @property {string} lastFour - string <= 4 characters
 *
 * @tag Representatives
 */
/**
 * @typedef RepresentativeGovernmentID
 * @property {GovernmentID} ssn - Social Security Number
 * @property {GovernmentID} itin - Individual Taxpayer Identification Number
 *
 * @tag Representatives
 */
/**
 * @typedef RepresentativeCreateUpdate
 * @property {RepresentativeName} name - Name for an individual
 * @property {RepresentativePhone} phone - Phone for an individual
 * @property {string} email - Email Address.  string <email> <= 255 characters
 * @property {RepresentativeAddress} address - Address for an individual
 * @property {RepresentativeBirthDate} birthDate - Birth date for an individual
 * @property {RepresentativeGovernmentID} governmentID - Social Security Number, or Individual Taxpayer Identification Number
 * @property {RepresentativeResponsibilities} responsibilities - Describes the job responsibilities of an individual
 *
 * @tag Representatives
 */
/**
 * The Representatives API
 * @tag Representatives
 */
export class Representatives {
    constructor(moov: any);
    moov: any;
    /**
     * Create representative
     * The `REPRESENTATIVE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add representative
     * @param {RepresentativeCreateUpdate} representative - Representative to add
     * @returns {Promise<Representative>}
     *
     * @tag Representatives
     */
    create(accountID: string, representative: RepresentativeCreateUpdate): Promise<Representative>;
    /**
     * List representatives
     * The `REPRESENTATIVE_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add representative
     * @returns {Promise<Representative[]>}
     *
     * @tag Representatives
     */
    list(accountID: string): Promise<Representative[]>;
    /**
     * Retrieve a specific representative associated with a given Moov account.
     * The `REPRESENTATIVE_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add representative
     * @param {string} representativeID - Identifier of representative to retrieve
     * @returns {Promise<Representative>}
     *
     * @tag Representatives
     */
    get(accountID: string, representativeID: string): Promise<Representative>;
    /**
     * Deletes a business representative associated with a Moov account.
     * The `REPRESENTATIVE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add representative
     * @param {string} representativeID - Identifier of representative to retrieve
     * @returns {Promise<void>}
     *
     * @tag Representatives
     */
    delete(accountID: string, representativeID: string): Promise<void>;
    /**
     * Update a specific representative.
     * The `REPRESENTATIVE_WRITE` scope enum is required when making a request from the browser.
     *
     * @param {string} accountID - Account on which to add representative
     * @param {string} representativeID - Identifier of representative to retrieve
     * @param {RepresentativeCreateUpdate} representative - Representative to add
     * @returns {Promise<Representative>}
     *
     * @tag Representatives
     */
    update(accountID: string, representativeID: string, representative: RepresentativeCreateUpdate): Promise<Representative>;
}
/**
 * Describes an individual who represents the business.
 */
export type Representative = {
    /**
     * - Representative identifier
     */
    representativeID: string;
    /**
     * - Name for an individual
     */
    name: RepresentativeName;
    /**
     * - Phone for an individual
     */
    phone: RepresentativePhone;
    /**
     * - Email Address.  string <email> <= 255 characters
     */
    email: string;
    /**
     * - Address for an individual.
     */
    address: RepresentativeAddress;
    /**
     * - Indicates whether this Representative's birth date has been provided
     */
    birthDateProvided: boolean;
    /**
     * - Indicates whether a government ID (SSN, ITIN, etc.) has been provided for this Representative
     */
    governmentIDProvided: boolean;
    /**
     * - Describes the job responsibilities of an individual
     */
    responsibilities: RepresentativeResponsibilities;
    /**
     * - Date Representative was created
     */
    createdOn: Date;
    /**
     * - Date Representative was last updated
     */
    updatedOn: Date;
    /**
     * - Optional date Representative was disabled
     */
    disabledOn: Date;
};
/**
 * Representative name
 */
export type RepresentativeName = {
    /**
     * - Name this person was given. This is usually the same as first name.  string <= 64 characters
     */
    firstName: string;
    /**
     * - Name this person was given. This is usually the same as middle name.  string <= 64 characters
     */
    middleName: string;
    /**
     * - Family name of this person. This is usually the same as last name.  string <= 64 characters
     */
    lastName: string;
    /**
     * - Suffix of a given name.  string <= 20 characters
     */
    suffix: string;
};
/**
 * Representative phone
 */
export type RepresentativePhone = {
    /**
     * - string <phone> <= 10 characters
     */
    number: string;
    /**
     * - string <= 1 characters
     */
    countryCode: string;
};
export type RepresentativeAddress = {
    /**
     * - string <= 32 characters
     */
    addressLine1: string;
    /**
     * - string <= 32 characters
     */
    addressLine2: string;
    /**
     * - string <= 24 characters
     */
    city: string;
    /**
     * - string <= 2 characters
     */
    stateOrProvince: string;
    /**
     * - string <= 5 characters
     */
    postalCode: string;
    /**
     * - string <= 2 characters
     */
    country: string;
};
export type RepresentativeResponsibilities = {
    /**
     * - Indicates whether this individual has significant management responsibilities within the business
     */
    isController: boolean;
    /**
     * - Indiciates whether this individual has an ownership stake of at least 25% in the business
     */
    isOwner: boolean;
    /**
     * - The percentage of ownership this individual has in the business (required if `isOwner` is `true`)
     */
    ownershipPercentage: number;
    /**
     * - string <= 64 characters
     */
    jobTitle: string;
};
export type RepresentativeBirthDate = {
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
export type GovernmentID = {
    /**
     * - string <= 64 characters
     */
    full: string;
    /**
     * - string <= 4 characters
     */
    lastFour: string;
};
export type RepresentativeGovernmentID = {
    /**
     * - Social Security Number
     */
    ssn: GovernmentID;
    /**
     * - Individual Taxpayer Identification Number
     */
    itin: GovernmentID;
};
export type RepresentativeCreateUpdate = {
    /**
     * - Name for an individual
     */
    name: RepresentativeName;
    /**
     * - Phone for an individual
     */
    phone: RepresentativePhone;
    /**
     * - Email Address.  string <email> <= 255 characters
     */
    email: string;
    /**
     * - Address for an individual
     */
    address: RepresentativeAddress;
    /**
     * - Birth date for an individual
     */
    birthDate: RepresentativeBirthDate;
    /**
     * - Social Security Number, or Individual Taxpayer Identification Number
     */
    governmentID: RepresentativeGovernmentID;
    /**
     * - Describes the job responsibilities of an individual
     */
    responsibilities: RepresentativeResponsibilities;
};
