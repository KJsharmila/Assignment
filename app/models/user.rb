class User < ActiveRecord::Base
	has_secure_password :validations => false

 validates :name, presence: true

 validates :email,
 :presence => true,
 :uniqueness => {:case_sensitive => false},
 :format => {:with => ConfigCenter::GeneralValidations::EMAIL_FORMAT_REG_EXP}

 validates :password, :presence => true,
 :length => {:minimum => 6}


 def self.authenticate(email, password)
  user = find_by_email(email)
  if user && user.password_digest == BCrypt::Engine.hash_secret(password, user.password_digest)
    user
  else
    nil
  end
end
end
