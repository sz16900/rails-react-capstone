module Api
    module V1
        class AppointmentsController < ApplicationController
            protect_from_forgery with: :null_session

            def index 
                if user_signed_in?
                    appointments = current_user.appointments
                    render json: AppointmentSerializer.new(appointments, options).serialized_json
                else
                  render json: {}, status: 401
                end 
            end


            def create
                if user_signed_in?
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

            def options 
                @options ||= {include: %i[coach]}
            end

            def coach
                @coach ||= Coach.find(params[:coach_id])
            end

            def appointment_params
                params.require(:appointment).permit(:coach_id, :user_id, :appointment_time) 
            end

        end
    end
end