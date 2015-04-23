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
```

## Configuration

This demo client requires a test GitHub account in order to make authenticated
requests. This was added because only 60 anonymous calls allowed per hour.

Open ```configs/main.js``` and add username and password of a test GitHub account.


## Demo Installation

A demo version is available online at: http:github-client.lazlojuly.com


## Features

* Intuitive user interface

* Username validations

* List repositories by username
 * Infinite scroll when more than 20 repos

* Display user profile card with total star count
  * Star count is displayed with CountUp effect at comparison

## TODOS

As a compact demo feature it lacks of important work:

* no tests were generated
* frontend code needs to be separated (views, controllers etc.)
* error handling is incomplete
* user feedback is also waiting to be added
* authenticated proxy is not perfect and it does not proxy the original header back to client
* only 1 GitHub API method is used at multiple places -
where additional calls should be made to check whether the user can be found or not. 
