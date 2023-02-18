**Ruby Debugger** connects to [debug](https://github.com/ruby/debug) library and allows to debug Ruby/Rails scripts and applications right inside Nova editor.

## Requirements

- Ruby (MRI) 2.6 and later.
- [debug.rb](https://github.com/ruby/debug) 1.7.1 or later.

If you use Bundler, write the following line to your Gemfile.
```
gem "debug", ">= 1.7.1"
```

## Usage

Typical usage for Ruby on Rails 7+:

Update your *Procfile.dev* file:
```
web: bundle exec rdbg --nonstop --open --port 8989 -c -- bin/rails server -p 3000
...
```

Run the Rails app:
```
bin/dev
```

Inside Nova editor:
- Open the Project Settings
- Add new task **Ruby Remote Debug**
- Click Done
- Click green button "Run the current task"

Now you can set, activate, deactivate and remove breakpoints clicking on the line numbers in source files and inspect the state.

## Credit

Credit goes to [Koichi Sasada](https://github.com/ko1) and all Ruby contributors.

