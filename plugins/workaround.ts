import { defineNuxtLink, defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((app) => {
    app.vueApp.component(
        "NuxtLink",
        defineNuxtLink({
            componentName: "NuxtLink"
        })
    )
})