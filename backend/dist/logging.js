"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogFunctionExtension = exports.LogStep = exports.LogAction = void 0;
const graphql_1 = require("graphql");
var LogAction;
(function (LogAction) {
    LogAction[LogAction["request"] = 0] = "request";
    LogAction[LogAction["parse"] = 1] = "parse";
    LogAction[LogAction["validation"] = 2] = "validation";
    LogAction[LogAction["execute"] = 3] = "execute";
    LogAction[LogAction["setup"] = 4] = "setup";
    LogAction[LogAction["cleanup"] = 5] = "cleanup";
})(LogAction || (exports.LogAction = LogAction = {}));
var LogStep;
(function (LogStep) {
    LogStep[LogStep["start"] = 0] = "start";
    LogStep[LogStep["end"] = 1] = "end";
    LogStep[LogStep["status"] = 2] = "status";
})(LogStep || (exports.LogStep = LogStep = {}));
// A GraphQLExtension that implements the existing logFunction interface. Note
// that now that custom extensions are supported, you may just want to do your
// logging as a GraphQLExtension rather than write a LogFunction.
class LogFunctionExtension {
    constructor(logFunction) {
        this.logFunction = logFunction;
    }
    requestDidStart(options) {
        this.logFunction({ action: LogAction.request, step: LogStep.start });
        const loggedQuery = options.queryString || (0, graphql_1.print)(options.parsedQuery);
        this.logFunction({
            action: LogAction.request,
            step: LogStep.status,
            key: "query",
            data: loggedQuery,
        });
        this.logFunction({
            action: LogAction.request,
            step: LogStep.status,
            key: "variables",
            data: options.variables,
        });
        this.logFunction({
            action: LogAction.request,
            step: LogStep.status,
            key: "operationName",
            data: options.operationName,
        });
        return (...errors) => {
            // If there are no errors, we log in willSendResponse instead.
            if (errors.length) {
                this.logFunction({ action: LogAction.request, step: LogStep.end });
            }
        };
    }
    parsingDidStart() {
        this.logFunction({ action: LogAction.parse, step: LogStep.start });
        return () => {
            this.logFunction({ action: LogAction.parse, step: LogStep.end });
        };
    }
    validationDidStart() {
        this.logFunction({ action: LogAction.validation, step: LogStep.start });
        return () => {
            this.logFunction({ action: LogAction.validation, step: LogStep.end });
        };
    }
    executionDidStart() {
        this.logFunction({ action: LogAction.execute, step: LogStep.start });
        return () => {
            this.logFunction({ action: LogAction.execute, step: LogStep.end });
        };
    }
    willSendResponse(o) {
        this.logFunction({
            action: LogAction.request,
            step: LogStep.end,
            key: "response",
            data: o.graphqlResponse,
        });
    }
}
exports.LogFunctionExtension = LogFunctionExtension;
