class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.string :name
    end
  end
end
