import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import article from "./article";
import author from "./author";
import blockContent from "./blockContent";
import mainArticle from "./mainArticle";
import settings from "./settings";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        article,
        author,
        blockContent,
        mainArticle,
        settings,
    ]),
});
