---
title: Building an MVP in less than 24 hours
date: 2020-11-11T18:30:00Z
description: ''
tags:
- entrepreneurship
- tech
banner: "/uploads/2w9v2a.jpg"

---
No it wasn't a challenge we put out for ourselves. We were a humble team of two that planned a modest timeline of a month to develop an education related service and another month to get it to production. It was well thought out plan, we accounted for most common development problems and decided to deal with them head on.

We were 12 days in when I received a call from my mom who worked as the head of an educational institution. Among our daily conversation she mentioned that they were using Google Forms for a test that they were conducting tomorrow. Almost a joke I asked her if she would like to use our product for it. It was 3 PM already and the test was at 3.30 PM the next day. Furthermore our core product was not actually finished, in fact we hadn't even started the frontend. But she said sure. I had to make a judgement call to offer to build a testing solution that students will be using to take an actual test that matters to them. While I am no longer a student, I remember the boiling hatred we had for poor software especially in the context of tests. I said yes though. I ended the call around 4 PM.

Less than 24 hours after the decision we had [scholared.space](http://scholared.space/) up and running. And no agile textbook can prepare you for such a scenario but here are things we learnt along the way that 'might' help you:

### 1. Features Features Features

When you have a month to build a solution you take a call on what features to work based on how useful it is and how refined the end result will be. But when you've got 24 hours build a product, best you can do is take your customers needs and fulfill as many of them as you can. And we ended up with a great foundation with even a few wonky (but working) advanced features we'd initially decided against due to complexity.

The cardinal rule here is to build every feature before starting to refine. Because when you refine things you add more complexity and with added complexity you spend more time at building the next feature. Putting together features in their most simple form can easily be key to not building that 'essential' feature 1 hour before production.

In this case, up until 2 AM we'd been working round the clock by building out the most basic (sometimes non-operational) versions of the features. Good? Yes. Did we get cocky? Oh yes. Before building out a few key features we spent a few hours on making authentication fluid because we were making good time. Absolute waste of precious hours. It was good UX but it wasn't necessary.

But in the end we did get all the requirements done and while we can't use the application with a tummy full of spaghetti code for our final product, we now know how to build out these features better.

### 2. No developer shall test the product

Obviously I am exaggerating but it is very important to not rely on your own developers testing only. We needed a third opinion to catch a few key errors and for that I am grateful for Aathirai, my wonderful girlfriend who gave me very important feedback on both the design and function of the site. It is also a little reassuring in this very stressful process of hyper-rapid prototyping.

With that in mind, always design your product to always be test ready. Which reiterates the first point which is to build everything out before refining and make sure that at at least midpoint of the timeline the product is testable.

### 3. Work alone, fix together

While I am a huge proponent of pair programming, working alone to build things can really speed up the process of initially building. Although the resulting code might not be as good as code that is continuously reviewed/optimized by another person like in pair programming, it is the fastest to develop with.

Additionally, fixing bugs together can speed up the process exponentially as most bugs happen when you miss tiny details you should've been looking for in the first place. Have another pair of eyes looking at the code gives you more coverage.

### 4. Git + CI/CD = 🙏

A big shoutout to Github and Netlify which helped us massively in all of the above. We wouldn't have been able to work together this well remotely without Github. It helped keep our codebases in sync. Moreover having different branches helped us work on the same prototype with messing without the other person's work. So this would be a good time to learn about branching and merging and other Git functions you've skimmed past while using the tool.

Netlify is pure magic for allowing us to deploy a website so fast and automatically deploying our site with every push to the Github repository. It also saved us the trouble of managing a finicky server that can fork us over anytime it liked.

### 5. Serverless FTW

You probably knew this the moment you saw the title of the post. Because right from our static site hosting in Netlify to our database and functions in Firebase we had serverless architecture all the way there.

If you don't know serverless infrastructure has taken over the tech world by storm, especially for their ease of use and low costs as the provider doesn't have to provision resources 24/7 for each user. In our case, we did all of our development and deployment for free while having great performing infrastructure (despite our blunders). All of which would've been impossible had we done this on a web server from AWS or GCP.

### 6. Keep calm and write code

The timeline of such rapid prototyping is fairly stressful, I probably grayed out a few hairs in those 24 hours, so it is important to surround yourself with people that are calming. Big thanks to Avinash the other developer on the two man team who stayed calm throughout the process and took things in stride. I am once again grateful for my girlfriend who has been my emotional support and timely reminder to eat and rest during this very exhausting sprint.

## Our anticlimax

While we had a decent prototype in hand, there wasn't enough time to do unit tests or even good old manual testing. So we made the sensible decision to let the actual test take place on Google Forms while we provided a second test to a smaller subset of students right after the original (with a different set of questions of course). This initially felt like failure and it was a bit of a bummer.

But once the test started, our application worked flawlessly. We had 14 users and no complaints except for the ones that got kicked out of the test for leaving the tab which simply means the application actually works. Of course since these were our first users ever, we decided to return the favor and unlocked everyone after a few seconds of being locked. I have to admit, it was such a rush to see our database update in realtime as students answered each question.

After receiving confirmation that there will be a next time very soon, we got our happy ending xP. Now more than ever, we have a great direction to move in and more importantly we are excited to build software that will make someone's life better.