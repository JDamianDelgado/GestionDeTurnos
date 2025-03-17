"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.password = exports.username = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT || 3000;
exports.username = process.env.envDSourceusername;
exports.password = process.env.envDSourcepassword;
exports.database = process.env.envDSourcedatabase;
