#!/bin/bash

app=${1,,}
app=${app^}

service=${2,,}

if [ $service == "all" ]
then
  ln -s "$PWD/instagram/darkmode.css" "$HOME/.config/$app/recipes/instagram/darkmode.css" && echo -e "Installed Instagram theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/messenger/darkmode.css" "$HOME/.config/$app/recipes/messenger/darkmode.css" && echo -e "Installed Messenger theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/telegram/darkmode.css" "$HOME/.config/$app/recipes/telegram/darkmode.css" && echo -e "Installed Telegram theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/whatsapp/darkmode.css" "$HOME/.config/$app/recipes/whatsapp/darkmode.css" && echo -e "Installed WhatsApp theme successfully \xE2\x9C\x85\x00"
else
  ln -s "$PWD/$service/darkmode.css" "$HOME/.config/$app/recipes/$service/darkmode.css" && echo -e "Installed $service theme successfully \xE2\x9C\x85\x00"
fi