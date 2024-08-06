import { translate } from "../transaltion.js";

String.prototype.translate = function(key, lang){ return translate('keys.'+key, lang, this) }
