---
layout: no_hero
excerpt: This is a just a test post of the evilbits emergency system. Please stand by...
---
## This is just a test!


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
