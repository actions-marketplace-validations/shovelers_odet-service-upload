#!/bin/sh

set -e

sh -c "curl --silent --show-error --fail -X POST 'https://odet-staging.herokuapp.com/services' --header 'X-ODET-KEY: $1' --form 'yaml=@./$2'"
