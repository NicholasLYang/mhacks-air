class AddPlaneToCommands < ActiveRecord::Migration[5.1]
  def change
    add_column :commands, :plane, :id
  end
end
