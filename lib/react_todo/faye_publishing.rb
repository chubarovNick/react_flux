module ReactTodo
  module FayePublishing
    extend self

    def publish_create(item, chanel)
      Thunderer.publish_to(chanel, wrap_item_to_payload(item, :create))
    end

    def publish_update(item, chanel)
      Thunderer.publish_to(chanel, wrap_item_to_payload(item, :update))

    end

    def publish_destroy(item, chanel)
      Thunderer.publish_to(chanel, wrap_item_to_payload(item, :destroy))
    end

    private

    def wrap_item_to_payload(item, event_name)
      base_hash = item.as_json
      {
          item: base_hash,
          event: constant_event_name(item, event_name)
      }
    end

    def constant_event_name(item, event)
      "#{item.class.name.underscore.upcase}_#{event.upcase}"
    end
  end
end