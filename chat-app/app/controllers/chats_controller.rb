class ChatsController < ApplicationController
    def index
        # Will render root view
    end

    # GET /all-chats
    def all_chats
        # Will show all chats
        @chats = Chat.all
        render json: {
            rooms: @chats
        }
    end

    # GET /chats/:id
    def show
        chat = Chat.includes(messages: [:user]).find(params[:id])

        @messages = chat.messages

        render json: {
            messages: @messages.as_json( {include: :user } )
        }
    end

    # POST /chats
    def create
        chat_exists = Chat.where(name: params[:chat_name]).present?
        if chat_exists
            render json: {
                error: 'Please enter a unique name'
            }
            return
        end

        @chat = Chat.create(name: params[:chat_name])
        if @chat.save
            render json: {
                chatName: @chat.name,
                allChats: Chat.all
            }
        end
    end
end