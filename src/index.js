"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styleApi) {
    const { alias, and, not, dotSegmentCount, hasNoMember, isAbsoluteModule, isNodeModule, isRelativeModule, moduleName, unicode, } = styleApi;
    function isScopedModule(imported) {
        return imported.moduleName[0] === '@';
    }
    function isHook(imported) {
        return imported.moduleName.startsWith("@hook");
    }
    function isComponent(imported) {
        return imported.moduleName.startsWith("@components");
    }
    function isContext(imported) {
        return imported.moduleName.startsWith("@contexts");
    }
    function isUtils(imported) {
        return imported.moduleName.startsWith("@utils");
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
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "foo";
        {
            match: and(isAbsoluteModule, not(isScopedModule)),
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "@hook";
        {
            match: and(isHook, isScopedModule),
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "@foo";
        {
            match: isScopedModule,
            sort: moduleName(unicode),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        // import … from "./foo";
        // import … from "../foo";
        {
            match: isRelativeModule,
            sort: [dotSegmentCount, moduleName(unicode)],
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
    ];
}
exports.default = default_1;
