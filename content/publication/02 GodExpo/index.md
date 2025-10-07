---
title: "GodExpo: an automated god structure detection tool for Golang"
authors:
- admin
- Moumita Asad
- Asadullah Hill Galib
- Kishan Kumar Ganguly
- Md Saeed Siddik
date: "2019-03-05T00:00:00Z"
doi: "10.1109/IWoR.2019.00016"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-03-05T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: International Workshop on Refactoring
publication_short: IWoR

abstract: God Class is a class that threatens maintainability and understandability of code by performing most of the work alone. Various tools exist that can detect God Class of Java or C++ programs, however, there is no existing tool for detecting God Class(Structure) in Golang. Although Golang is not an object-oriented language, it offers structures which are similar to classes in OOP as they can contain fields and methods. Unlike OOP, methods of a structure can be defined on any file in the package of Golang. This paper presents a tool entitled GodExpo to detect God Structures in Golang programs by calculating metrics namely Weighted Method Count, Tight Class Cohesion, and Access to Foreign Data. In addition, GodExpo can provide version wise results to observe the evolution of God structures. To evaluate GodExpo, an experiment has been conducted on several versions of two open source Golang projects and the tool successfully found God structures in all versions of those projects.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
# - Go
# featured: false

# links:
# - name: Custom Link
#   url: http://example.org
url_pdf: '/publication/02-godexpo/GodExpo_IWOR_2019.pdf'
url_code: 'https://github.com/rafed/godexpo/'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
url_slides: '/publication/02-godexpo/slides-godexpo.pptx'
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}} -->

<!-- {{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
