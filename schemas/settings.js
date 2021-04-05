export default {
    name: "settings",
    title: "Settings",
    type: "document",
    fields: [
        {
            name: "donationForm",
            title: "Donation Form",
            type: "file",
            options: {
                accept: ".pdf",
            },
        },
    ],
};
