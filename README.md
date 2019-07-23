# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

First, the browser checks if techtonic.com's IP address is already in the browser cache. If not, the IP might be stored in the ISP's server. If the
IP is not stored by the ISP's server, the ISP initiates a query to find the IP address for techtonic.com's server. Once the browser has the IP address, it establishes
a connection with the server. The browser then sends an HTTP request to the server, and the server gives back a response. If nothing is wrong, the server sends back the
web page's html code.



## From start to finish, how does data reach you to be rendered in the browser?

After the server receives a request, it responds by sending a string of text containing the html code. This data is contained in something called a "packet". These packets
are sent all over the world through cables that run underground and on the ocean floor.


## What code is rendered in the browser?

The browser renders html code. If any scripts are contained in the html, the browser will request that code as well.

## What is the server-side code’s main function?

The main purpose of server-side code is to process and save user input. Server-side code is also used to render pages to the user.


## What is the client-side code’s main function?

The main purpose of client-side code is to manipulate the user interface. Client-side code runs in the browser and is much faster for the user than server-side code. The main disadvantage is that some browsers won't be able to run the code.  


## What is runtime?

Runtime is the software that executes while a program is running.


## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of the client side assets would be created each time someone requested the web page.


## How many instances of the server-side code are available at any given time?

This depends on how much memory the server has. If the server has more memory, more users can use the web application at the same time.  



## How many instances of the databases connected to the server application are created?

This largely depends on the type of application. If the user needs access to the database in order for the application to work properly, a new instance would be created.
