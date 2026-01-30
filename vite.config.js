import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        dom: "dom.html",
        others: "others.html",
        greet: "dom-tasks/greet/greet.html",
        greetcolor: "dom-tasks/greet-col/greetcolor.html",
        statenav: "dom-tasks/state-nav/statenav.html",
        usermanager: "dom-tasks/user-manager/um.html",
        productlist: "dom-tasks/product-list/pl.html",
        textformatter: "dom-tasks/text-formatter/textformatter.html",
        passwordtoggler: "dom-tasks/password-toggle/password-toggler.html",
        bullerpoints: "dom-tasks/bullet-points/bulletpoints.html",
        cartstate: "dom-tasks/cart-state/cartstate.html",
        charcount: "dom-tasks/count-characters/charactercount.html",
        faq: "dom-tasks/faq-accordian/faq.html",
        searchlist: "dom-tasks/search-list/searchlist.html",
        quote: "dom-tasks/quote-generator/quote.html",
        githubprofile: "dom-tasks/github-profile-viewer/githubprofile.html",
        websitequote: "dom-tasks/website-quote/webquote.html",
      },
    },
  },
  plugins: [tailwindcss()],
});


