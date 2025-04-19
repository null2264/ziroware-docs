import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightSidebarTopics from "starlight-sidebar-topics"

export default defineConfig({
    integrations: [
        starlight({
            title: "ZiROWare Docs",
            social: {
                github: "https://github.com/null2264",
            },
            plugins: [
                starlightSidebarTopics(
                    [
                        {
                            id: "landing",
                            label: "Landing",
                            link: "/landing/",
                            icon: "rocket",
                            items: [],
                        },
                        {
                            label: "Guides",
                            link: "/guides/example",
                            icon: "open-book",
                            items: ["guides/example"],
                        },
                        {
                            id: "reference",
                            label: "Reference",
                            link: "/reference/",
                            icon: "information",
                            items: [
                                { label: "Reference", autogenerate: { directory: "reference/test" } },
                            ],
                        },
                    ],
                    {
                        exclude: ['/landing', '/landing/**/*'],
                    },
                ),
            ],
        }),
    ],
});
