import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import intlTelInput from "intl-tel-input/build/js/intlTelInputWithUtils.js";
const AutoForm = Package['aldeed:autoform']?.AutoForm;

AutoForm?.addInputType("intl-tel", {
  template: "intlTelephoneInput",
  // valueIn: function(val, attrs){
  //   return val;
  // },
  valueOut: function () {
    if (intlTelInput) {
      const iti = intlTelInput.getInstance(this[0]);
      if (iti.isValidNumber()) {
        return iti.getNumber();
      } else {
        return this.val();
      }
    } else {
      return this.val();
    }
  },
});

// Template["intlTelephoneInput"].events({
//   "click #intl-telephone-input"(event, template) {
//     console.log("clicked #intl-telephone-input");
//     console.log(event);
//     console.log(template);
//   }
// });

Template["intlTelephoneInput"].helpers({
  attsPlusFormControlClass: function addFormControlAtts() {
    var atts = { ...this.atts };
    // Add bootstrap class
    atts = AutoForm?.Utility.addClass(atts, "form-control");
    delete atts.intlTelInputOptions;
    return atts;
  },
});

/*
 * called when an instance of this template is inserted into the DOM.
 * This can be a good place to apply any DOM manipulations you want, after the template is rendered for the first time.
 * e.g. jQuery plugins
 */
Template["intlTelephoneInput"].onRendered(function () {
  const tmpl = Template.instance();
  let input = tmpl.$("input[type=tel]")[0];

  let data = this.data;
  let opts = data.atts.intlTelInputOptions || {
    onlyCountries: ["au", "gb", "us"],
    initialCountry: "au",
  };
  intlTelInput(input, opts)
    .promise.then(function () {

      tmpl.iti.set(intlTelInput.getInstance(input));
      window.intlTelInputUtils = intlTelInput.utils;
    })
    .catch(function () {
      console.log("intlTelInput failed");
    });
});

/*
 * called when an instance of this template is created.
 * called before the template’s logic is evaluated for the first time.
 * `this` is the new template instance object. Properties you set on this object will be visible from the callbacks added
 *  with onRendered and onDestroyed methods and from event handlers.
 */
Template["intlTelephoneInput"].onCreated(function () {
  this.iti = new ReactiveVar(false);
});

Template["intlTelephoneInput_bootstrap3"].inheritsEventsFrom(
  "intlTelephoneInput"
);
Template["intlTelephoneInput_bootstrap3"].inheritsHelpersFrom(
  "intlTelephoneInput"
);
Template["intlTelephoneInput_bootstrap3"].inheritsHooksFrom(
  "intlTelephoneInput"
);


Template["intlTelephoneInput_materialize"].inheritsEventsFrom(
  "intlTelephoneInput"
);
Template["intlTelephoneInput_materialize"].inheritsHelpersFrom(
  "intlTelephoneInput"
);
Template["intlTelephoneInput_materialize"].inheritsHooksFrom(
  "intlTelephoneInput"
);
