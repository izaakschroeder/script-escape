# script-escape

Prevent XSS attacks by safely escaping values for use in `<script>` tags.

```javascript
var escape = require('script-escape');

// Safety first!
escape(JSON.stringify({ test: '</script>' }));
```
