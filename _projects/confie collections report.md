---
layout: page
title: Confie Collections Report
description: Tableau Report with multiple views and filters 
img: 
importance: 1
category: work
related_publications: true
---

# Confie: Collections Report

## Summary
Visualizing Debt Collections team efforts. The goal of this project was to develop a Tableau dashboard to visualize several call center KPI such as: average handle time, number of calls, answered calls, unanswered calls, etc. in a single unified dashboard, it was important to see information from the accounts they were reaching. Given the nature of the data, they had different sources. The first challenge was to integrate all of this data into an unified view, this is where I shined: I am pretty good at SQL :\) and Tableau too. 

{% mermaid %}
graph LR
    A["Raw call center data"]
    B["Accounts data"]
    C["Payment data"]
    D["Integrating call center data: cleaning, transforming, aggregating"]
    E["Integrating payment data"]
    F["Tableau dashboard"]
    G["Unified data view"]

    A --> D --> G
    B --> G
    C --> E --> G
    G --> F
{% endmermaid %}

## Objectives

- Unify all data in a single data view
- Develop a Tableau Dashboard to visualize KPIs

Additionally, a parallel project that came after this one using the same data set
- Develop predictive and clustering models to predict likelihood of payment and segment different customers to optimize collections strategies.

## Tools
SQL, Tableau, Python


## Skills
Data analysis, organization, problem solving, attention to detail, team-work and presentation

# Challenges
The biggest challenge was dealing with the data. It was a lot of effort to integrate all the data together.

## Outcome
The outcome was a practical and beautiful Tableau dashboard, where they could just take a look at the dashboard and see where they are at, this saved a lot as they were doing this with manual weekly reports. They were also able to identify top and bottom performers.

The data set served as a source for other projects and analysis. 