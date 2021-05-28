---
title: Hello World
date: '2019-01-19'
published: true
---

Putting together a personal website and blog has been a goal of mine for a while. I've built several websites using various technologies in the past, but I never got around to building one for myself. I was finally inspired after attending Google Employee [Mike McDonald](https://mikemcdonald.co/)'s presentation of building and deploying a personal website. 

In Mike's presentation, he demonstrated how to use [Hugo](https://gohugo.io/) as a static site generator to build a blog and then deploy the generated static site to [Firebase](https://firebase.google.com). I had already decided on having my own website be static, but I wasn't yet sure of what generator to use.

After playing around with Hugo during Mike's presentation, I decided against using it. It was built in Go, which I wasn't as familiar with, and installing it on Windows was a real pain.

Instead, I opted to use [GatsbyJS](https://www.gatsbyjs.org). Gatsby is a static site generator that uses React and is blazing fast and adds features such as offline support easily. I had played around with Gatsby before and I had really liked it.

I cloned the Gatsby Blog Starter and started customizing it to my liking. I had originally planned on using [TailwindCSS](https://tailwindcss.com/), but because of the complexity with implementing it with Gatsby, I decided to stick with the default styling tools provided by the starter.

I added some features such as read time and a navigation bar and I'm quite happy with how it turned. I didn't think I would go with such a simple design for my website, but it ended up looking good.

Instead of using Firebase, I opted to use [Netlify](https://www.netlify.com/), since the website didn't require any of Firebase's other features. Netlify also supports continuous integration with Github, so I only have to push the updated source code to my repo to update the site. (Firebase supports this feature also).

Adding SSL was a breeze (and free) thanks to Netlify's integration with Let's Encrypt, as it should be in 2019.

I highly recommend this approach for anyone looking to build a website, although Gatsby can be a little complex for beginners. Hugo, [Jekyll](https://jekyllrb.com/), [Hexo](https://hexo.io/) and pure HTML, CSS and Javascript are also fine options. Besides the domain, which is a yearly purchase of around $10-15 (I recommend [Namecheap](https://www.namecheap.com)), you can do this completely free.

The source code for my website is available on [Github](https://github.com/keith-cr/personal-website) if you want to take a look at it.

I'm pleased I was finally able to get this done and how it came out, even it did take half of a Saturday. If you have any questions or feedback, feel free to connect with me through any of my social links below.