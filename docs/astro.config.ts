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
                            id: "cobblegen",
                            label: "CobbleGen",
                            link: "/cobblegen/",
                            icon: "seti:webpack",
                            items: [
                                "cobblegen",
                                { label: "Configuration", autogenerate: { directory: "cobblegen/config" } },
                            ],
                        },
                    ],
                    {
                        exclude: ['/landing', '/landing/**/*'],
                    },
                ),
            ],
            components: {
                Sidebar: './src/components/Sidebar.astro',
            },
        }),
    ],
});
