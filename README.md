Plugin for [aldeed:autoform](https://github.com/aldeed/meteor-autoform) to add international telephone numbers 
via the NPM [intl-tel-input](https://www.npmjs.com/package/intl-tel-input) library.

Turns this:

```js

  phone: {
    type: SimpleSchema.RegEx.Phone,
    label: "Phone",
    autoform: {
      afFieldInput: {
        type: "intl-tel"
      }
    }
  }

```

Into this:

![image](https://raw.github.com/jackocnr/intl-tel-input/master/screenshots/vanilla.png)

### Installation

1. Install the `intl-tel-input` library.

    ```
    meteor npm install intl-tel-input@15.0.2 --save
    ```

2. Install this library.

    ```
    meteor add juto:autoform-telephone-input
    ```

3. (optional but recommended) Configure Simple-Schema validation.

    In your schema JS (on the client):
    
    ```js
    import SimpleSchema from 'simpl-schema';
    import {Meteor} from 'meteor/meteor';
    import {Tracker} from 'meteor/tracker';
    let intlTelInput;
    
    if (Meteor.isClient) {
      intlTelInput = require('intl-tel-input');
    }

    let schema = {
      // ...
      phone: {
        type: SimpleSchema.RegEx.Phone,
        label: "Company Contact Phone",
        autoform: {
          afFieldInput: {
            type: "intl-tel",
            autocomplete: "tel"
          }
        },
        custom: function() {
          if (Meteor.isClient && this.isSet && window.intlTelInputUtils) {
            const valid = window.intlTelInputUtils.isValidNumber(this.value);
            if (!valid) {
              return SimpleSchema.ErrorTypes.VALUE_NOT_ALLOWED;
            }
          } 
        }
      }
      // ...
    };
 
    window.MySchema = new SimpleSchema(schema, {tracker: Tracker});
    ```
