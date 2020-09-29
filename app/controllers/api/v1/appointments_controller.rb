module Api
    module V1
        class AppointmentsController < ApplicationController
            protect_from_forgery with: :null_session

            def index 
                if user_signed_in?
                  render json: current_user.appointments
                else
                  render json: {}, status: 401
                end 
            end


            def create
                if user_signed_in?
                    p "Here"
                    appointment = coach.appointments.create(appointment_params.merge(:user_id => current_user.id))

                    if appointment.save
                        render json: AppointmentSerializer.new(appointment).serialized_json
                    else
                        render json: {error: appointment.errors.messages}, status: 422
                    end
                end

            end

            def destroy
                appointment = Appointment.find(params[:id])

                if appointment.destroy
                    head :no_content
                else
                    render json: {error: appointment.errors.messages}, status: 422
                end
            end
            
            private

            def coach
                @coach ||= Coach.find(params[:coach_id])
            end

            def appointment_params
                params.require(:appointment).permit(:appointment_time, :coach_id) 
            end

        end
    end
end