---
title: Why you should publish your own NPM package
date: 2021-11-17T03:30:00Z
description: ''
tags:
- tech
banner: "/uploads/338e4905a2684ca96e08c7780fc68412.png"

---
A month ago, one of my friends had sent me a link to an NPM package. It was a package that helped parse RSS feeds. And what surprised me was that he was the author of the package. He had about a 100 odd downloads in the last week and that got me thinking about maybe publishing a package myself. I'm sure that most developers at some point in time would have looked at their code and thought that a particular piece of their code could be packaged up to be served to the world. So I began my journey into creating my first package and here is what I learnt:

I started with creating a simple javascript version that just exported a function. I followed along some guides on how to publish your NPM package such as [https://zellwk.com/blog/publish-to-npm/](https://zellwk.com/blog/publish-to-npm/ "https://zellwk.com/blog/publish-to-npm/"). And then added typescript on top of it. Then later added web pack. Finally, making it a UMD module so users can access it on the browser.

If you want to learn how to publish an NPM package, there are a hundred guides out there that do it better. But I'm here to outline the benefits.

## It's easier than you think

Most developers write reusable code everyday as part of their jobs. And if you think that a piece of code will be useful for other developers (even a small number) then you can simply repurpose the function/object and create the first (pre-production of course) version of your package. Perhaps add a README and use semantic versioning to publish it. And adding incremental updates is simply a matter of dedicating an hour or two of your time for a week.

## It doesn't need to be forever

This is a subjective opinion so I understand if some developers disagree but I believe packages are best when they serve a singular focus. My first (and as of date, only) NPM package was built to find and manipulate CSS Rules from your stylesheets. I can think of 4-5 functions at most that would cover almost everything you can do with CSS Rules. This is a simple matter of a week or two of hobby level effort to get it done. You can find a project with a smaller scope

## Use it to apply a new technology

Writing a package can be great opportunity to learn something new. For example, I have wanted to learn/apply cypress for a long time and this was the perfect opportunity for it. In addition to learning and writing integration tests, I also learnt about setting up Github Actions from scratch. I also got to learn more about setting up ESLint and typescript. So use the opportunity to apply a new technology that you have just learnt.

## Easier path to get into open source

Sometimes finding a OSS project to contribute to and getting your PR accepted can be time consuming task. On the other hand, you have more control over writing your own package and you will be able to see results in real-time. While there is a lot to gain or learn from contributing to a well established open source project, building your own can be an easier first step to get into open source.

## Great artists steal

Countless packages are published every year and there are some great ones out there. Seek inspiration on how to do things from them. You can find a start for just about everything from READMEs and LICENSEs to the entire setup of your library.

## Find a buddy

Approaching new and uncharted territory can be scary and slow your motivation. In order to avoid analysis paralysis, find someone who has done it before to show you the ropes or a fellow developer who wants to work on writing the package with you.

Here are some resources that might help you get you started:

1. [https://zellwk.com/blog/publish-to-npm/](https://zellwk.com/blog/publish-to-npm/ "https://zellwk.com/blog/publish-to-npm/")
2. [https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/](https://zellwk.com/blog/publish-to-npm/ "https://zellwk.com/blog/publish-to-npm/")
3. [https://www.npmjs.com/package/np](https://zellwk.com/blog/publish-to-npm/ "https://zellwk.com/blog/publish-to-npm/")