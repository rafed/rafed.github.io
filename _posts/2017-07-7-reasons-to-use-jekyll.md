---
layout: blog
title: 10 reasons to use Jekyll
description: Why should you use Jekyll? Jekyll is a really really cool blog management system. Read more to find out why you should use it and why not.
coding: true
---

## 10 practical reasons to use Jekyll for your site/blog

<img class="pic" alt="Jekyll logo" src="/img/blog/jekyll.png">

I wanted to make a site but I could not decide which building platform to choose from, Wordpress or Jekyll? On one hand I had the incredible power of Wordpress and on the other hand my love for GitHub pages with Jekyll. Finally, I thought I would love to push content to my repo in Github with the terminal. So I went with Jekyll.

But Jekyll seemed complicated. It was difficult to start with. At one point I even thought of making my own static site generator. But in the end, I continued struggling to understand Jekyll. And when I finally got it, I realized that sticking to Jekyll was the best decision I ever made. Read more to know why.

### 1. Writing in Markdown

Writing a blog in HTML is difficult. It is easy to get carried away from writing your content while writing tags that are error free. **Markdown** is very helpful in these cases. It keeps your content clean and easy to read with no messy HTML tags. With Jekyll, you can write your blog in Markdown and it will be automatically transformed to proper HTML.

### 2. Modular HTML code

You can modularize your page by separating repeating contents like navigation bars, headers, and footers. Just include the separated parts where you need them and Jekyll will compile the static pages with the modular parts.

### 3. Easy to switch themes

There are quite a few gem based themes available for Jekyll. If you are not happy with the current design and feel like changing layout once in a while, just change one line in the configuration file and you are done. If you want some minor tweaks, overriding default themes with your own customized HTML/CSS is possible. Also, you can find plenty of community driven templates to choose from.

### 4. Very fast page load time

Jekyll pages are **static**. That is, unlike PHP pages, they are not compiled when requested by the client. Rather, they are already prepared and delivered instantly when a client makes a request. This makes it insanely fast.

### 5. Integration with Github

If you are a **Github** user you will definitely love Jekyll. It is officially supported by Github. In case you did not know, Github can be used as a web hosting. You can have a repo that contains your HTML and it can be rendered as a web page. Instead of raw HTML, you can make that repo a Jekyll repo by putting Jekyll files in it. That is, write your blog, push to your repo and Github does all the compilation and makes your site. And I think it is more fun to just push your site using the terminal rather than logging into an admin page using a browser. Also, who doesn't love some extra green squares on their profile :stuck_out_tongue:

### 6. Support for SASS and CoffeeScript

**SASS** makes CSS so easy. Jekyll has inbuilt support for Sass. That is, no need to compile your SASS anymore. Just upload it and Jekyll will compile it to make the CSS. Just like SASS, Coffeescript is also supported. It requires the **jekyll-coffeescript** gem. I have never used it. But I am sure, if you are a Coffeescript fan you will want to use it.

### 7. Automatic SEO

With the **jekyll-seo-tag** plugin you don't have to worry about your blog for search engine optimization. It automatically adds the required meta tags to optimize your page.

Also, with the **jekyll-sitemap** plugin, a sitemap will be automatically generated. This helps search engines to better index your site.

### 8. Emojis with jemoji

If you are an emoji freak you will definitely want to use the **jemoji** plugin. :heart: It has a wide range of emos to choose from. Check them out [here](https://www.webpagefx.com/tools/emoji-cheat-sheet/). :smiley: :smirk: :expressionless: :sunny: :gem: :camera: :musical_keyboard: :house: :ambulance:

### 9. Code syntax highlighting

If you want to write programming blogs, Jekyll makes this extremely easy. With **Rouge** you can make really beautiful code snippets like this. The code can be copied without the line numbers interfering with it.

{% highlight java linenos %}
public class Main {
    public static void main(String[] args){
        while(alive){
            eat();
            sleep();
            code();
        }
    }
}
{% endhighlight %}

Rouge has many different styles to choose from to suit your needs. Last time I checked, it had about 11 different styles. Worried if Rouge includes your programming language or not? The list that I saw was already too big to count and I am pretty confident Rouge supports your language. You can check them out [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers).

### 10. Security
Since Jekyll is built upon the principle of static pages, it only works with client side codes. With no server side codes (PHP, MySQL) the site becomes free from the huge numbers of server-side exploits. This makes your site almost unhackable.

### When to not use Jekyll?

Jekyll is powerful, fast and simple. But still, it is not meant for everybody. It is better to avoid Jekyll if-
1. you have no experience with the terminal as Jekyll has no graphical interface.
2. you need a back end database.
3. you want dynamic web pages (pages that change content appropriately and automatically).
4. you aren't a geeky nerd. It takes the time to understand Jekyll properly (at least for me it was).

Jekyll is best suited for people who love Github pages and wants to harness the power of static pages. If you compare Jekyll to Wordpress, Jekyll still has a long way to go, especially in the area of plugins. Wordpress has way more features and it's seo plugins are also more advanced. But, if you are a hobbyist and you like the 10 points discussed above, Jekyll is the way to go! :smiley:

