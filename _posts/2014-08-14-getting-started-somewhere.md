---
layout: no_hero
excerpt: This is my first post using Jekyll and the liguid template engine
---

# Getting Started

This is my first post using Jekyll and the liguid template engine. Shopify has done a hell of a job with Liquid and getting it to mature. Picking a template language
Can be tough, imagine trying to build one. Liquid came about during a time when there wasnt a lot of different secure template systems around.
{% highlight ruby %}
  def show
    @widget = Widget(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @widget }
    end
  end
{% endhighlight %}

{% include _disqus_comment_form.html %}
