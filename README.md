# Checkbox Reversed

A module for ProcessWire CMS/CMF. Modifies InputfieldCheckbox so that it shows the reverse of its true value. The checkbox will be unchecked when the field value is 1 and checked when the field value is *not* 1.

## Background

The core FieldtypeCheckbox does not have a setting that allows a checkbox to be checked by default. One reason for this is that only a checked field saves a value to the database. An unchecked field does not save "0" to the database, but rather does not save any value for the field at all. Therefore there is no way to distinguish between a new field that has not yet been saved (and therefore could potentially get a default checked state) and a field that has deliberately been saved as unchecked.

Because of this you sometimes have to use a checkbox in the opposite way than you would like. Suppose your client has requested a checkbox labelled "Bootylicious" that will be checked by default. This isn't possible with FieldtypeCheckbox so instead you have to have convince them that a checkbox labelled "Not bootylicious" that is unchecked by default is just as good. This alternative will achieve the same thing, but it's not ideal.

## A solution

This module doesn't change the limitations of the core checkbox field, but it provides a workaround that allows you to show the checkbox with the desired default state and label. So in the example above, you would still name the field "not_bootylicious" (otherwise it could get confusing in your template files) but you can label the field "Bootylicious" and the checkbox will appear checked when its true value is actually unchecked, and vice versa. This allows new pages to have the checkbox checked by default. Clear as mud? :)

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the Checkbox Reversed module.

For any Checkbox field where you want the inputfield to show the reverse of its true value, activate the "Reverse the checked state of this inputfield?" option in the field settings.

![checkbox-reversed-setting](https://user-images.githubusercontent.com/1538852/36626005-479f441a-198f-11e8-9601-72cecaea1b9f.png)
