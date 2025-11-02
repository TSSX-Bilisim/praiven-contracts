"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  JobNames: () => JobNames,
  QueueNames: () => QueueNames,
  RequestUserRole: () => RequestUserRole
});
module.exports = __toCommonJS(index_exports);

// src/auth/enums/request-user-role.ts
var RequestUserRole = /* @__PURE__ */ ((RequestUserRole2) => {
  RequestUserRole2["ADMIN"] = "ADMIN";
  RequestUserRole2["USER"] = "USER";
  RequestUserRole2["SYSTEM"] = "SYSTEM";
  return RequestUserRole2;
})(RequestUserRole || {});

// src/queue/enums/job-names.enum.ts
var JobNames = /* @__PURE__ */ ((JobNames2) => {
  JobNames2["FILTER_MESSAGE"] = "filter-message";
  return JobNames2;
})(JobNames || {});

// src/queue/enums/queue-names.enum.ts
var QueueNames = /* @__PURE__ */ ((QueueNames2) => {
  QueueNames2["FILTER_QUEUE"] = "filter-queue";
  return QueueNames2;
})(QueueNames || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JobNames,
  QueueNames,
  RequestUserRole
});
//# sourceMappingURL=index.js.map