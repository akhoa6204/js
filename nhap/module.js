import logger from './logger/logger.js';
// c1 
// import {
//     typeLog,
//     typeWarn,
//     typeError
// } from './constant.js';

// c2 
import * as constant from './constant.js';

// cả 2 đều dùng để import 1 thư viện k sử dụng export default 
console.log(constant) 
logger('Test mesage...', constant.typeError)    