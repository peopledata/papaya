var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { agent } from './setup.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const identifiers = yield agent.didManagerFind();
        console.log(`There are ${identifiers.length} identifiers`);
        if (identifiers.length > 0) {
            identifiers.map((id) => {
                console.log(id);
                console.log('..................');
            });
        }
    });
}
main().catch(console.log);
