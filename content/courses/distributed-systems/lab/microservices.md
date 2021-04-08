---
title: Making an app with microservice architecture
date: 2021-02-07
type: book
weight: 30
diagram: true
---

## Goal

Your task is to build a distributed web system following the microservice architecture. It should be implemented following the steps below.

## Step 1: Build a simple server (and a client)

You will build a rudimentary version of a **Ride sharing app** (like Uber/Pathao). The app itself will not be complex as we are here to build a distributed system and not a full-fledged app.

### Architecture

```mermaid
graph TD
  A["Client (Bot)"]-->B
  B[Server]-->C[(Database)]
```

### Requirements

#### Client bot

The client bot will **spam the server every second** with the following two http requests:
- Rider's request contains: 
    - Name
    - Rider's Coordinates (x, y) [Random]
    - Rider's Destination (x, y) [Random]
- Driver's request contains:
    - Name
    - Car number
    - Driver's Coordinates [Random]

#### Server requirements

- **/rider** endpoint accepts rider requests (http)
- **/driver** endpoint accepts driver requests (http)
- The server will store the information **in memory** for **at least 5 seconds**. Design a function that will periodically run on the cached information and make pairs (rider, driver) based on their shortest linear distance.
- Open a **socket.io** bidirectional communication medium and send messages through the **/communication** namespace. Messages from the server will be sent to the client through this channel.
- Send the ride fare to the client (linear distance * 2 taka) (through socket.io)
- **/rating** endpoint receives a random rating after the bot receives a fare

#### Database
- The database only stores driver ratings
- Storing other information is not necessary (yet)
- Use mysql or mongodb as your database

#### Other instructions
- You may use any programming language. However, **Node.js or Python or Go** is recommended
- Frameworks/libraries can be used. However, it's best not to use full-fledged frameworks. Simpler frameworks (like express/flask/gin) will make things easier
- Don't implement extra features. Because later, distributing them in multiple instances could turn out to be a problem

## Step 2: Service into microservices

If you have completed step 1, congratulations! By now you have learned how to-
* make APIs and call them
* make sockets for bidirectional communication
* make schedulers that call a function periodically
* integrate database with an application

If you have done all that, kudos to you! You are now ready to start building microservices (or more like breaking an app into microservices).

### Requirements

Let's recap what modules we have in our backend system so far:
* a rider module
* a driver module
* a rider/driver matching module
* a rating module connecting to a database
* a communication module for bidirectional communication

We'll convert these modules to make three business services.
1. Ride sharing service
    - rider module
    - driver module
    - rider/driver matching module
1. Communication service
1. Rating service

Our system architecture will be like the following.

### Architecture

```mermaid
graph TD
A --- C["Communication service (socket.io)"]
A["Client (Bot)"]-->B["Load balancer (Nginx)"]
B-->R[Ride sharing service]
B-->Ra[Rating service]
Ra-->D[(Database)]
R-->C
```

### What to do?
1. In your project folder, make sub projects. Each sub project will be a separate service.
1. Download and configure nginx so that it works as a reverse proxy for all http services (in our case **ride sharing service**  and **rating service**)
1. Write additional code so that the services communicate among themselves and the business logic discussed in _step 1_ is served.

## Step 3: Containerize and orchestrate

## Step 4: Geo distribute the app
