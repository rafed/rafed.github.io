---
title: System Design Golden Rules
date: 2023-07-08
type: book
weight: 30
---

1. If we are dealing with a read-heavy system, it's good to consider using a Cache.

2. If we need low latency in the system, it's good to consider using a Cache & CDN.

3. If we are dealing with a write-heavy system, it's good to use a Message Queue for Async processing

4. If we need a system to be ACID complaint, we should go for RDBMS or SQL Database

5. If data is unstructured & doesn't require ACID properties, we should go for NO-SQL Database

6. If the system has complex data in the form of videos, images, files etc, we should go for Blob/Object storage

7. If the system requires complex pre-computation like a news feed, we should use a Message Queue & Cache

8. If the system requires searching data in high volume, we should consider using a search index, tries or a search engine like Elasticsearch

9. If the system requires to Scale SQL Database, we should consider using Database Sharding

10. If the system requires High Availability, Performance, & Throughput, we should consider using a Load Balancer

11. If the system requires faster data delivery globally, reliability, high availability, & performance, we should consider using a CDN

12. If the system has data with nodes, edges, and relationships like friend lists, & road connections, we should consider using a Graph Database

13. If the system needs scaling of various components like servers, databases, etc, we should consider using Horizontal Scaling

14. If the system requires high-performing database queries, we should use Database Indexes

15. If the system requires bulk job processing, we should consider using Batch Processing & Message Queues

16. If the system requires reducing server load and preventing DOS attacks, we should use a Rate Limiter

17. If the system has microservices, we should consider using an API Gateway (Authentication, SSL Termination, Routing etc)

18. If the system has a single point of failure, we should implement Redundancy in that component

19. If the system needs to be fault-tolerant, & durable, we should implement Data Replication (creating multiple copies of data on different servers)

20. If the system needs user-to-user communication (bi-directional) in a fast way, we should use Websockets

21. If the system needs the ability to detect failures in a distributed system, we should implement a Heartbeat

22. If the system needs to ensure data integrity, we should use Checksum Algorithm

23. If the system needs to transfer data between various servers in a decentralized way, we should go for the Gossip Protocol

24. If the system needs to scale servers with add/removal of nodes efficiently, with no hotspots, we should implement Consistent Hashing

25. If the system needs anything to deal with a location like maps, nearby resources, we should consider using Quadtree, Geohash, etc

