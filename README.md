# Development Guide
The website is built using the static site generator hugo https://gohugo.io/, you should be able to just see it with hugo server after installing it. The hugo docs has some information, but very briefly `layouts/_default/single.html` is like the "outer" html, and the {{ content }} is different for each page (in `content/*.html`). Then, hugo generates output to `public/` or `public_html/`. The limitation is that our site is static, so there's no server side code.

The main css is in static/style.css which should include everything.

You might need to control click the reload button after changing the css, otherwise the browser might cache it. Same with static images. Images from assets should update since we add sha sum in the pipline.

We store images in google drive. Just download website-asset from our club google drive to assets/gdrive. Alternatively, setup rclone to do this automatically.

# Deploying
## Dependencies
https://gohugo.io/installation/
https://rclone.org/downloads/

## cron
Cron job to run build script every ten minutes. Automatically rebuild the website if images from google drive changes.

Run `crontab -e`
```
*/10 * * * * cd $HOME/GDDBerkeley-website && ./build.sh >> $HOME/logs.txt 2>&1
```
