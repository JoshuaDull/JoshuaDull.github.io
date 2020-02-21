---
layout: page
title: Members
permalink: /members/
redirect_from: 
  - /home/members/
  - /home/members
---
#### 2017-2018 NESCLiC member institutions and their participants.

<!-- Members -->
{% assign members = site.data.members %}
{% assign members = members | sort:"yearJoined" %}

<!-- Document -->
<table>
{% for member in members %}
<tr>
  <td><strong>{{ member.Name }}</strong> ({{ member.Pronouns }})</td>
  <td>{{ member.yearJoined }}</td>
  <td>{{ member.Institution }}</td>
  <td>{{ member.Title }}</td>
</tr>

{% endfor %}
</table>