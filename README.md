# **tottenham**
Serviço que coleta o Open Graph de uma determinada URL

**Projeto WIP**

**stack:**
- node 
- axios
- express
- cheerio

**request:**
http://localhost:9100/?url=https://www.youtube.com/watch?v=bO_FHXWh3Zo

**response:**
~~~javascript
{
  "title": "Highlights | Manchester United 1-1 Tottenham Hotspur | Fernandes strikes | Premier League 19/20",
  "description": "See the best of the action as Bruno Fernandes scores to secure a point for the Reds on their return to action in the Premier League. Subscribe to Manchester ...",
  "image": "https://i.ytimg.com/vi/bO_FHXWh3Zo/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=bO_FHXWh3Zo"
}
