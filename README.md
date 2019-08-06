# European countries
This is a simple JavaScript application that displays all of the European countries contained within the [RESTcountries](https://restcountries.eu/#api-endpoints-region) API. 

### Intention
To learn how to access, parse and display JSON data from an API using JavaScript and AJAX. 

##### Timeframe 
2 days

### Wins
I enjoyed using data from the API to set attribute values for my Javascript generated elements and hooking that up with a basic display filter written in jQuery.   

### Challenges
I realised that I didn't know how to access objects contained within an array, but I found a solution: `country.currencies[0].name`. 

### Lessons learned
- Using fetch & parsing JSON data.
- [Substring method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) for limiting string lenghts returned by an API. 
- DOM manipulation using Javascript. 
- Setting IDs and classes based on the data returned by the API. 

### Future development
- Handle HTTP errors in relation to the [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).
- Upscale the project to include all countried in the world and handle pagination. 
