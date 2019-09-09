class DemandSerializer < ActiveModel::Serializer
    attributes :id, :date_from, :date_to, :reason_request, :user_id
  end
  