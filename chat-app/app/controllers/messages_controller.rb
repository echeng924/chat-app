class MessagesController < ApplicationController
    def create
        @message = Message.create(
            user_id: params[:user_id],
            chat_id: params[:chat_id],
            text: params[:text] 
        )

        if @message.save
            render json: {
                messageText: @message.text
            }
        end
    end
end