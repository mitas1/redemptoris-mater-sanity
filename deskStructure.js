import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => !["mainArticle"].includes(listItem.getId());

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Main Article")
                .child(
                    S.editor()
                        .id("main-article")
                        .schemaType("mainArticle")
                        .documentId("main-article"),
                ),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ]);
