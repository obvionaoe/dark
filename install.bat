echo off

if %1=="all" (
  mklink "%AppData%\Franz\recipes\instagram\darkmode.css" "instagram\darkmode.css" && echo "Installed Instagram theme successfully"
  mklink "%AppData%\Franz\recipes\messenger\darkmode.css" "messenger\darkmode.css" && echo "Installed Messenger theme successfully"
  mklink "%AppData%\Franz\recipes\telegram\darkmode.css" "telegram\darkmode.css" && echo "Installed Telegram theme successfully"
  mklink "%AppData%\Franz\recipes\whatsapp\darkmode.css" "whatsapp\darkmode.css" && echo "Installed WhatsApp theme successfully"

else (
  mklink "%AppData%\Franz\recipes\%1\darkmode.css" "%1\darkmode.css" && echo "Installed %1 theme successfully"
)
