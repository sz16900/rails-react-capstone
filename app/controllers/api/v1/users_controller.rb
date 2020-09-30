module Api
    module V1
        class UsersController < ApplicationController

            def index 
                if user_signed_in?
                  render json: current_user.name
                else
                  render json: {}, status: 401
                end 
            end
        end
    end
end