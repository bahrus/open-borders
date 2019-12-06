# open-borders
Allow warp travel for templates


```html
<open-borders target=... schema=...>
    <template>
        <my-element></my-element>
    </template>
</open-borders>
```

does the following:

1.  Clones the template into the location specified by target string [TODO]
2.  Holds on to reference of cloned element [TODO]
3.  Dynamically attaches property myProp / attribute to open-borders tag (my-element), based on schema prop (follows custom-elements.json schema). [TODO]
4.  If addEventListener added to open-borders, actually attaches eventlistener to remote reference (my-element). [TODO]
