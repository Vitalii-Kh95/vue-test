import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {

  configure({
    // Generates an English message locale generator
    generateMessage: localize('en', {
      messages: {
        required: 'This field is required',
        email: 'Invalid email address',
        numeric: 'Only numbers are allowed',
        min: 'Too short',
        max: 'Too long',
        confirmed: 'Passwords do not match',
      },
    }),
  });

  Object.keys(rules)
    .filter((k) => k !== "default")
    .forEach((rule) => {
      defineRule(rule, rules[rule]);
      //   console.log(rule);
    });


});