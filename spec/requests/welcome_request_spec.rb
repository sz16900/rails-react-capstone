require 'rails_helper'

RSpec.describe 'Welcomes', type: :request do
  describe 'GET /' do
    it 'returns http success' do
      get '/users/sign_up'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /app' do
    it 'returns http success' do
      get '/users/sign_in'
      expect(response).to have_http_status(:success)
    end
  end
end
