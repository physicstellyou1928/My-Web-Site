---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}


<!--
{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
-->



<!--
在_publications文件夹中的所以markdown文件中，添加了一个字段 display
---
title: "论文标题"
collection: publications
permalink: /publication/paper-id
display: true  # 设置为true则显示，false则不显示
---

-->

{% include base_path %}

{% for post in site.publications reversed %}
  {% if post.display == true %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}