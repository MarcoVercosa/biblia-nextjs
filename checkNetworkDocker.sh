#!/bin/bash

#for i in $(docker network ls | grep bridge | awk '{print $1}'); do docker network rm $i; done
docker network prune -f

echo "Network Bridge verificado"
