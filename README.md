# Chatter Chat App

Chatter allows users to sign up, create chat rooms, and start chatting.

Built with:
* Ruby
* Rails
* React-Rails
* PostgreSQL

## How to start up Chatter:
1. **Clone repository**
   - `git clone git@github.com:echeng924/chat-app.git`


1. **Make sure the following are installed:**
   1. Ruby
   1. PostgresQL
   1. Node/NPM
   4. Yarn
   
   
For Ubuntu, instructions are provided here: [UbuntuInstall.md](./UbuntuInstall.md)

Run the following commands:

    gem install bundler -v 1.16.1

    cd chat-app
    bundle install
    yarn install --check-files

    rake db:create
    rake db:migrate

    rails s


#### Resources:
- https://github.com/reactjs/react-rails
