// centralized event hub.
// allow to communicate between components no matter where they are in the component tree
// - even between siblings!
// Because Vue instances implement an event emitter interface, you can actually use an empty Vue instance for this purpose.
import Vue from "vue";
const EventBus = new Vue();

// This is the event hub we'll use in every
// component to communicate between them.
export default EventBus;