# -*- encoding: utf-8 -*-
# stub: grape-swagger-rails 0.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "grape-swagger-rails".freeze
  s.version = "0.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Alexander Logunov".freeze]
  s.date = "2016-09-22"
  s.description = "Swagger UI as Rails Engine for grape-swagger gem".freeze
  s.email = ["unlovedru@gmail.com".freeze]
  s.homepage = "https://github.com/ruby-grape/grape-swagger-rails".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.4".freeze
  s.summary = "Swagger UI as Rails Engine for grape-swagger gem".freeze

  s.installed_by_version = "2.7.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, [">= 3.2.12"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<git>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec-rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<capybara>.freeze, [">= 0"])
      s.add_development_dependency(%q<grape>.freeze, [">= 0"])
      s.add_development_dependency(%q<grape-swagger>.freeze, [">= 0.7.2"])
      s.add_development_dependency(%q<selenium-webdriver>.freeze, [">= 0"])
      s.add_development_dependency(%q<sass-rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<uglifier>.freeze, [">= 0"])
      s.add_development_dependency(%q<coffee-rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<jquery-rails>.freeze, [">= 0"])
      s.add_development_dependency(%q<grape-swagger-ui>.freeze, [">= 0"])
      s.add_development_dependency(%q<sprockets>.freeze, [">= 0"])
      s.add_development_dependency(%q<rack>.freeze, ["~> 1.6"])
      s.add_development_dependency(%q<rack-cors>.freeze, [">= 0"])
      s.add_development_dependency(%q<rubocop>.freeze, ["= 0.33.0"])
      s.add_development_dependency(%q<mime-types>.freeze, ["< 3.0"])
      s.add_development_dependency(%q<rack-no_animations>.freeze, [">= 0"])
    else
      s.add_dependency(%q<railties>.freeze, [">= 3.2.12"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<git>.freeze, [">= 0"])
      s.add_dependency(%q<rspec-rails>.freeze, [">= 0"])
      s.add_dependency(%q<capybara>.freeze, [">= 0"])
      s.add_dependency(%q<grape>.freeze, [">= 0"])
      s.add_dependency(%q<grape-swagger>.freeze, [">= 0.7.2"])
      s.add_dependency(%q<selenium-webdriver>.freeze, [">= 0"])
      s.add_dependency(%q<sass-rails>.freeze, [">= 0"])
      s.add_dependency(%q<uglifier>.freeze, [">= 0"])
      s.add_dependency(%q<coffee-rails>.freeze, [">= 0"])
      s.add_dependency(%q<jquery-rails>.freeze, [">= 0"])
      s.add_dependency(%q<grape-swagger-ui>.freeze, [">= 0"])
      s.add_dependency(%q<sprockets>.freeze, [">= 0"])
      s.add_dependency(%q<rack>.freeze, ["~> 1.6"])
      s.add_dependency(%q<rack-cors>.freeze, [">= 0"])
      s.add_dependency(%q<rubocop>.freeze, ["= 0.33.0"])
      s.add_dependency(%q<mime-types>.freeze, ["< 3.0"])
      s.add_dependency(%q<rack-no_animations>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<railties>.freeze, [">= 3.2.12"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<git>.freeze, [">= 0"])
    s.add_dependency(%q<rspec-rails>.freeze, [">= 0"])
    s.add_dependency(%q<capybara>.freeze, [">= 0"])
    s.add_dependency(%q<grape>.freeze, [">= 0"])
    s.add_dependency(%q<grape-swagger>.freeze, [">= 0.7.2"])
    s.add_dependency(%q<selenium-webdriver>.freeze, [">= 0"])
    s.add_dependency(%q<sass-rails>.freeze, [">= 0"])
    s.add_dependency(%q<uglifier>.freeze, [">= 0"])
    s.add_dependency(%q<coffee-rails>.freeze, [">= 0"])
    s.add_dependency(%q<jquery-rails>.freeze, [">= 0"])
    s.add_dependency(%q<grape-swagger-ui>.freeze, [">= 0"])
    s.add_dependency(%q<sprockets>.freeze, [">= 0"])
    s.add_dependency(%q<rack>.freeze, ["~> 1.6"])
    s.add_dependency(%q<rack-cors>.freeze, [">= 0"])
    s.add_dependency(%q<rubocop>.freeze, ["= 0.33.0"])
    s.add_dependency(%q<mime-types>.freeze, ["< 3.0"])
    s.add_dependency(%q<rack-no_animations>.freeze, [">= 0"])
  end
end
