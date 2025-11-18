---
layout: page
title: Research
permalink: /research/
description: >
  <p>I work across electromagnetics, adaptive RF systems, and biomedical imaging, with a focus on designing hardware that performs reliably in dynamic, real-world conditions. My research integrates digitally programmable RF architectures with flexible and wearable conductor technologies. I currently apply these principles to advance MRI hardware design, making imaging systems more universal, accessible, and easier to use.
  </p></p>
  <b>Current Research Goals</b>
  <ul>
  <li>Create adaptive, tuning-free RF architectures that operate robustly across diverse environments</li>
  <li>Explore flexible and wearable sensing/imaging systems for next-generation biomedical imaging applications</li>
  <li>Develop open-source hardware and design frameworks for the community to improve design access.</li>
  <li>Translate designs into clinically relevant devices and systems</li>
  </ul>
nav: true
nav_order: 3
display_categories: [Select Projects]
horizontal: false
---
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <!-- <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a> -->
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
