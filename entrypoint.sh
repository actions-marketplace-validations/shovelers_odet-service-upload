#!/bin/sh

set -e

sh -c "curl --silent --show-error --fail -X POST 'https://odet-staging.herokuapp.com/services' --form 'yaml=@./$1'"
