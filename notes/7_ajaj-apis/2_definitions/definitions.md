<!-- * VERBS -->
<!-- Verbs are part of the API requests such as GET, PUT and POST, which are different types of requests. -->
<!-- Most of the free web APIs will use GET requests. -->
<!-- GET is used to retrieve info and POST is typically used when we are trying to send info. -->

<!-- * HTTP STATUS CODES -->
<!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status -->
<!-- For Example, 200 (most common and means request succeeded) or anything in the 200's are usually a good status code. -->
<!-- Status codes in the 300's have to do with redirecting. -->
<!-- Status codes in the 400's are errors and something on the client side went wrong. -->
<!-- Status codes in the 500's are errors and something on the server side went wrong. -->

<!-- * QUERY STRINGS -->
<!-- Common on endpoints to have it followed by an ID or number like: .../api/people/:id/ or https://swapi.dev/api/people/1/ -->
<!-- sometimes the :id is displayed {{id}} or <id>, which all mean the same thing that you replace it with your id. -->
<!-- The other common method is using a "query string" in the URL. For example: https://www.amazon.com?K=BUCATINI&CRID... -->
<!-- Another example specifies sort and color: ...?sort=desc&color=blue. The API will not care about what you put in the query string unless it is looking for that particular query. Usually use "q" but can be API specific. -->
<!-- Query string can sometime combine different values: https://api.tvmaze.com/schedule?country=US&date=2014-12-01 -->
<!-- Therefore a query string starts with a ? is any key=value pair separated by an ampersand. -->
<!-- Using postman, you can add key:value pair parameters to the UI instead of manually adding to the URL. -->

<!-- * HTTP HEADERS -->
<!-- An additional way to pass info or kind of like meta data key value pairs that add on details to your API request (i.e. cookies:value or content-language: en-US). They do not mean much until we start working with backend topics like node. -->
<!-- Some APIs, like icanhazdadjokes do not specify API in the endpoint to allow JSON response so you have to specify this with a header. Postman has a "header" section you can do this and you can also do it via your code API request. -->
