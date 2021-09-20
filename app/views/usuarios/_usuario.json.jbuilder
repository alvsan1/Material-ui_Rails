json.extract! usuario, :id, :nombre, :mail, :created_at, :updated_at
json.url usuario_url(usuario, format: :json)
