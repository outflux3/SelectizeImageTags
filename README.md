# SelectizeImageTags module for ProcessWire
================

Admin helper to enhance image tagging in Processwire [ProcessWire CMS](http://processwire.com/).

## Features

- Discreet tagging interface using the existing tags field on images.
- Allows sorting of tags by drag and drop, and deletion by click
- Allows admins to restrict the allowed tags.
- Supports template context (different tags for same image field on different templates)

## Usage

1. Install the module.

2. Go to field settings for any image, enable Selectize.js tagging;
3. add your tags for this field, one per line
4. To have a separate value/label, they should be comma separated (value,label);
5. Values for tags may not contain spaces

example:
- tag1, Tag1 (use this for blah blah blah)
- tag2, Tag 2 (this tag wil do xyz)
- tag3, The greatest tag of all time - use only in an emergency!


## License

Licensed under the MIT license.

"SelectizeImageTags" is provided "as-is" without warranty of any kind, express, implied or otherwise, including without limitation, any warranty of merchantability or fitness for a particular purpose. In no event shall the author of this software be held liable for data loss, damages, loss of profits or any other kind of loss while using or misusing this software.
