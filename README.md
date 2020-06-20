# **udinese**
![Udinese](https://futhead.cursecdn.com/static/img/20/clubs/55.png) 
Serviço que coleta o Open Graph de uma determinada URL

**Projeto WIP**

**stack:**
- node 
- axios
- express
- cheerio

**request:**
http://localhost:9100/?url=https://www.youtube.com/watch?v=Izcplf0dWMM

**response:**
~~~javascript
{
  "title": "Antonio Di Natale Best Serie A Goals | Throwback | Serie A",
  "description": "Former Udinese and Empoli Player Antonio Di Natale best Serie A goals | Serie A This is the official channel for the Serie A, providing all the latest highli...",
  "image": "https://i.ytimg.com/vi/Izcplf0dWMM/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=Izcplf0dWMM"
}
