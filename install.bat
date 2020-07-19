:: This is really bad but I don't really have time to learn batch right now, please forgive me xD

if %1=="Ferdi" (
  if %2=="all" (
    mklink "%AppData%\Ferdi\recipes\instagram\darkmode.css" "instagram\darkmode.css" && echo "Installed Instagram theme successfully"
    mklink "%AppData%\Ferdi\recipes\messenger\darkmode.css" "messenger\darkmode.css" && echo "Installed Messenger theme successfully"
    mklink "%AppData%\Ferdi\recipes\telegram\darkmode.css" "telegram\darkmode.css" && echo "Installed Telegram theme successfully"
    mklink "%AppData%\Ferdi\recipes\whatsapp\darkmode.css" "whatsapp\darkmode.css" && echo "Installed WhatsApp theme successfully"
  )
  else (
    mklink "%AppData%\Ferdi\recipes\%2\darkmode.css" "%1\darkmode.css" && echo "Installed %2 theme successfully"
  )
)

if %1=="Franz" (
  if %2=="all" (
    mklink "%AppData%\Franz\recipes\instagram\darkmode.css" "instagram\darkmode.css" && echo "Installed Instagram theme successfully"
    mklink "%AppData%\Franz\recipes\messenger\darkmode.css" "messenger\darkmode.css" && echo "Installed Messenger theme successfully"
    mklink "%AppData%\Franz\recipes\telegram\darkmode.css" "telegram\darkmode.css" && echo "Installed Telegram theme successfully"
    mklink "%AppData%\Franz\recipes\whatsapp\darkmode.css" "whatsapp\darkmode.css" && echo "Installed WhatsApp theme successfully"
  )
  else (
    mklink "%AppData%\Franz\recipes\%2\darkmode.css" "%1\darkmode.css" && echo "Installed %2 theme successfully"
  )
)

if %1=="ferdi" (
  if %2=="all" (
    mklink "%AppData%\Ferdi\recipes\instagram\darkmode.css" "instagram\darkmode.css" && echo "Installed Instagram theme successfully"
    mklink "%AppData%\Ferdi\recipes\messenger\darkmode.css" "messenger\darkmode.css" && echo "Installed Messenger theme successfully"
    mklink "%AppData%\Ferdi\recipes\telegram\darkmode.css" "telegram\darkmode.css" && echo "Installed Telegram theme successfully"
    mklink "%AppData%\Ferdi\recipes\whatsapp\darkmode.css" "whatsapp\darkmode.css" && echo "Installed WhatsApp theme successfully"
  )
  else (
    mklink "%AppData%\Ferdi\recipes\%2\darkmode.css" "%1\darkmode.css" && echo "Installed %2 theme successfully"
  )
)

if %1=="franz" (
  if %2=="all" (
    mklink "%AppData%\Franz\recipes\instagram\darkmode.css" "instagram\darkmode.css" && echo "Installed Instagram theme successfully"
    mklink "%AppData%\Franz\recipes\messenger\darkmode.css" "messenger\darkmode.css" && echo "Installed Messenger theme successfully"
    mklink "%AppData%\Franz\recipes\telegram\darkmode.css" "telegram\darkmode.css" && echo "Installed Telegram theme successfully"
    mklink "%AppData%\Franz\recipes\whatsapp\darkmode.css" "whatsapp\darkmode.css" && echo "Installed WhatsApp theme successfully"
  )
  else (
    mklink "%AppData%\Franz\recipes\%2\darkmode.css" "%1\darkmode.css" && echo "Installed %2 theme successfully"
  )
)