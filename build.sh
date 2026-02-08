#!/bin/bash

PATH=$PATH:~/bin
#github check
echo "github pull but split into fetch and reset for more safety"
git fetch origin main #look at the git changes
git reset --hard origin/main #change server files to look like git 
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