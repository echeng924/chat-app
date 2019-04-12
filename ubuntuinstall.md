# Ubuntu instructions:

    sudo apt-get update

## Install ruby:

    sudo apt-get -y install build-essential g++ zlib1g zlib1g-dev curl
    sudo apt-get -y install ruby-full

## Install postgresql:

    sudo apt-get -y install postgresql postgresql-contrib libpq-dev
    sudo service postgresql start

## Setup postgres user (replace root with current username):

    su postgres
    # psql -c "drop role root;"
    psql -c "create role root with LOGIN SUPERUSER CREATEDB;"
    exit

## Install node/npm:

    sudo apt-get -y install nodejs npm

## Install yarn:

    # Instructions from: https://yarnpkg.com/lang/en/docs/install/#debian-stable
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn