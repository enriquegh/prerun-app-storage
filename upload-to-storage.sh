#!/bin/bash

curl -u "$SAUCE_USERNAME":"$SAUCE_ACCESS_KEY" -X POST 'https://saucelabs.com/rest/v1/storage/enriquegh/echo.sh?overwrite=true' \
--data-binary '@./echo.sh'
curl -u "$SAUCE_USERNAME":"$SAUCE_ACCESS_KEY" -X POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \
--form 'name="echo.sh"' \
--form 'payload=@"./echo.sh"'