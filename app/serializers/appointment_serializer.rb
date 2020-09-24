class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :coach_id, :user_id, :appointment_time
end
