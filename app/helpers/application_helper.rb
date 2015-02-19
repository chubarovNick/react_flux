module ApplicationHelper

  def render_component(component_module, args = {}, options = {}, &block)
    options = {tag: options} if options.is_a?(Symbol)

    html_options = options.reverse_merge(:data => {})

  end

end
