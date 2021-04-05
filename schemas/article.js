export const ARTICLE_FIELDS = [
    {
        name: "title",
        title: "Titles",
        type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "title",
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
    },
    {
        name: "mainImage",
        title: "Main image",
        type: "image",
    },
    {
        name: "author",
        title: "Author",
        type: "reference",
        to: { type: "author" },
    },
    {
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
        validation: (Rule) => Rule.required(),
    },
    {
        name: "bodyPreview",
        title: "Body Preview",
        type: "string",
        validation: (Rule) => Rule.required().min(80).max(160),
    },
    {
        name: "body",
        title: "Body",
        type: "blockContent",
    },
    {
        title: "Gallery",
        name: "gallery",
        type: "array",
        of: [{ type: "image" }],
    },
];

export default {
    name: "article",
    title: "Article",
    type: "document",
    fields: ARTICLE_FIELDS,
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
