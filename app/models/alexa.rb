require 'alexa_generator'

module Interactive
  class AlexaModel
    def self.get
      @instance
    end

    def self.define(&block)
      @instance = AlexaGenerator::InteractionModel.build do |model|
        yield model
      end
    end
  end
end

Interactive::AlexaModel.define do |model|
  model.add_intent("AMAZON.YesIntent")
  model.add_intent("AMAZON.NoIntent")
  model.add_intent("AMAZON.CancelIntent")
  model.add_intent("AMAZON.StopIntent")

  model.add_intent(:TaskPost) do |intent|
    intent.add_slot(:Generic, "AMAZON.LITERAL") do |slot|
      slot.add_bindings(
        'find me a handyman',
        'clean my house',
        # ... many, many things here ...
        'wait in line',
      )
    end

    intent.add_slot(:ScheduleDate, "AMAZON.DATE") do |slot|
      slot.add_bindings(
        'tomorrow',
        'today',
        'this friday',
        'thursday',
      )
    end

    intent.add_slot(:ScheduleTime, "AMAZON.TIME") do |slot|
      slot.add_bindings(
        'morning',
        'afternoon',
        'evening',
        'noon',
        'six pm',
      )
    end

    intent.add_utterance_template('{Generic}')
    intent.add_utterance_template('{ScheduleDate} at {ScheduleTime}')
    intent.add_utterance_template('{ScheduleDate} {ScheduleTime}')
    intent.add_utterance_template('{ScheduleTime} {ScheduleDate}')
    intent.add_utterance_template('{ScheduleDate}')
    intent.add_utterance_template('{ScheduleTime}')
  end
end
