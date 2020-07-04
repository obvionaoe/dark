#!/bin/sh

if [ $1 == "all" ]
then
  ln -s "$PWD/instagram/darkmode.css" "$HOME/.config/Ferdi/recipes/instagram/darkmode.css" && echo -e "Installed Instagram theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/messenger/darkmode.css" "$HOME/.config/Ferdi/recipes/messenger/darkmode.css" && echo -e "Installed Messenger theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/telegram/darkmode.css" "$HOME/.config/Ferdi/recipes/telegram/darkmode.css" && echo -e "Installed Telegram theme successfully \xE2\x9C\x85\x00"
  ln -s "$PWD/whatsapp/darkmode.css" "$HOME/.config/Ferdi/recipes/whatsapp/darkmode.css" && echo -e "Installed WhatsApp theme successfully \xE2\x9C\x85\x00"
else
  ln -s "$PWD/$1/darkmode.css" "$HOME/.config/Ferdi/recipes/$1/darkmode.css" && echo -e "Installed $1 theme successfully \xE2\x9C\x85\x00"
fi