module Api
    module V1
        class CoachesController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                coaches = Coach.all

                render json: CoachSerializer.new(coaches, options).serialized_json
            end

            def show 
                coach = Coach.find_by(slug: params[:slug])

                render json: CoachSerializer.new(coach, options).serialized_json
            end

            def create 
                coach = Coach.new(coach_params)

                if coach.save
                    render json: CoachSerializer.new(coach).serialized_json
                else
                    render json: {error: coach.error.messages}, status: 442
                end
            end

            def update 
                coach = Coach.find_by(slug: params[:slug])

                if coach.update(coach_params)
                    render json: CoachSerializer.new(coach, options).serialized_json
                else
                    render json: {error: coach.error.messages}, status: 442
                end
            end

            def destroy 
                coach = Coach.find_by(slug: params[:slug])

                if coach.destroy
                    head :no_content 
                else
                    render json: {error: coach.error.messages}, status: 442
                end
            end

            private

            # Strong params
            def coach_params
                params.require(:coach).permit(:name, :image_url, :description, :age, :tagline, :likes, :score)
            end

            # Also include any associated data to the json payload
            # Maybe I do not need to do this, for now I keep it
            def options 
                @options ||= {include: [:appointments, :reviews]}
                # @options ||= {include: %i[reviews]}

            end
        end
    end
end