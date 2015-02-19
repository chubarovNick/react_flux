module ReactTodo
  class RenderComponent
    class PrerenderError < RuntimeError
      def initialize(component_name, props, js_message)
        message = "Encountered error \"#{js_message}\" when prerendering #{component_name} with #{props}"
        super(message)
      end
    end

    cattr_accessor :pool

    def render(component, args = {})
      js_code = <<-JS
        function(){
          var component = require('#{component}');
          return React.renderToString(React.createElement(component,#{react_props(args)}))
        }()
      JS
      context.eval(js_code)
    rescue ExecJS::ProgramError => e
      raise PrerenderError.new(component, react_props(args), e)
    end

    def context
      @context ||= ExecJS.compile(self.class.combined_js)
    end

    private

    def react_props(args = {})
      if args.is_a?(String)
        args
      else
        args.to_json
      end
    end

  end
end