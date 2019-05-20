# Developer's Blog Application

## DESCRIPTION

A simple tempalate for a lightweight blog application that writers can use to broadcast ideas to readers.

* Constructed this application using GatsbyJS and set up an API using GraphQL.

* Optimized to display and paginate through markdown files that are taken from the API.

* Assigned routes with a unique slug based on an individual markdown file’s title as well as its unique tags using Node.

* Included a Disqus plugin that allows users to comment on and/or share blog posts to their social media.

* Designed the layout and components using Sass and Bootstrap.

Biggest Challenge: Understanding how to set up GraphQL to get it to render out markdown files into the application. I've worked with Query Languages and Gatsby makes it easy to test out how your frontmatter data is moving on the ```http://localhost:8000/___graphql```

Current Objective: Add this app to my [portfolio](https://valdezdev.com) where readers can come and get some useful tutorials!

Live Demo can be found [here.](https://unruffled-bartik-96bf86.netlify.com/)

## INSTRUCTIONS
* In a terminal, change to the directory: ```cd gatsby-blog``` and launch the command: ```gatsby develop```
* Once the development server starts up, it should route the browser over to ```localhost:8000```. Feel free to test it out and experiment with the blog!