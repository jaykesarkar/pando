"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"v0.3.1-beta-release","metadata":{"permalink":"/blog/v0.3.1-beta-release","editUrl":"https://github.com/pluralsight/pando/edit/main/website/blog/blog/2022-011-30-dev-beta/index.md","source":"@site/blog/2022-011-30-dev-beta/index.md","title":"Announcing Beta Release","description":"Today marks a big milestone for the developer suite as we happily introduce the Beta version!","date":"2023-01-10T18:20:47.000Z","formattedDate":"January 10, 2023","tags":[{"label":"pluralsight","permalink":"/blog/tags/pluralsight"},{"label":"development","permalink":"/blog/tags/development"},{"label":"v0.3.1-beta-release","permalink":"/blog/tags/v-0-3-1-beta-release"},{"label":"headless-styles","permalink":"/blog/tags/headless-styles"},{"label":"ui-library","permalink":"/blog/tags/ui-library"},{"label":"design-tokens","permalink":"/blog/tags/design-tokens"},{"label":"react-utils","permalink":"/blog/tags/react-utils"}],"readingTime":3.86,"hasTruncateMarker":true,"authors":[{"name":"Casey Baggz","title":"Admin & Maintainer (Pluralsight Design Suite)","url":"https://caseybaggz.com","imageURL":"https://github.com/caseybaggz.png","key":"casey"}],"frontMatter":{"slug":"v0.3.1-beta-release","title":"Announcing Beta Release","authors":["casey"],"tags":["pluralsight","development","v0.3.1-beta-release","headless-styles","ui-library","design-tokens","react-utils"],"hide_table_of_contents":false},"nextItem":{"title":"Announcing Alpha Release","permalink":"/blog/v0.1.0-alpha-release"}},"content":"\x3c!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). --\x3e\\n\\nToday marks a big milestone for the developer suite as we happily introduce the Beta version! :tada:\\n\\n\x3c!--truncate--\x3e\\n\\n## Beta Cometh\\n\\nAs of today we are [feature complete](https://github.com/pluralsight/pando/projects/2) for all of our packages! This means that from this point forward, we are focusing on delivering a stable \\"rc\\" release. In order to do this we need _YOU_, the early adopter, to test out migration and help us reveal the areas we can improve our packages. :zap:\\n\\n## Design Tokens\\n\\nThanks to [Dan Davidson](https://github.com/dan-davidson-ps), we have an improvement for the Normalize.css file to support setting the `background-color` to help ease migration from Classic.\\n\\n:::tip\\n\\nInterested in learning more about Migration? Check out the [NEW Migration docs](https://design.pluralsight.com/docs/development/getting-started/migration).\\n\\n:::\\n\\n## Mobile support\\n\\nThanks to [Cassidy Swallow](https://github.com/cantocass), we have full Android/Kotlin support for our Design Tokens! This is the first time in Pluralsight history that a design system has supported both mobile and web teams and it only gets better from here!\\n\\n:::note\\n\\nWe also support iOS/Swift teams, but need some help verifying if there needs to be more work done. If you are a iOS developer, please [check out this issue](https://github.com/pluralsight/pando/issues/724).\\n\\n:::\\n\\n## Headless Styles\\n\\nA massive update in this package delivers all the style helpers for the components available to designers in the new Web UI Kit. Everything from [Grid helpers](https://design.pluralsight.com/docs/development/headless-styles/Grid) to [Tabs](https://design.pluralsight.com/docs/development/headless-styles/Tabs), Headless styles is now Web Kit complete!\\n\\n:::note\\n\\nClassic is **not** a 1:1 comparison to our current system. When Classic was created, Pluralsight was a single product brand. Now that we are multi-product, the new UI Kit acts as the \\"core\\" library allowing teams across all products to own their own custom solutions where needed.\\n\\n:::\\n\\n### New Style Objects\\n\\nMost people wonder why we don\'t offer a Component library for our new system. The reason is quite simple: in a world full of Component libraries, we don\'t need another one. Let\'s face it, the reality is that for the people who use them, there are plenty of loyalists out there.\\n\\nThis is where Headless Styles shines. Instead of forcing another component library, we have built a system that allows people to _easily extend the libraries they already love._ :tada:\\n\\nIn Beta, we introduce a new export path that allows you to extend your library of choice even more easily! This means that your team can keep using the tech stack you already love and utilize the power of Headless Styles to customize the themes at your convenience!\\n\\nSpecial thanks to [Josh Degraw](https://github.com/josh-degraw) for testing out Headless Styles migration with v5 of MUI and helping us improve our library. :heart:\\n\\n:::note\\n\\nInterested in learning more about customizing 3rd party component libraries with Headless Styles? Check out the [NEW Customization Docs](https://design.pluralsight.com/docs/development/headless-styles/customization/components).\\n\\n:::\\n\\n## React Utils\\n\\nBeta introduces a ton of new hooks for people who are React users. Everything from [Preloading Images](https://design.pluralsight.com/docs/development/react-utils/use-preloaded-img) to [Autoformatting Dates](https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date), we have it covered!\\n\\nCheck out the latest hooks in the [React Utils docs](https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date).\\n\\n## What\'s Next?\\n\\nFrom this point until v1 it\'s all about the **stabilizing** and **we need your help!**\\n\\nIn order for us to make sure our system is ready for mass integration, we need more early adopters to test out migrating in their apps. This is the only way we can fix or improve our library before we release the official v1.\\n\\n### Early Adopter Questions\\n\\nIf you are someone that would like to test our migration with your team, ask yourself these questions during your experience:\\n\\n- **Is this easy to use for how we need to use it?** If the answer is \\"no\\" or anything similar to \\"not really\\", [start a new discussion](https://github.com/pluralsight/pando/discussions) to help us become aware of your experience.\\n- **Is there something that feels buggy?** [Submit a new issue](https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+) so we can fix it!\\n\\nWe value all feedback and keep a pulse on all of the above and want to make sure v1 has all the features or bugfixes needed to ensure a satisfactory experience with everyone! :tada:\\n\\n## Thanks :tada:\\n\\nSome features in this release wouldn\'t be possible without the contribution of the following people:\\n\\n- [Cassidy Swallow](https://github.com/cantocass)\\n- [Dan Davidson](https://github.com/dan-davidson-ps)\\n- [Kayden Thomson](https://github.com/kaydenthomson)\\n- [Josh Degraw](https://github.com/josh-degraw)\\n\\n## Upgrading\\n\\n```bash\\n# npm\\nnpm install @pluralsight/{headless-styles,react-utils}@latest\\n\\n# Yarn Classic\\nyarn upgrade @pluralsight/{headless-styles,react-utils}@latest\\n\\n# Yarn Berry\\nyarn up @pluralsight/{headless-styles,react-utils}@latest\\n```\\n\\n## Installing\\n\\nIf it is your first time using any of our packages, check out our\\n[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)\\nor the [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)\\nof whichever package you are interested in using.\\n\\n**As always, if you have any questions or ideas, please drop us a thread in our\\n[Discussions Page](https://github.com/pluralsight/pando/discussions).**"},{"id":"v0.1.0-alpha-release","metadata":{"permalink":"/blog/v0.1.0-alpha-release","editUrl":"https://github.com/pluralsight/pando/edit/main/website/blog/blog/2022-09-14-dev-alpha/index.md","source":"@site/blog/2022-09-14-dev-alpha/index.md","title":"Announcing Alpha Release","description":"Today, marks a big milestone for the Design System developer suite as we happily introduce the alpha version!","date":"2022-09-14T00:00:00.000Z","formattedDate":"September 14, 2022","tags":[{"label":"pluralsight","permalink":"/blog/tags/pluralsight"},{"label":"development","permalink":"/blog/tags/development"},{"label":"v0.1.0-alpha-release","permalink":"/blog/tags/v-0-1-0-alpha-release"},{"label":"headless-styles","permalink":"/blog/tags/headless-styles"},{"label":"ui-library","permalink":"/blog/tags/ui-library"},{"label":"design-tokens","permalink":"/blog/tags/design-tokens"},{"label":"react-utils","permalink":"/blog/tags/react-utils"}],"readingTime":7.99,"hasTruncateMarker":true,"authors":[{"name":"Casey Baggz","title":"Admin & Maintainer (Pluralsight Design Suite)","url":"https://caseybaggz.com","imageURL":"https://github.com/caseybaggz.png","key":"casey"}],"frontMatter":{"slug":"v0.1.0-alpha-release","title":"Announcing Alpha Release","authors":["casey"],"tags":["pluralsight","development","v0.1.0-alpha-release","headless-styles","ui-library","design-tokens","react-utils"],"hide_table_of_contents":false},"prevItem":{"title":"Announcing Beta Release","permalink":"/blog/v0.3.1-beta-release"},"nextItem":{"title":"Announcing React Utils","permalink":"/blog/experimental-release-30088c"}},"content":"\x3c!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). --\x3e\\n\\nToday, marks a big milestone for the Design System developer suite as we happily introduce the alpha version! :tada:\\n\\n\x3c!--truncate--\x3e\\n\\n## Alpha Phase\\n\\n**Stable APIs are here to stay.**\\n\\nA lot has changed in the past month (for the better!) from our docs design to our APIs. As scary as this sounds, it brings us into a new era for our users and company in general. As some of you may know, we recently celebrated PS-Refresh day which was another awesome experience that will help drive us into 2023.\\n\\nIn honor of PS-Refresh, we felt that our suite was in a good enough spot to mature it into the next phase of it\'s life span bringing a shared API design that spans across all of our packages.\\n\\nLet\'s dive in! :zap:\\n\\n## Release Channels\\n\\nAs of alpha, we have a fully automated release channel pipeline which allows users to opt-in to different API experiences.\\n\\n- **experimental:** All packages with this tag have access to `unstable_` features that are in development mode. We of course, don\'t recommend ever using this version, unless you just want to stay as green as possible. API\'s here will more than likely change.\\n- **next:** The packages with this tag will provide _new_ APIs that we believe are stable enough to use without consequences, but are technically still in the \\"testing phase\\". If you need a new feature **now**, or want to test an integration in your project, this is the one.\\n- **latest:** This is the most stable version of our packages and what we recommend everyone uses.\\n\\n:::tip\\n\\nFor more details about our release channels, check out the official [Release Channel Guide](https://github.com/pluralsight/pando/discussions/53).\\n\\n:::\\n\\n## Versioning\\n\\nAlong with our release channels, we\'ve also updated our version policy to match our standard. The new guide should help set expectations and ease anxiety that you might have for future releases. Thanks to our release channels, we can guarantee releases that are backwards compatible and safe to use (i.e. we will rarely ship a breaking change).\\n\\n:::tip\\n\\nFor more information about our versioning standards and development practices regarding stability and breaking changes, check out our [Versions Page](https://design.pluralsight.com/docs/development/discover-more/versions).\\n\\n:::\\n\\n## Docs\\n\\nAs you might have noticed, our docs have receieved a nice little update to match where the new brand is headed. Additionally, we have re-organized the main nav to be more user friendly.\\n\\n- **Start Here** is our introductory section for core concepts that span into both design and development. This section also helps readers understand how to use the site more successfully.\\n- **Design** is the central hub for all the resources a designer may need to reference.\\n- **Development** is the place where you can find all information regarding the NPM packages we offer in our engineering suite and any other information related to our engineering practices.\\n- **Blog** where we make announcements for both design and development about meaningful updates.\\n\\nThat\'s not all, if you look in the top right corner, you will notice a \\"0.1.0-alpha\\" dropdown which means our docs officially have a version history! :tada:\\n\\nIf you are ever interested in seeing what is coming in the next release (Beta), just click on the dropdown and choose \\"Beta \ud83d\udea7\\".\\n\\n## Design Tokens\\n\\nThe alpha version of design tokens introduces a **BREAKING CHANGE**, but includes some really nice features.\\n\\n### Theme Refresh\\n\\nAfter testing our original token theme for a few months, we found that there were some major inconsistencies with the original UI Kit and values being used incorrectly. Likewise, there were a ton of tokens that weren\'t being used at all. As a result, we re-organized the tokens to work more successfully with the UI Kit and be more functional.\\n\\nCheck out the new [token colors list](https://design.pluralsight.com/docs/development/tokens/colors).\\n\\n### New Meta Files\\n\\nThere are certain times when using tokens is just not enough and you need some extra help. In alpha, we added 2 new meta-data files to the tokens package.\\n\\n- **CSS Properties** is a JS file that sources the CSS property definition. If you are using CSS-in-JS, when combined with our [Normalize setup](https://design.pluralsight.com/docs/development/getting-started/installation/#normalizecss), this will allow you to use themes seamlessly without requiring an unnecessary Provider component. This is also what we use under the hood in Healdess-styles for all of our CSS-in-JS API\'s.\\n- **Normalized Data** is a raw JSON file of normalized data from our tokens, and makes things like mapping and loops much easier and performant.\\n\\n:::tip\\n\\nTo learn more about our new Design Tokens, check out the [Web Meta section](https://design.pluralsight.com/docs/development/tokens/intro#web-meta) in the docs.\\n\\n:::\\n\\n## Headless Styles\\n\\nWith the token overhaul, by nature, we\'ve had to internally update most of our styles. So, in justifying the work, we went ahead and updated multiple things in this package.\\n\\n### New Styles\\n\\nThe majority of our helpers were built while the Brand design team was still figuring out the direction that they wanted to take our company. As a result, this dramatically changed some components in the [Web UI Kit](https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/PS-Design---Web-UI-Kit-%5BALPHA%5D?node-id=1214%3A50531) from Buttons down to Tags. In alpha, all of the helpers now reflect the latest visual styles from our UI Kit.\\n\\n### New API Design\\n\\nAnother area we enhanced this package is in the overall API design. Some APIs were completely overhauled to be more scalable ([Button](https://design.pluralsight.com/docs/development/headless-styles/Button)) and others just to use a standard naming convention.\\n\\nWith the naming convention, we decided to share the [Semantic Tokens](https://design.pluralsight.com/docs/development/tokens/intro#naming-convention) design to help bring the suite together into a cohesive body.\\n\\n### Typography Styles\\n\\nOne topic that has always been disconnected from design and engineering in design systems is Typography. Historically, designers create systems of typography styles that don\'t really compliment how the browser semantically works with text, which by nature, makes typography less accessible.\\n\\nWe are happy to state that the new Web UI Kit typography styles do just that, which makes it the most functional use case to date!\\n\\nWhat we mean is that our typography styles **ship with our Normalize setup**, this means that to get a header - just use the HTML syntax for header `h1-6`. To get normal text styles, just us a `p`. :raised_hands:\\n\\n:::tip\\n\\nTo learn more about text styling, check out the [Typography Page](https://design.pluralsight.com/docs/development/headless-styles/Typography).\\n\\n:::\\n\\n### Better Named Components\\n\\nThe final change we made was renaming a few components in the Web UI Kit to better reflect browser the APIs they are meant to mimic.\\n\\n- Alert is now [Admonition](https://design.pluralsight.com/docs/development/headless-styles/Admonition)\\n- Alert Dialog is now [Confirm Dialog](https://design.pluralsight.com/docs/development/headless-styles/ConfirmDialog)\\n\\nThese small changes allow us to scale our kit even further by making more unique Dialogs that serve a purpose (i.e. Prompt Dialog, Alert Dialog, and Modal) or actual alert differences (i.e. Alert, Toast, etc.).\\n\\n## What\'s Next?\\n\\nFrom this point until v1 it\'s all about the **features**!\\n\\n- **Headless-Styles**\\n  - **FEAT** - Menu, Tabs, Modal, Select, Datepicker, Pagination, Popover, Table, and Tooltip\\n- **React-utils**\\n  - **FEAT** - `usePreloadResource` custom hook for a better UI experience via preoloading assets (from images to scripts).\\n\\nOur next planned release is Beta which should conclude all missing components in the Web UI Kit, unless more are added in the future (always a possibility).\\n\\n:::tip\\n\\nFor a view of where we plan on going leading up to v1 at Q4, [Check out our 2022 Roadmap](https://github.com/pluralsight/pando/projects/2).\\n\\n:::\\n\\n## What about Components?\\n\\nWhen we started building the Design Suite at the start of this year, we wanted to make sure we were building something that not only was unique, but something that does not follow trends and potentially fade away after a few years.\\n\\nAs a team, **we believe that the Component design has reached it\'s full potential** and will soon be \\"the old way of doing things\\". We respect and value your opinion if you don\'t believe this to be true. :heart:\\n\\nUltimately, this, [along with other reasons](https://design.pluralsight.com/docs/development/discover-more/faq#why-doesnt-your-suite-provide-a-components-package), is why we have moved past components and are building something that is more scalable and lightweight in nature.\\n\\nHaving said that, we also understand there are many people who are not front-end developers that find themselves forced into having to build things on the front end. These are the users who might actually benefit from using a traditional Components Library if they are unwilling to learn the common practices and skills for front-end development.\\n\\nSo, as a team, we decided to draw up an agreement theorizing how a component library would fit in our suite of tools. What purpose would it solve when working alongside our other packages? Where would the lines in the sand be drawn to prevent duplicated work or responsibility?\\n\\nSo, we created a discussion on our repo that contains a **poll**. We will be monitoring this for the rest of the year. If there is a large enough response, we will consider creating a components package in the future that follows our agreement guidelines.\\n\\n:::tip\\n\\nTo read the agreement and contribute to the poll, [check out our Discussion](https://github.com/pluralsight/pando/discussions/577). All we ask is that you approach this topic **without bias** as we will do the same in reviewing the results.\\n\\n:::\\n\\n## Thanks\\n\\nSome features in this release wouldn\'t be possible without the contribution of [Josh Degraw](https://github.com/josh-degraw). :tada:\\n\\n## Upgrading\\n\\n```bash\\n# npm\\nnpm install @pluralsight/{headless-styles,react-utils}@latest\\n\\n# Yarn Classic\\nyarn upgrade @pluralsight/{headless-styles,react-utils}@latest\\n\\n# Yarn Berry\\nyarn up @pluralsight/{headless-styles,react-utils}@latest\\n```\\n\\n## Installing\\n\\nIf it is your first time using any of our packages, check out our\\n[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)\\nor the [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)\\nof whichever package you are interested in using.\\n\\n**As always, if you have any questions or ideas, please drop us a thread in our\\n[Discussions Page](https://github.com/pluralsight/pando/discussions).**"},{"id":"experimental-release-30088c","metadata":{"permalink":"/blog/experimental-release-30088c","editUrl":"https://github.com/pluralsight/pando/edit/main/website/blog/blog/2022-08-10-dev-experimental/index.md","source":"@site/blog/2022-08-10-dev-experimental/index.md","title":"Announcing React Utils","description":"We have exciting news for you today as we continue to stay on track for our","date":"2022-08-10T00:00:00.000Z","formattedDate":"August 10, 2022","tags":[{"label":"pluralsight","permalink":"/blog/tags/pluralsight"},{"label":"0.0.0-experimental-30088c-20220809","permalink":"/blog/tags/0-0-0-experimental-30088-c-20220809"},{"label":"headless-styles","permalink":"/blog/tags/headless-styles"},{"label":"ui-library","permalink":"/blog/tags/ui-library"},{"label":"design-tokens","permalink":"/blog/tags/design-tokens"},{"label":"react-utils","permalink":"/blog/tags/react-utils"}],"readingTime":4.3,"hasTruncateMarker":true,"authors":[{"name":"Casey Baggz","title":"Admin & Maintainer (Pluralsight Design Suite)","url":"https://caseybaggz.com","imageURL":"https://github.com/caseybaggz.png","key":"casey"}],"frontMatter":{"slug":"experimental-release-30088c","title":"Announcing React Utils","authors":["casey"],"tags":["pluralsight","0.0.0-experimental-30088c-20220809","headless-styles","ui-library","design-tokens","react-utils"],"hide_table_of_contents":false},"prevItem":{"title":"Announcing Alpha Release","permalink":"/blog/v0.1.0-alpha-release"}},"content":"\x3c!-- [Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog). --\x3e\\n\\nWe have exciting news for you today as we continue to stay on track for our\\nSeptember `alpha` release!\\n\\n\x3c!--truncate--\x3e\\n\\nWith this announcement, the team is even more confident that the Design System\\nsuite will continue to grow and become a **new standard for custom UI libraries.**\\n\\n## Experimental Phase\\n\\n**Don\'t fear the experimental tag!**\\n\\nEven though our suite is still in the experimental phase, so far it\\nhas been a rare case that any of our API\'s change. However, because we are still\\nbuilding out the final library touches, we feel it\'s the best version to keep them\\nuntil we are \\"feature complete\\" for the next month.\\n\\n:::tip\\n\\nTo follow our progress this year, check out our [2022 Roadmap](https://github.com/pluralsight/pando/projects/2). Our goal is to hit a solid alpha by end of September 2022.\\n\\n:::\\n\\n### What are the goals of the experimental release?\\n\\nFor now, **experimental is just a creation phase.** What we are trying to do is very\\ndifferent than your basic UI library (MUI, Chakra, etc.). Libraries like these\\nare fine for startups, but at some point in time, lose flexibility on projects\\nor create **major tech debt problems** due to the nature of a component library\\ndepending on many other 3rd party libraries to exist. **Not to mention that natural\\nsecurity dependency risk this introduces.**\\n\\n:point_right: **This is where the PS Design Suite comes in.** :point_left:\\n\\nInstead of building another component\\nlibrary (which has been done a countless number of ways already), we are building\\na family of tools for you to create **your own library that better serves the\\nneeds of your team and project.**\\n\\nEach package serves a purpose that directly relates to the flexibility you want\\nto have in your project. You can use them as a single source, or you can combine\\nthem all to create an ultimate solution. It\'s up to you.\\n\\nAnd the best news is - **our packages are close to 100% dependency free** :tada:.\\n\\nNo more adding 5 additional dependencies just to use a single UI library. No more\\ngetting security issues in your project because X dependency within another\\ndependency within another dependency has a security bug.\\n\\n<figure style={{ textAlign: \'center\' }}>\\n  <iframe src=\\"https://giphy.com/embed/SACoDGYTvVNhZYNb5a\\" width=\\"480\\" height=\\"360\\" frameBorder=\\"0\\" allowFullScreen></iframe>\\n  <figcaption align=\\"center\\">Mindblown gif</figcaption>\\n</figure>\\n\\n## Headless Styles\\n\\nWe have some new goodies for you:\\n\\n- **NEW** [Avatar](https://design.pluralsight.com/docs/development/headless-styles/Avatar)\\n- **NEW** [Alert Dialog](https://design.pluralsight.com/docs/development/headless-styles/AlertDialog)\\n- **NEW** [Text Link](https://design.pluralsight.com/docs/development/headless-styles/TextLink)\\n\\nThat\'s right, we now officially have support that for inline text links! This\\nwill allow your apps to follow a better UI standard and provide great a11y\\nsupport for external links.\\n\\n## React Utils\\n\\n**We are very excited to introduce this new package for React users!** :tada:\\n\\nIn order to help reduce the code base and responsiblity for teams using React (or our [Headless Styles](https://design.pluralsight.com/docs/development/headless-styles/intro) library), we decided to create [React Utils](https://design.pluralsight.com/docs/development/react-utils/intro)!\\n\\n:::note\\n\\n**This library only requires the use of React.** You can use this library without\\nany of our other packages if you want to just improve the accessbility and UX\\nin your projects. :kissing_heart:\\n\\n:::\\n\\n**This library will deliver custom hooks and other utility functions that will\\nhelp you add accessible features for your components in React.** :atom_symbol:\\n\\n- **NEW** [useFocusTrap](https://design.pluralsight.com/docs/development/react-utils/use-focus-trap): a custom hook for Dialogs/Modals that will trap the\\n  focus within your dialog when it is active and returns it back to the trigger\\n  that opened it when removed from the UI.\\n- **NEW** [useEscToClose](https://design.pluralsight.com/docs/development/react-utils/use-esc-to-close): a custom hook that calls a function when the user presses the\\n  \\"Escape\\" key.\\n\\n<figure style={{ textAlign: \'center\' }}>\\n  <iframe src=\\"https://giphy.com/embed/70YaDoZ1VqBZ8SgYiz\\" width=\\"480\\" height=\\"378\\" frameBorder=\\"0\\" allowFullScreen></iframe>\\n  <figcaption align=\\"center\\">A woman saying \\"girl yes\\"</figcaption>\\n</figure>\\n\\n## PWA Docs\\n\\nAs of today, our docs site is **officially a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)!** :tada:\\nYou can now enjoy the experience offline or however\\nyou may choose.\\n\\n## What\'s Next?\\n\\nMore big updates to come including continued **features** in Headless Styles,\\nalong with some additional **refactoring**.\\n\\n- **FEAT** - HS: Add Tabs, Modal, and Menu\\n- **BREAKING CHANGE** - HS: The Button API will get an overhaul to be more flexible\\n  and deliver new styles (recent design change).\\n- **BREAKING CHANGE** - Tokens are getting a refresh to be more scalable and flexible.\\n\\n### Important\\n\\n**We don\'t anticipate any more API breaking changes after the next release**.\\n\\nThis is a very rare situation where we have one which actually justifies making.\\n\\nThe only reason we are shipping these now is that both Design Tokens and\\nthe HS Button API were our first packages/APIs built at the beginning of the\\nyear. Now that we are almost feature complete and have a better idea of the full\\npicture - we can make improvements now that will guarantee more success\\nfor the alpa-v1 phase.\\n\\n## Upgrading\\n\\n```bash\\n# npm users\\nnpm install @pluralsight/{headless-styles,react-utils}@experimental\\n\\n# Yarn Classic users\\nyarn upgrade @pluralsight/{headless-styles,react-utils}@experimental\\n\\n# Yarn Berry users\\nyarn up @pluralsight/{headless-styles,react-utils}@experimental\\n```\\n\\n## Installing\\n\\nIf it is your first time using any of our packages, check out our\\n[Installation Guide](https://design.pluralsight.com/docs/development/getting-started/installation)\\nor any [Intro Page](https://design.pluralsight.com/docs/development/react-utils/intro)\\nof whichever package you are interested in using.\\n\\n**As always, if you have any questions or ideas, please drop us a thread in our\\n[Discussions Page](https://github.com/pluralsight/pando/discussions).**"}]}')}}]);