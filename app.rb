# ======= requires =======
require "sinatra"
require 'sinatra/activerecord'
require "sinatra/reloader"
# ======= database =======
# set :database, "sqlite3:<db_name>.db"
# ======= home =======
get '/' do
	puts "**** home ****"
	erb :home
end

get '/about' do
	puts "**** about ****"
	erb :about
end

get '/podcasts' do
	puts "**** podcasts ****"
	erb :podcasts
end

get '/contact' do
	puts "**** contact ****"
	erb :contact
end

post '/signup' do
  puts "*** POST: signup_form ***"
  puts "params: #{params.inspect}"
	erb :signup
end
