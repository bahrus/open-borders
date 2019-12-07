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

- [x] Nothing happens until be-born attribute / beBorn property is set (to true).  At that point...
- [x] Clones the template into the location specified by target string 
- [ ] If no target string, just clone and append to parent (?) 
- [ ] Changing be-born back to false / true doesn't do anything anymore. 
- [ ] Holds on to reference of cloned element.  cloned element also gets reference to open-border birthplace 
- [ ] Dynamically attaches properties attributes to open-borders tag, based on schema prop (follows custom-elements.json schema). 
- [ ] If addEventListener added to open-borders, actually attaches event listener to remote reference (my-element).
- [ ] If target changes, moves element to new target.
