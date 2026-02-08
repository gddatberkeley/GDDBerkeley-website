#!/bin/bash

PATH=$PATH:~/bin
#github check
echo "github pull"
git pull origin main
#google drive check even though not sure if google drive exists/who has access
if rclone check gdd-gdrive:website-assets assets/gdrive; then
    echo "(¬‿¬) No differences detected."
else
    # File are different
    echo "Found changes, rebuilding website"
    rclone sync gdd-gdrive:website-assets assets/gdrive
fi
#build website
hugo -d ~/public_html