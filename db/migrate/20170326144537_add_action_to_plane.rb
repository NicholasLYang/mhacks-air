class AddActionToPlane < ActiveRecord::Migration[5.1]
  def change
    add_column :planes, :action, :int
  end
end
