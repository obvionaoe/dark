<p align="center" style="text-align: center;">
  </br>
  <img src="https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/icon.png" width="198"/>
</p>

# **Dark**

**This repository is a collection of dark themes for Rambox, Franz or Ferdi that I use in some messaging services, if something's broken, let me know through an issue!**

## **Applying the themes**

### **Rambox**

**Disclaimer**: I no longer use Rambox but I left this here for everyone who still uses it!

<details>
  <summary>Click to expand!</summary>
  
  First, find the service you wish to apply the theme to

  ![find](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/tutorial/find.png)

  go into the settings for that service

  ![configure](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/tutorial/configure.png)

  once you're there, click on "Advanced".

  ![advanced](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/tutorial/advanced.png)

  A text-box will appear, copy the JavaScript code from [function.js](rambox/function.js) into it, then copy the CSS code for the service you want to theme into the `[paste css here]` area - **don't remove the backticks** - and save your changes!

  ![paste](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/tutorial/paste.gif)

  Then press "Yes" on the service restart popup

  ![save](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/tutorial/save.png)

  and that's it, all done and ready to use!
</details>

### **Ferdi/Franz**

<details>
  <summary>If you have Git</summary>

  Choose a folder where you want to store the themes and run the following commands:
  <details>
    <summary>Linux/MacOS</summary>

    ```bash
    $ git clone https://github.com/obvionaoe/dark.git
    $ cd dark
    $ ln -s /path/to/cloned/directory/[service]/darkmode.css ~/.config/Ferdi/recipes/[service]/darkmode.css
    ```

  Replace `[service]` by the name of the service you want to theme.\
  `/path/to/cloned/directory/` **must be an absolute path.**
  </details>
  
  <details>
    <summary>Windows</summary>

    ```bash
    $ git clone https://github.com/obvionaoe/dark.git
    $ cd dark
    $ mklink %AppData%\Franz\recipes\[service]]\darkmode.css [service]\darkmode.css
    ```
  Replace `[service]` by the name of the service you want to theme.
  </details>

  To apply the themes, just turn on dark mode inside the service settings.

</details>

<details>
  <summary>If you don't have Git</summary>
  
  Just copy the `[service]/darkmode.css` file, with `[service]` being the name of the service you want to update, into the recipe folder of that service.

  To apply the themes, just turn on dark mode inside the service settings.
  
</details>

## **Updating the themes**

### **Rambox**

Same steps you use for applying them in the first place.

### **Ferdi/Franz**

<details>
  <summary>If you have Git</summary>
  
  Just run `git pull origin master` in the repo folder you cloned and reload the services inside Ferdi, Franz or Rambox.
</details>

<details>
  <summary>If you don't have Git</summary>
  
  Just copy the `[service]/darkmode.css` file, with `[service]` being the name of the service you want to update, into the recipe folder of that service!
</details>

## **Themes**

![Instagram](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/icons/instagram.png)

**Instagram** - forked from [**vednoc/dark-instagram**](https://github.com/vednoc/dark-instagram)\
(Customized)

<details>
  <summary>Screenshot</summary>
  
  ![Instagram](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/screenshots/instagram.png)
</details>

</br>

![Messenger](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/icons/messenger.png)

**Messenger** - forked from [**auscompgeek/fb-messenger-dark**](https://github.com/auscompgeek/fb-messenger-dark)\
(Customized, bugfixed and improved)

<details>
  <summary>Screenshot</summary>
  
  ![Messenger](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/screenshots/messenger.png)
</details>

</br>

![Telegram](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/icons/telegram.png)

**Telegram** - forked from [**Barina/Dark-Telegram**](https://github.com/Barina/Dark-Telegram)\
(Customized, bugfixed and optimized performance)

<details>
  <summary>Screenshot</summary>
  
  ![Messenger](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/screenshots/telegram.png)
</details>

</br>

![WhatsApp](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/icons/whatsapp.png)

**WhatsApp** - forked from [**vednoc/dark-whatsapp**](https://github.com/vednoc/dark-whatsapp)\
(Customized and optimized performance)

<details>
  <summary>Screenshot</summary>
  
  ![WhatsApp](https://raw.githubusercontent.com/obvionaoe/dark-resources/master/images/screenshots/wa.png)
</details>
