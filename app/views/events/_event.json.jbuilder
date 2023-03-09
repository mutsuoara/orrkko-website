json.extract! event, :id, :date, :time, :name, :cost, :location, :website, :created_at, :updated_at
json.url event_url(event, format: :json)
