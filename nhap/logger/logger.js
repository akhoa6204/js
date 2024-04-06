import {
    typeLog,
    typeWarn,
    typeError
} from '../constant.js';

var logger = (log, type = typeLog) => console[type](log)

export default logger