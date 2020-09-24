class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.belongs_to :coach, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.datetime :appointment_time

      t.timestamps
    end
  end
end
