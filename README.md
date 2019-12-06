# open-borders
Allow warp travel for templates

Inspired by https://dev.to/westbrook/your-content-in-shadow-dom-portals-3cdb, https://www.npmjs.com/package/portal-vue, https://reactjs.org/docs/portals.html

```html
<open-borders be-born target=... schema=...>
    <template>
        <my-element></my-element>
    </template>
</open-borders>
```

does the following:

1.  Nothing happens until be-born attribute / beBorn property is set (to true).  At that point...
2.  Clones the template into the location specified by target string [TODO]
3.  Holds on to reference of cloned element.  cloned element also gets reference to open-border birthplace [TODO]
4.  Dynamically attaches property myProp / attribute to open-borders tag (my-element), based on schema prop (follows custom-elements.json schema). [TODO]
5.  If addEventListener added to open-borders, actually attaches eventlistener to remote reference (my-element). [TODO].
6.  If target changes, moves element to new target.
