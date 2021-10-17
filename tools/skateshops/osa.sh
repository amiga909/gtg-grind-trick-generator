#!/usr/bin/env bash
DOMAIN="$1"
URL="https://ahrefs.com/site-explorer/overview/v2/subdomains/live?target=${DOMAIN}"
 
osascript -e "tell application \"Google Chrome\" to open location \"$URL\""