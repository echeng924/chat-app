class UsersController < ApplicationController
    def sign_up
    end

    def create
        user_exists = User.where(name: params[:username].downcase).present?
        if user_exists
            render json: {
                error: 'This user name has already been taken'
            }
            return
        end

        @user = User.create(name: params[:username].downcase, password: params[:password])

        if @user.save
            render json: {
                res: true,
                user: @user
            }
        end
    end

    def log_in
        @user = User.where(name: params[:username].downcase, password: params[:password])

        if @user.present?
            render json: {
                user: @user.first
            }
        else
            render json: {
                error: 'Your account does not exist! Please sign up.'
            }
        end
    end
end