---
title: JamStack, a modern and cheap architecture for the web
date: 2026-04-19T19:56:00.000Z
updatedAt: ""
lang: en
description: "Decouple the web experience layer from data and business logic,
  improving flexibility, scalability, performance, and maintainability. "
tags:
  - Architecture
  - DevOps
  - Web Development
featuredImage: /images/blog/1711112544555.png
authors:
  - Fausto Márquez
references:
  - title: Aidin Kaleqi Moqadam Linkedin Post
    url: https://www.linkedin.com/pulse/leveraging-jamstack-architecture-unveiling-future-web-kaleqi-moqadam-glfzf/
    detail: We got cover image from it.
---
# Introduction

A couple of weeks ago I started my journey to build this blog system, to start writing in The Falcode Blog.\
We needed something easy but cheap, free if possible, to keep low our costs for having our website live. We currently use Github and Cloudflare pages for that.\

So I started building it leveraging on Gatsby filesystem capabilites with graphql queries and the idea of writing markdown, pushing it to the repo and handle most of the work in build time.\
But it became a little frustrating and not an enjoyable writing process even before we started using it to publish.

So I remembered reading something about emdash cms, the one Cloudflare implemented with AI to be the natural successor of Wordpress.\
It'd be a good tool to handle our blog, as we're already using lots of Cloudflare services and love them. Shortly after reading the docs to implement it for us I thought "wait, what if there are other good CMS out there with this serverless and cheap approach?". So I searched for that, found a bunch of good projects, but the one that really caught my eye was **Decap CMS**. And it was reading it's documentation that I found out about Jamstack.



## So, what is Jamstack?
