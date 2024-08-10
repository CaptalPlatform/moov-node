export const unused: {};
export type Address = {
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
