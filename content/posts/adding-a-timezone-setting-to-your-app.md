---
title: Adding a timezone setting to your app
date: 2022-07-02T05:16:00Z
description: ''
tags:
- code
- tech
banner: ''

---
When you have multiple members of an organisation viewing the same data, you can disparities in time/date display simply because of how Dates are handled in Javascript. Adding a timezone setting is helpful.

In fact, adding a timezone setting becomes inevitable once you realise the complexity you’ll need to deal with especially if you’re a SaaS app that has customer organisations with users in many timezones.

# Setting up application environment timezones

Since your server will be the ground truth for all clients, it’s best to set it to the UTC timezone. To do this there are a few places you’ll have to set timezones:

1. Your production environment: Depending on your production server platform you can set your server timezone using platform specific variables. As an alternative you can always control it inside your server application. For example with nodejs, you simple need to set the environmental variable `TZ` and you’re good to go.
2. Your development environment: If you have a simple script that spins up your development server than make modifications at the application level to set timezone. If you have a docker or docker-compose setup for your development server then you can set your docker timezones to UTC.
3. Your CI/CD environment: For CI/CD you can follow similar steps as outlined above to set it up but one caveat being that your test environment should have multi-timezone setups to effectively test whether your app responds to changes in timezones. There are many setups you can use here but my most used example is setting up the cypress tests to run in a different timezone by adding a `TZ` variable to the cypress script.

<aside> 

💡 I’m going to use the npm library `date-fns-tz` for my example but the steps should be easy to translate for other libraries (such as `moment`) and other stacks.

</aside>

# How the server should send and receive data

After much trial and error this is the simplest setup I have come up with:

## Sending data to the server

1. On the frontend, when submitting data adjust the time to UTC before sending it. You can do so on `date-fns-tz`like this:

       const data = parseForm(someForm);
       data.someDate = zonedTimeToUTC(data.someDate, app.timezone);
       
       postForm(data);
       
2. On the backend, you can process and store data normally without making any changes to the form handling.

## Sending data from the server

It depends on two cases:

1. If the server is sending date as a string for whatever reason (text file download etc.,) then format the date on the server before sending using `formatInTimezone` (or the equivalent in other libraries)
2. If the server is sending dates as a raw JS/native objects then don’t operate on them as it’s best to let the frontend format this.

# Formatting data on the frontend

Similar to the server we have two cases where the dates have to be handled differently

1. If the date is being display in a `div` or somewhere it is only displayed then use `formatInTimezone` to display the UTC dateTime from the server in the store timezone.
2. If the date is passed to a selector or other kinds of input elements that needs to process it then use the function `utcToZonedTime` to convert the dateTime so it will be processed right.