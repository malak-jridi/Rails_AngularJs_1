class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :image, :salary , :role
end
