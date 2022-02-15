# import-sort-style-module

A style for [import-sort](https://github.com/renke/import-sort) that designed for react projects.

```js
// Absolute modules with side effects (not sorted because order may matter)
import "a";
import "c";
import "b";

// Relative modules with side effects (not sorted because order may matter)
import "./a";
import "./c";
import "./b";

// Modules from the Node.js "standard" library sorted by name
import {readFile, writeFile} from "fs";
import * as path from "path";

// Third-party modules sorted by name
import aa from "aa";
import bb from "bb";
import cc from "cc";

// Hook
import … from "@hook";

// Components
import … from "@components";

// Contexts
import … from "@contexts";

// Utils
import … from "@utils";

// Config
import ... from "@config";

// Others
import … from "@foo";

// First-party modules sorted by "relative depth" and then by name
import aaa from "../../aaa";
import bbb from "../../bbb";
import aaaa from "../aaaa";
import bbbb from "../bbbb";
import aaaaa from "./aaaaa";
import bbbbb from "./bbbbb";
```
