source "https://rubygems.org"

# Specify Ruby version for compatibility
ruby "~> 3.3.0"

gem "jekyll", "~> 4.4.1"

# Use sassc for SCSS compilation (compatible with Ruby 3.2+)
gem "sassc", "~> 2.4"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-sitemap", "~> 1.4"
end

# Platform-specific gems for Windows and JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Add webrick for Ruby 3.0+ compatibility
gem "webrick", "~> 1.8"
