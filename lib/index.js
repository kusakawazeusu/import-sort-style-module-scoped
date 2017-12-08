"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { alias, and, not, dotSegmentCount, hasNoMember, isAbsoluteModule, isNodeModule, isRelativeModule, moduleName, naturally, unicode, } = styleApi;
    function isScopedModule(imported) {
        return imported.moduleName[0] === '@';
    }
    return [
        // import "foo"
        { match: and(hasNoMember, isAbsoluteModule) },
        { separator: true },
        // import "./foo"
        { match: and(hasNoMember, isRelativeModule) },
        { separator: true },
        // import … from "fs";
        {
            match: isNodeModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "foo";
        {
            match: and(isAbsoluteModule, not(isScopedModule)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "foo";
        {
            match: isScopedModule,
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "./foo";
        // import … from "../foo";
        {
            match: isRelativeModule,
            sort: [dotSegmentCount, moduleName(naturally)],
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
    ];
}
exports.default = default_1;