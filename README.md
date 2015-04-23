# Engineering – Case Study

## Requirements

* Build a small browser based application which will interface with the GitHub
API to show the repositories belonging to a developer
* The application should be able to take some developers' usernames as input
* If one name is supplied, list the repositories belonging to that user
* If two names are supplied, tell us who has the most stars on their own repos
* Add any additional info you think may be useful to see

## Installation

```
git clone https://github.com/lazlojuly/concrete-case-study.git
cd concrete-case-study && npm install
node bin/www
```


## Configuration

This demo client requires a test GitHub account in order to make authenticated
requests. This was added because requests using Basic Authentication or OAuth, 
can make up to 5,000 requests per hour. For unauthenticated requests, the rate 
limit allows only up to 60 requests per hour. 
More informaiton here: [Rate Limiting in GitHub API](https://developer.github.com/v3/#rate-limiting)

Open ```configs/main.js``` and add username and password of a test GitHub account.


## Demo Installation

A demo version is available online at: [github-client.lazlojuly.com](http://github-client.lazlojuly.com)



## Features

* Intuitive user interface

* Username validation

* List repositories by username
 * Infinite scroll after more than 20 repos

* Display user profile card with total star count
  * Star count is displayed with CountUp effect at comparison


## TODOS

As a compact demo feature it lacks of the following important work:

* no tests were generated
* frontend code needs to be separated (views, controllers etc.)
* error handling is incomplete
* user feedback is also waiting to be added
* authenticated proxy is not perfect, and it does not proxy the original header back to the client
* only 1 GitHub API method is used at multiple places -
additional calls should be made; that is to check whether the user can be found or not. 
