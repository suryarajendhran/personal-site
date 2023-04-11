---
title: How I built a ￡1.2m+ GMV website
date: 2023-02-03T18:30:00Z
description: A look into how I built a website to fulfil the credit needs of young
  learner drivers in the UK/EU in a weekend, and the lessons I learned along the way.
tags:
- entrepreneurship
- tech
banner: "/uploads/dall-e-2023-02-04-09-55-39.png"

---
# Overview

Back in mid-2021, I was approached by a friend of a friend (let's call him A) about an idea. He and his brother wanted to fulfil the credit needs of young learner drivers in the UK/EU.

Driving lessons can cost hundreds of pounds (if you need extra lessons make that a thousand). And banks aren't lending to learner drivers because most of them had no credit and no income. This presented an opportunity for someone to bridge the gap.

Obviously when I heard this, it sounded like a bit more than a weekend project but I was interested to see how it panned out because it was very different from what I typically work on.

# Building the Product

## Disbursing Loans

This is the first part of the product to sort out and we couldn't handle the lending part of the business so we outsourced that to a Lending Partner that specialised in quick, pre-approved loans. After some back and forth, we were in the clear.

Now all that was left to do is to connect our app to the lending partner's API to submit user details and they would take it over until they are ready to disburse the loan to us.

## Platform

Having been through the process of building a custom SaaS app from scratch I was curious to see how far one can go with as little code as possible. And the answer is: pretty far.

1. I built a basic landing page on Webflow and then connected that to a typeform which collected user info.
2. On submit typeform would forward the information to an API that I built on [glitch.io](http://glitch.io/) (one of my favourite services to get up and running super quickly).
3. This API saves the user information to a MongoDB instance on Atlas.
4. Then this information is transformed and submitted to the lending platform's API which then returns a redirect URL.
5. The API returns a response to the Webflow page to redirect the user to this URL which takes them to the lending partner's page.
6. Once they complete the steps on the lending partner's portal, they will be redirected to a thank you page on our site.
7. Upon completion the user will receive a thank you message courtesy of a Zapier automation.
8. And if the loan was approved/denied the user will receive an email for the same.

## Feedback and Iterating

The app had decent feedback from users and our lending partner. The only suggestion being that typeform seemed to take a bit of time to fill out and a traditional HTML form would make it easier for users. So we listened and made a form on Webflow that submitted to the API directly. This improved conversion significantly and it was one less platform (and subscription) to maintain.

# Business

Learner drivers applying for loans through the service needed to sign up with our provided list of driving schools and we earned money through commissions from the driving schools.

We had a quick influx of users thanks to some well-placed Facebook ads and the app continues to grow today.

# Lessons

1. **Product knowledge is invaluable.** A's insight into the market and its users enabled me to maximize the value of each line of code I wrote.
2. Users want to **minimize** the amount of time they spend on your app. If it's necessary to sacrifice some aesthetic elements in order to save time, do it.
3. Users don't always require a dashboard. As long as they have a straightforward way to contact a human and receive timely text or email communication, they are content to go without a dashboard on your website.

That's all for now. I regularly update my posts with more information, so if you'd like me to add something, please don't hesitate to reach out via email.

# Update

As of 17 Feb 2023, the app has disbursed ￡1.2m in loans and growing organically!