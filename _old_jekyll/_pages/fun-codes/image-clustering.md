---
layout: fun_codes
permalink: fun-codes/image-clustering
title: "Image clustering"
description: Explore the wonderful world of image processing with this image clustering algorithm.
coding: true
---

## Image clustering

Clustering is basically grouping elements that are similar. This codebase is a small attempt to cluster colors in images.

At the heart of the program lies the **K-Means algorithm**. The source is available at [github.com/rafed123/Image-clustering](https://github.com/rafed123/Image-clustering).

<div class="picwrapper">
    <figure>
        <img alt="Original image" src="/img/fun-codes/image-clustering/original.png">
        <figcaption>Original image</figcaption>
    </figure>
    <figure>
        <img alt="Averaged - 2 clusters" src="/img/fun-codes/image-clustering/avg2.jpg">
        <figcaption>Averaged - 2 clusters</figcaption>
    </figure>
    <figure>
        <img alt="Averaged - 6 clusters" src="/img/fun-codes/image-clustering/avg6.jpg">
        <figcaption>Averaged - 6 clusters</figcaption>
    </figure>
</div>
<br>
Look at the "original image" above. There are pixels of many different colors. How many different colors exist is not of our interest. What we're interested in is that we'll create color groups in the image that are similar. We will specify how many clusters we want and the program will output an image with that many clusters. In the second image, the first image is represented using only 2 colors! The third image with only 6 colors! :open_mouth:

<div class="picwrapper">
    <figure>
        <img alt="Original image Lenna" src="/img/fun-codes/image-clustering/lenna.png">
        <figcaption>Original image (Lenna)</figcaption>
    </figure>
    <figure>
        <img alt="Colored - 2 clusters" src="/img/fun-codes/image-clustering/len2.jpg">
        <figcaption>Colored - 2 clusters</figcaption>
    </figure>
    <figure>
        <img alt="Colored - 10 clusters" src="/img/fun-codes/image-clustering/len10.jpg">
        <figcaption>Colored - 10 clusters</figcaption>
    </figure>
</div>

### Features of the program

* Cluster (by averaging) - averages the color in a particular group (1st example)
* Cluster (by color) - select a random color for a particular group (2nd example)
* increase/decrease brightness and contrast

### Running the project

Download the source code [here](https://github.com/rafed123/Image-clustering). It is a Java project you can directly import to eclipse IDE.

In Main.java, tweak the following:  
{% highlight java%}
int numOfClusters = 10;         // num of clusters to make
int numOfKmeansIteration = 5;   
int type = averaged;            // (averaged/colored)
int comparisonOn = hue;         // (comparison color based on hue/brightness/saturation)
int contrast = 0;               // +/- contrast
int brightness = 0;             // +/- brightness
{% endhighlight %}

First try out **numOfClusters** and **type** to have some fun. Then play with brightness and contrast to fine-tune the image. Specify your path to the input file and output path and you're ready to go!

### K-Means

K-means is an **unsupervised machine learning** algorithm.  Which basically means it can describe a hidden structure from unlabeled data. In our case, it finds clusters, without us providing info on where to look for it. It is one of the easiest machine learning algorithms to implement. If you're into machine learning you may want to look more into this algorithm.
