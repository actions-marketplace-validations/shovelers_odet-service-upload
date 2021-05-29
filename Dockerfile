FROM alpine

LABEL "com.github.actions.name"="Github Action for Odet service upload"
LABEL "com.github.actions.description"="uploads service yaml file to Odet portal"
LABEL "com.github.actions.icon"="download-cloud"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="http://github.com/shovelers/odet-service-upload"
LABEL "homepage"="http://github.com/shovelers/odet-service-upload"
LABEL "maintainer"="debashish <debashish@shovel.company>"

RUN apk add --no-cache curl ca-certificates

ADD *.sh /

ENTRYPOINT ["/entrypoint.sh"]
CMD ["--help"]
