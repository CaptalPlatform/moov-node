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
exports.Avatars = void 0;
const checks_js_1 = require("./helpers/checks.js");
const errors_js_1 = require("./helpers/errors.js");
/**
 * The Avatars API.
 * @tag Avatars
 */
class Avatars {
    constructor(moov) {
        /**
         * @type {Moov}
         * @private
         */
        this.moov = moov;
    }
    /**
     * Gets a binary representation of an avatar.
     * The `PROFILE_ENRICHMENT_READ` scope enum is required when making a request from the browser.
     *
     * @param {string} uniqueId - Any unique ID associated with an account such as AccountID, RepresentativeID, Routing Number, or User ID
     * @returns {Promise<Blob>} - Binary representation of the avatar.
     * @tag Avatars
     *
     * @example
     * const moov = new Moov(...);
     * try {
     *   const avatar = await moov.avatars.get("...");
     * } catch (err) {
     *   // ...
     * }
     */
    get(uniqueId) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, checks_js_1.checkString)(uniqueId).or(errors_js_1.Err.MISSING_UNIQUE_ID);
            const result = yield this.moov
                .got({
                url: `avatars/${uniqueId}`,
                method: "GET",
            })
                .blob();
            return result;
        });
    }
}
exports.Avatars = Avatars;
